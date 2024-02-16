
import { addTodoAction } from './actions';

export const fetchTodoById = (id) => async (dispatch) => {
    try {
        const response = await fetch(`https://65ce335ec715428e8b402e03.mockapi.io/api/todo/${id}`);
        const data = await response.json();

        data.forEach(todo => {
            dispatch(addTodoAction(todo));
        });
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};
