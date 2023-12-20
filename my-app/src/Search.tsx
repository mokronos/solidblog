import { For, createSignal, createResource, Suspense, createEffect } from "solid-js";
import MiniSearch from "minisearch";
import { keyBind, keyBindCtrl } from "./utils";

export const [query, setQuery] = createSignal<string>("");
export const [searchActive, setSearchActive] = createSignal<boolean>(true);
const [searchResults, setSearchResults] = createSignal<any[]>([]);
const [selected, setSelected] = createSignal<number>(0);


export function Search() {

    const [data] = createResource(fetchData);
    const [ms] = createResource(data, createMs);

    keyBind('ArrowUp', () => setSelected(selected() - 1));
    keyBind('ArrowDown', () => setSelected(selected() + 1));


    createEffect(() => {
        console.log("in effect");
        if (ms()?.search) {
            console.log(ms());
            let results = ms()!.search(query(),
                { prefix: true, fuzzy: 0.2, boost: { title: 2 } }
                );
            setSearchResults(results);
        }
        // console.log(searchResults());
        console.log("query changed");
    });

    return (
    <>
    <p>Search:</p>
    <input autofocus type="text" placeholder="Search" list="frontmatter"
    value={query()}
    onInput={(e: any) => setQuery(e.target.value)}
    />
    <SearchResults />
    </>
    )
}

function createMs(data: any) {
    let ms = new MiniSearch({
        fields: ['title'],
        storeFields: ['title', 'date']
    });
    data.forEach((item: any, i: any) => {
        item.id = i;
    });
    ms.addAll(data);
    return ms;
}

function SearchResults() {

    return (
    <>
    <p>Selected: {selected()}</p>
    <ul>
    <For each={searchResults()} fallback={<li>Loading...</li>}>
    {(item, i) => <li
    class={selected() === i() ? 'selected' : ''}
    >{item.title}</li>}
    </For>
    </ul>
    </>
    )
}

export function SearchContainer() {
    return (
    <div>
    <button onClick={() => setSearchActive(false)}>Close</button>
    <Search />
    </div>
    )
}

const fetchData = async () => {
    let url = `frontmatters.json`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(`fetched ${url}`);
    return json;
}
