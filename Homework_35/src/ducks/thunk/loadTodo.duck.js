import { createAsyncThunk } from "@reduxjs/toolkit";
//import {getUsers} from "../api";

/****************************************
 * DUCK
 ****************************************/

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async (_, { signal, rejectWithValue }) => {
        try {
            const response = await fetch('https://65ce335ec715428e8b402e03.mockapi.io/api/todo/tasks', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
                { signal });

            const data = await response.json();
//            console.log('Response data:', data);

            const statusCode = response.status;
            console.log('Response code:', statusCode);

            const preparedData = data.map((el) => ({
                id: el.id,
                task: el.task,
                completed: el.completed,
                taskSetter: el.taskSetter,
                taskPerformer: el.taskPerformer,
                additionalInfo: el.additionalInfo,
                createdAt: el.createdAt,
            }));

            return preparedData;
        } catch (e) {
            console.error('Error fetching todos:', e);
            return rejectWithValue(e.message);
        }
    },
);

