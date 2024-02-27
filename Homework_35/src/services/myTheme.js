import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '.todo': {
                    backgroundColor: 'burlywood',
                },
            },
        },
    },
});

export default lightTheme;