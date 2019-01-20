export default colors = {
    primary: '#6FCDBB',
    primaryVariant: '#333',
    secondary: '#333',
    secondaryVariant: '#333',
    background: '#FFFFFF',
    surface: '#444950',
    error: '#B00020',
    onPrimary: '#FFFFFF',
    onSecondary: '#333',
    // onBackground: '#606770',
    onBackground: '#333333',
    onSurface: '#333',
    onError: '#FFFFFF',
    disable: '#F5F5F5',
    border: '#D9D9D9',
    textDisable: '#B7B7B7'
}

export function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}