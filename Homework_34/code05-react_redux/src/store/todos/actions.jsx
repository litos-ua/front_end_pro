export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RESET_STORE = 'RESET_STORE';

export const addTodoAction = (todo) => ({ type: ADD_TODO, payload: todo });
export const completeTodoAction = (id) => ({ type: COMPLETE_TODO, payload: id });
export const removeTodoAction = (id) => ({ type: REMOVE_TODO, payload: id });
export const resetStoreAction = () => ({type: RESET_STORE,});