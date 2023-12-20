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
