import { createAsyncThunk } from '@reduxjs/toolkit';
import {putTodos} from "../../api";
import {config} from "../../config";

/****************************************
 * DUCK
 ****************************************/


export const completeTodoAsync = createAsyncThunk(
    'todos/completeTodoAsync',
    async (id, { rejectWithValue }) => {
        try {
            await putTodos(`${config.urlMockapi}/${id}`, { completed: true });
            alert(`The element with id ${id} has completed todo success`)
            return id;
        } catch (error) {
            console.error(`Failed to complete todo on remote server: ${error.message}`)
            return rejectWithValue(error.message);
        }
    }
);

