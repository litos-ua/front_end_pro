
import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {completeTodoAction, removeTodoAction, resetStoreAction} from '../store';
import { selectTodos, saveTodo, loadTodos } from '../store';
import { loadTodosRequest, loadTodosSuccess, loadTodosFailure } from '../store';
import {markTodoCompletedRemote, deleteTodoRemote} from '../store';
import { Button, Box, List, ListItem, ListItemText } from '@mui/material';
//import './loader.css';

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [blockRendered, setBlockRendered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const completeHandler = (id, loadedFromRemote) => {

        try {
            dispatch(completeTodoAction(id));
        } catch (error) {
            console.error('Error completing task on the Redux store:', error);
        }

        if (loadedFromRemote) {
            setIsLoading(true)
            try {
                markTodoCompletedRemote(id);
            } catch (error) {
                console.error('Error marking task as completed on remote server:', error);
            }
            finally {
                setIsLoading(false);
            }
        }
    };


    const removeHandler = (id, loadedFromRemote) => {

        try {
            dispatch(removeTodoAction(id));
        } catch (error) {
            console.error('Error deleting task on the Redux store:', error);
        }

        if (loadedFromRemote) {
            setIsLoading(true);
            try {
                console.log('begin try');
                deleteTodoRemote(id);
            } catch (error) {
                console.error('Error deleting task on the remote server:', error);
            }
            finally {
                setIsLoading(false);
            }
        }

    };

    const saveTodos = async () => {
        setIsLoading(true);
        const controller = new AbortController();
        try {
            await Promise.all(todos.map(todo => dispatch(saveTodo(todo, controller))));
            setBlockRendered(false);
        } catch (error) {
            console.error('Error saving todos:', error);
        } finally {
            setIsLoading(false);
            controller.abort();
        }
    };


    const loadRemoteTodos = () => {
        return async (dispatch) => {
            setIsLoading(true);
            const controller = new AbortController();
            try {
                dispatch(loadTodosRequest());
                const remoteTodos = await loadTodos(controller);
                dispatch(loadTodosSuccess(remoteTodos));
            } catch (error) {
                console.error('Error loading remote todos:', error);
                dispatch(loadTodosFailure(error));
            } finally {
                setIsLoading(false);
                controller.abort();
            }
        };
    };

    const handleLoadRemoteTodos = async () => {
        try {
            await dispatch(loadRemoteTodos());
        } catch (error) {
            console.error('Error loading remote todos:', error);
        }
    };


    const resetStore = () => {
        dispatch(resetStoreAction());
    };

    // const renderStyle = (todo) => {
    //     return todo.loadedFromRemote ? { color: 'blue' } : {};
    // };


    return (
        <div>
            {isLoading && <div className="lds-hourglass"></div>}
            {!blockRendered && (
                <List>
                    {todos.map((todo) => (
                        <ListItem key={todo.id}>
                            <ListItemText
                                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                primary={todo.task}
                                secondary={
                                    <>
                                        Setter: {todo.taskSetter}<br />
                                        Performer: {todo.taskPerformer}<br />
                                        Additional Info: {todo.additionalInfo}<br />
                                        Creation Time: {new Date(todo.createdAt).toLocaleString()}<br />
                                    </>
                                }
                            />
                            <Button
                                variant="contained" color="primary"
                                onClick={() => completeHandler(todo.id, todo.loadedFromRemote)}
                                disabled={todo.completed}
                            >
                                Complete
                            </Button>
                            <Button
                                variant="contained" color="warning"
                                onClick={() => removeHandler(todo.id, todo.loadedFromRemote)}>
                                Remove
                            </Button>
                        </ListItem>
                    ))}
                </List>
            )}
            <Box className="todo__div_remote_btn" sx={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
                <Button variant="contained" color="primary" onClick={saveTodos}>Save Remote</Button>
                <Button variant="contained" color="secondary" onClick={handleLoadRemoteTodos}>Load Remote</Button>
                <Button variant="contained" color="success" onClick={resetStore}>Reset Store</Button>
            </Box>
        </div>
    );
};

export default TodoList;
