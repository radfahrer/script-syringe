function injectScript({ options = {}, ...attributes }) {
    const script = document.createElement('script');

    /* assign attributes */
    Object.keys(attributes).forEach((key) => {
        /* validate attribute */
        if (typeof script[key] === 'undefined') {
            throw new Error(`Unsupported attribute detected: ${key}`);
        } else {
            script[key] = attributes[key];
        }
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