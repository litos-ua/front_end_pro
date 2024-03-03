import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../ducks/todo.duck';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export default store;