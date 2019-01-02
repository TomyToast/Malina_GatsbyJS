import Typography from "typography";
import funstonTheme from 'typography-theme-funston';

const typography = new Typography(
    {
        baseFontSize: '18px',
        baseLineHeight: 1.666,
        headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        bodyFontFamily: ['Segoe UI', 'Georgia', 'serif'],
    },
    funstonTheme
);

typography.injectStyles();

export default typography