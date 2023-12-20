import './App.css'
import { query, SearchContainer, searchActive, setSearchActive } from "./Search";
import { Content } from "./Content";
import { Show } from "solid-js/web";
import { keyBind, keyBindCtrl } from "./utils";

function App() {

    keyBindCtrl('k', () => setSearchActive(searchActive() ? false : true));

    return (
            <>
            <Show when={searchActive()}>
            <SearchContainer />
            </Show>
            <Content url={query} />
            </>
           )
}

export default App
