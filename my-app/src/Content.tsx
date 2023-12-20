import { createEffect, createResource, on } from "solid-js";
import type { Accessor } from "solid-js";

export function Content(props: {url: Accessor<string>}) {

    const [content] = createResource(props.url, fetchContent);

    createEffect(on(content, () => {
        console.log(`Content mounted`);
        refreshMath();
    }));

    return (
    <div>
    <p>Content:</p>
    <div innerHTML={content()}></div>
    </div>
    )
}

const fetchContent = async (name: string) => {
    let url = `/data/${name}.html`;
    console.log(`fetching ${url}`);
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

function refreshMath() {
    // i dont like the mathjax solution, would be nicer to render
    // the math equations beforehand as html + css and then just
    // request and render the html, no need to do it clientside
    if (typeof MathJax.typeset !== 'undefined') {
        MathJax.typeset();
        console.log(`Math refreshed`);
    }
}
