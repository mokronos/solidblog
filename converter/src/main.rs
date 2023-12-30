use std::fs;
use std::collections::HashMap;
use markdown::{
    to_html_with_options,
    Constructs,
    Options,
    ParseOptions, CompileOptions,
};

fn main() {

    let path = "../data";
    let savepath = "../my-app/public/data";
    let jsonpath = "../my-app/public/";

    let mut frontmatters = Vec::new();
    for (id, entry) in fs::read_dir(path).expect("read_dir call failed").enumerate() {
        let entry = entry.expect("Error reading entry");
        println!("Name: {}", entry.path().display());
        let mdcontent = fs::read_to_string(entry.path())
            .expect("Something went wrong reading the file");
        let filename = entry.path().file_stem()
            .expect("Cant get filename")
            .to_str()
            .expect("Cant convert filename to str")
            .to_string();
        let file = parse_markdown(&mdcontent, &filename, id as u64);
        frontmatters.push(file.frontmatter.clone());
        // add filepath as url to frontmatter
        let url = format!("{}", filename);
        let url = url.replace(" ", "_");
        frontmatters.last_mut().unwrap().insert("url".to_string(), url);
        let resultpath = format!("{}/{}.html", savepath, filename);
        fs::write(resultpath, file.content)
            .expect("Something went wrong writing the file");

    }

    let json_frontmatters = serde_json::to_string_pretty(&frontmatters).unwrap();

    fs::write(format!("{}/frontmatters.json", jsonpath), json_frontmatters)
        .expect("Something went wrong writing the file");
}

fn markdown_to_html(content: &str) -> String {
    let custom = Options {
        parse: ParseOptions {
            constructs: Constructs {
                frontmatter: true,
                ..Constructs::gfm()
            },
            ..ParseOptions::gfm()
        },
        compile: CompileOptions {
            allow_dangerous_html: true,
            ..CompileOptions::gfm()
        },
        ..Options::gfm()
    };

    let content_html = to_html_with_options(
        content,
        &custom,
        );

    content_html.unwrap()
}

pub struct File {
    pub content: String,
    pub frontmatter: HashMap<String, String>,
}

pub fn parse_frontmatter(content: &str, filename: &str, id: u64) -> HashMap<String, String> {
    let mut frontmatter = HashMap::new();

    // defaults
    frontmatter.insert("title".to_string(), filename.to_string());
    frontmatter.insert("date".to_string(), "2020-01-01".to_string());
    frontmatter.insert("id".to_string(), id.to_string());

    if !content.starts_with("---\n") {
        return frontmatter;
    }
    let mut content_split = content.split("---\n");

    // skip first element (before first ---)
    // TODO: need to check if frontmatter exists at all, could be horizontal line
    let frontmatter_string = match content_split.next() {
        Some(s) => s,
        // use filename as title if no frontmatter
        None => {
            frontmatter.insert("title".to_string(), filename.to_string());
            return frontmatter;
        },
    };


    // dbg!(&frontmatter_string);

    for line in frontmatter_string.lines() {
        if line.is_empty() {
            continue;
        }
        let line_split: Vec<&str> = line.split(":").collect();
        dbg!(&line_split);
        let key = line_split[0];
        let value = line_split[1];
        frontmatter.insert(key.to_string(), value.to_string());
    }

    frontmatter
}


pub fn parse_markdown(md: &str, filename: &str, id: u64) -> File {
    let frontmatter = parse_frontmatter(md, filename, id);
    // let content = markdown_to_html_alt(md);
    let content = markdown_to_html(md);
    File {
        content,
        frontmatter,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn multiple_lines() {
        let content = "# Hello World \n ## Hello World \n ### Hello World";
        let content_html = markdown_to_html(content);
        assert_eq!(content_html,
                   "<h1>Hello World</h1>\n\
                   <h2>Hello World</h2>\n\
                   <h3>Hello World</h3>");
    }
}
