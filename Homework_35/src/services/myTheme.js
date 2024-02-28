import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'html': {
                    backgroundColor: 'burlywood',
                },
                '.todo': {
                    backgroundColor: 'burlywood',
                },
                '.todo__form': {
                    backgroundColor: '#efd399',
                },
            },
        },
    },
});

export default lightTheme;