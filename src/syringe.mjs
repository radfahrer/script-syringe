function promiseToInject({ src, options = {}, ...attributes }) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');

        script.src = src;

        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
    });
}

export function inject(scripts) {
    if (Array.isArray(scripts)) {
        return Promise.all(scripts.map(promiseToInject));
    } else {
        return promiseToInject(scripts);
    }
}