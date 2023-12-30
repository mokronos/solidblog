import { For, createSignal, createResource, createEffect } from "solid-js";
import MiniSearch from "minisearch";
import { keyBind, rightSwipe } from "./utils";

const initialSearchIndex = 0;

const [query, setQuery] = createSignal<string>("help");
export const [contentUrl, setContentUrl] = createSignal<string>("help");
export const [searchActive, setSearchActive] = createSignal<boolean>(false);
const [searchResults, setSearchResults] = createSignal<any[]>([]);
const [selected, setSelected] = createSignal<number>(initialSearchIndex);


export function Search() {

    console.log("mounting search");

    const [data] = createResource(fetchData);
    const [ms] = createResource(data, createMs);

    keyBind('ArrowUp', () => setSelected((selected() + 1) % searchResults().length));
    keyBind('ArrowDown', () => setSelected(((selected() - 1) + searchResults().length) % searchResults().length));
    keyBind('Enter', () => {
        let s = searchResults();
        console.log("enter pressed, search results: ", s);
        if (s.length > 0) {
            console.log(s[selected()].title);
            setContentUrl(s[selected()].title);
            window.scrollTo({ top: 0, behavior: 'instant' });
            window.history.pushState({}, "", `?title=${s[selected()].title}`);
            setSearchActive(false);
        }
    });
    keyBind('Escape', () => setSearchActive(false));

    rightSwipe(() => setSearchActive(true));


    createEffect(() => {
        if (ms()?.search) {
            if (query() === "") {
                setSearchResults(data());
                return;
            }
            let results = ms()!.search(query(),
                { prefix: true, fuzzy: 5, boost: { title: 2 } }
                );
            setSearchResults(results);
        }
    });

    createEffect(() => {
        if (searchActive()) {
            let s = document.getElementById('search');
            s?.focus();
            setQuery("");
            setSelected(initialSearchIndex);
        }
    });

    return (
    <>
    <SearchResults />
    <input autofocus autocomplete="off"
    type="text" placeholder="Search" list="frontmatter" id="search"
    value={query()}
    onInput={(e: any) => {
        setQuery(e.target.value);
        setSelected(initialSearchIndex);
        }}
    class="mt-2 h-10 w-full flex-none rounded-lg bg-gray-700 p-2 text-gray-200 shadow-lg"
    />
    </>
    )
}

function createMs(data: any) {
    let ms = new MiniSearch({
        fields: ['title', 'tag'],
        storeFields: ['title', 'date', 'tag'],
    });
    ms.addAll(data);
    console.log(ms);
    return ms;
}

function SearchResults() {


    return (
    <>
    <ul class="flex grow flex-col-reverse items-start overflow-y-scroll rounded-lg bg-gray-700 p-2 shadow-lg">
    <For each={searchResults()}>
    {(item, i) => <li
    classList={{'text-orange-400': selected() === i()}}
    class="mb-0.5 cursor-pointer list-none hover:text-orange-400"
    onClick={() => {
        setSelected(i());
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    }}
    >{item.title} | {item.tag}</li>}
    </For>
    </ul>
    </>
    )
}

export function SearchContainer() {
    return (
    <div
    classList={{hidden: !searchActive()}}
    class="fixed left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center backdrop-blur-sm"
    onClick={() => setSearchActive(false)}>
    <div class="z-20 mx-4 flex h-1/2 w-1/2 flex-col justify-end rounded-lg bg-gray-600 p-4 shadow-lg"
    onClick={(e) => e.stopPropagation()}>
    <Search />
    </div>
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
