
import { addTodoAction, resetStoreAction } from '../actions';


export const saveTodo = (todoData, controller) => async (dispatch, getState) => {
    try {
        const response = await fetch('https://65ce335ec715428e8b402e03.mockapi.io/api/todo/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoData),
            signal: controller.signal,
        });

        const statusCode = response.status;
        console.log('Response code:', statusCode);

        if (response.ok) {
            const data = await response.json();

            const existingTodo = getState().todosManager.todosItems.find(todo => todo.id === data.id);
            if (!existingTodo) {
                dispatch(addTodoAction(data));
            }

            console.log('Todo saved successfully:', data);

            dispatch(resetStoreAction());

        } else {
            throw new Error('Failed to save todo');
        }
    } catch (error) {
        console.error('Error saving todo:', error);
    }
};
