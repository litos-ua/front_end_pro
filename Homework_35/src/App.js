// import React from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import './App.css';
// import {CssBaseline, Typography} from "@mui/material";
//
// function App() {
//   return (
//       <div className="todo">
//           <CssBaseline/>
//           <Typography variant="h2" align="center" className="todo__head">
//               Todo List
//           </Typography>
//           <TodoForm />
//           <TodoList />
//       </div>
//   );
// }
//
// export default App;



// App.js

import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { CssBaseline, Typography, AppBar, Toolbar, Switch, Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lightTheme from './services/myTheme';

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
                        <Switch
                            checked={mode === 'dark'}
                            onChange={toggleColorMode}
                            inputProps={{ 'aria-label': 'toggle light/dark theme' }}
                        />
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



