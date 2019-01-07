import Typography from "typography";
import funstonTheme from 'typography-theme-funston';

const typography = new Typography(
    {
        baseFontSize: '16px',
        baseLineHeight: 1,
        headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        bodyFontFamily: ['Segoe UI', 'Georgia', 'serif'],
    },
    funstonTheme
);


export default typography