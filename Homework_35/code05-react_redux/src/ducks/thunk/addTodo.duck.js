import { createAsyncThunk } from '@reduxjs/toolkit';
import { postTodos } from "../../api";
import { config } from "../../config";

/****************************************
 * DUCK
 ****************************************/

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (todoData, { rejectWithValue }) => {
        try {
            const response = await postTodos(`${config.urlMockapi}`, todoData);
            console.log('response =', response);
            if (response) {
                alert(`The element with id ${todoData} has completed todo success`)
                return response
            } else {
                throw new Error(`Failed to add todo`);
            }
        } catch (error) {
            console.error('Failed to add todo on remote server:', error);
            return rejectWithValue(error.message);
        }
    }
);