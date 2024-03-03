import { createAsyncThunk } from '@reduxjs/toolkit';
import { delTodos } from "../../api";
import { config } from "../../config";

/****************************************
 * DUCK
 ****************************************/

export const removeTodoAsync = createAsyncThunk(
    'todos/removeTodoAsync',
    async (id, { rejectWithValue }) => {
        try {
            await delTodos(`${config.urlMockapi}/${id}`);
            alert(`The element with id ${id} has been successfully removed`);
            return id;
        } catch (error) {
            console.error(`Failed to remove todo on remote server: ${error.message}`);
            return rejectWithValue(error.message);
        }
    }
);