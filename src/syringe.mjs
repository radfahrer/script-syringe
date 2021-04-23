function injectScript({ options = {}, ...attributes }) {
    const script = document.createElement('script');

    /* assign attributes */
    Object.keys(attributes).forEach((key) => {
        script[key] = attributes[key];
    });

    /* inject script */
    document.head.appendChild(script);
}

export function inject(scripts) {
    if (Array.isArray(scripts)) {
        scripts.forEach(injectScript);
    } else {
        injectScript(scripts);
    }
}