
import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {completeTodoAction, removeTodoAction, resetStoreAction} from '../ducks';
import {fetchTodos, completeTodoAsync, removeTodoAsync} from "../ducks/thunk";
import { Button, Box, List, ListItem, ListItemText } from '@mui/material';
import './loader.css';
import {addTodoAsync} from "../ducks/thunk/addTodo.duck";


const TodoList = () => {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();
    const [blockRendered, setBlockRendered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleAddTodos = async () => {
        setIsLoading(true);
        const controller = new AbortController();
        try {
            await Promise.all(todos.map(todo => dispatch(addTodoAsync(todo))));
            setBlockRendered(false);
        } catch (error) {
            console.error('Error saving todos:', error);
        } finally {
            setIsLoading(false);
            resetStore();
            controller.abort();
        }
    };


    const handleLoadRemoteTodos = () => {
        setIsLoading(true);
        (async () => {
            const controller = new AbortController();
            try {
                await dispatch(fetchTodos());
            } catch (error) {
                console.error('Error loading remote todos:', error);
            } finally {
                setIsLoading(false);
                controller.abort();
            }
        })();
    };


    const completeTodoHandler = async (id, loadedFromRemote) => {
        setIsLoading(true);
        console.log('loadedFromRemote', loadedFromRemote)
        const controller = new AbortController();
        try {
            dispatch(completeTodoAction(id));
            if (loadedFromRemote) {
                await dispatch(completeTodoAsync(id));
            }
        } catch (error) {
            console.error('Error completing task:', error);
        } finally {
            setIsLoading(false);
            controller.abort();
        }
    };

    const removeHandler = async (id, loadedFromRemote) => {
        setIsLoading(true);
        console.log('loadedFromRemote', loadedFromRemote)
        const controller = new AbortController();
        try {
            dispatch(removeTodoAction(id));
            if (loadedFromRemote) {
                await dispatch(removeTodoAsync(id));
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        } finally {
            setIsLoading(false);
            controller.abort();
        }
    };


    const resetStore = () => {
        dispatch(resetStoreAction());
    };

    const renderStyle = (todo) => {
        return todo.loadedFromRemote ? { color: 'blue' } : {};
    };


    return (
        <div>
            {isLoading && <div className="lds-hourglass"></div>}
            {!blockRendered && (
                <List>
                    {todos.map((todo) => (
                        <ListItem key={todo.id}>
                            <ListItemText
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: renderStyle(todo).color
                                }}
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
                                onClick={() => completeTodoHandler(todo.id, todo.loadedFromRemote)}
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
                <Button variant="contained" color="primary" onClick={handleAddTodos}>Save Remote</Button>
                <Button variant="contained" color="secondary" onClick={handleLoadRemoteTodos}>Load Remote</Button>
                <Button variant="contained" color="success" onClick={resetStore}>Reset Store</Button>
            </Box>
        </div>
    );
};

export default TodoList;





