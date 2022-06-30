const backgroundColorInput = String(
    getComputedStyle(document.documentElement).getPropertyValue(
        '--color-bg-input'
    )
);
export const colorAccent = String(
    getComputedStyle(document.documentElement).getPropertyValue(
        '--color-accent'
    )
);
export const colorLight = String(
    getComputedStyle(document.documentElement).getPropertyValue('--color-light')
);
export const heightInput = String(
    getComputedStyle(document.documentElement).getPropertyValue(
        '--height-input'
    )
);

export default backgroundColorInput
