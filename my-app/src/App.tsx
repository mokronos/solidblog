import './App.css'
import { contentUrl, SearchContainer, searchActive, setSearchActive } from "./Search";
import { Content } from "./Content";
import { handleUrlChange, keyBindCtrl } from "./utils";

function App() {

    keyBindCtrl('k', () => setSearchActive(searchActive() ? false : true));
    document.addEventListener('DOMContentLoaded', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);

    return (
            <>
            <SearchContainer />
            <Content url={contentUrl} />
            </>
           )
}

export default App
