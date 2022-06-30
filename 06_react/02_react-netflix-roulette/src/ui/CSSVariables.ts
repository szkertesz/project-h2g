const backgroundColorInput = String(
    getComputedStyle(document.documentElement).getPropertyValue(
        '--color-bg-input'
    )
);
const colorAccent = String(
    getComputedStyle(document.documentElement).getPropertyValue(
        '--color-accent'
    )
);
const colorLight = String(
    getComputedStyle(document.documentElement).getPropertyValue('--color-light')
);
const heightInput = String(
    getComputedStyle(document.documentElement).getPropertyValue(
        '--height-input'
    )
);

export {backgroundColorInput, colorLight, colorAccent, heightInput}
