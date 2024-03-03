import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './thunk'

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        addTodoAction: (state, action) => {
            const newTodo = {
                id: generateId(),
                task: action.payload.task,
                completed: false,
                taskSetter: action.payload.taskSetter,
                taskPerformer: action.payload.taskPerformer,
                additionalInfo: action.payload.additionalInfo,
                createdAt: new Date().toISOString(),
            };
            state.items.push(newTodo);
        },
        completeTodoAction: (state, action) => {
            const todo = state.items.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = true;
            }
        },
        removeTodoAction: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
        },
        resetStoreAction: (state) => {
            state.items = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
    selectors: {
        selectTodos: (state) => state.items,
    },
});

export const {
    addTodoAction,
    completeTodoAction,
    removeTodoAction,
    resetStoreAction,
} = todosSlice.actions;


export const { selectTodos } = todosSlice.selectors;
export default todosSlice.reducer;