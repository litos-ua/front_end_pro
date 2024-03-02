import { createAsyncThunk } from "@reduxjs/toolkit";
import {getTodos} from "../../api";
import {config} from "../../config";

/****************************************
 * DUCK
 ****************************************/

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async (_, { signal, rejectWithValue }) => {
        try {

            const data = await getTodos(config.urlMockapi, signal)

            const preparedData = data.map((todo) => ({
                ...todo,
                loadedFromRemote: true,
            }));




            return preparedData;
        } catch (error) {
            console.error('Error fetching todos:', error);
            return rejectWithValue(error.message);
        }
    },
);

