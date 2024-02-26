export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RESET_STORE = 'RESET_STORE';
export const LOAD_TODOS_REQUEST = 'LOAD_TODOS_REQUEST';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const addTodoAction = (todo) => ({ type: ADD_TODO, payload: todo });
export const completeTodoAction = (id) => ({ type: COMPLETE_TODO, payload: id });
export const removeTodoAction = (id) => ({ type: REMOVE_TODO, payload: id });
export const resetStoreAction = () => ({type: RESET_STORE,});
export const loadTodosRequest = () => ({type: LOAD_TODOS_REQUEST,});
export const loadTodosSuccess = (todos) => ({type: LOAD_TODOS_SUCCESS, payload: todos,});
export const loadTodosFailure = (error) => ({type: LOAD_TODOS_FAILURE, payload: error,});