import { createEffect, createResource, createSignal, onMount } from "solid-js";

export function Content(props: {url: string}) {

    const [url, setUrl] = createSignal(props.url);
    const [content] = createResource(url, fetchContent);


    onMount(() => {
        console.log(`Content mounted`);
        if (typeof MathJax !== 'undefined') {
            console.log(`MathJax already loaded`);
            refreshMath();
        } else {
            let mathJaxScript = document.querySelector('#MathJax-script');
            mathJaxScript?.addEventListener('load', refreshMath);
        }
    });

    return (
    <div>
    <p>Content:</p>
    <div>{props.url}</div>
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
    MathJax.typeset();
    console.log(`Math refreshed`);
}
