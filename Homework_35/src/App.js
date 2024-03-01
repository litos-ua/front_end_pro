
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { CssBaseline, Typography, AppBar, Toolbar, Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lightTheme from './services/myTheme';
import { ThemeToggleButton } from './components/ThemeToggleButton';

function App() {
    const [mode, setMode] = useState("dark");

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const toggleColorMode = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const currentTheme = mode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div className="todo">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Todo List
                        </Typography>
                        <ThemeToggleButton mode={mode} toggleColorMode={toggleColorMode} />
                    </Toolbar>
                </AppBar>
                <Container>
                    <Typography variant="h2" align="center" sx={{ mt: 4 }}>
                        Todo List
                    </Typography>
                    <TodoForm />
                    <TodoList />
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;



