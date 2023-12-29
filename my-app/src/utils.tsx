import { setContentUrl } from './Search';

export function keyBindCtrl(key: string, fn: any) {
    document.addEventListener('keydown', (e) => {
        if (e.key === key && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            fn();
        }
    }
    );
}

export function keyBind(key: string, fn: any) {
    document.addEventListener('keydown', (e) => {
        if (e.key === key) {
            e.preventDefault();
            fn();
        }
    }
    );
}

export function handleUrlChange() {

    let params = new URLSearchParams(window.location.search);
    let page = params.get('title');
    if (page === null) {
        page = "help";
    }
    setContentUrl(page);
}

export function rightSwipe(fn: any) {
    let touchstartX = 0;
    let touchendX = 0;

    function checkSwipe() {
        if ((touchendX > touchstartX) && (touchendX - touchstartX > 150)) {
            console.log("swiped right");
            fn();
        }
    }
    document.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX;
    });
    document.addEventListener('touchend', (e) => {
        touchendX = e.changedTouches[0].screenX;
        checkSwipe();
    });
}
