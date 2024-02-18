
import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {completeTodoAction, removeTodoAction, resetStoreAction} from '../store';
import { selectTodos } from '../store';
import { saveTodo } from '../store';
import { loadTodos } from '../store';
import { loadTodosRequest, loadTodosSuccess, loadTodosFailure } from '../store';

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [blockRendered, setBlockRendered] = useState(false);
    const completeHandler = (id) => {
        dispatch(completeTodoAction(id));
    };

    const removeHandler = (id) => {
        dispatch(removeTodoAction(id));
    };

    const saveTodos = async () => {
        const controller = new AbortController();
        try {
            await Promise.all(todos.map(todo => dispatch(saveTodo(todo, controller))));
            setBlockRendered(false);
        } catch (error) {
            console.error('Error saving todos:', error);
        } finally {
            controller.abort();
        }
    };

    const loadRemoteTodos = () => {
        return async (dispatch) => {
            const controller = new AbortController();
            try {
                dispatch(loadTodosRequest());
                const remoteTodos = await loadTodos(controller);
                dispatch(loadTodosSuccess(remoteTodos));
            } catch (error) {
                console.error('Error loading remote todos:', error);
                dispatch(loadTodosFailure(error));
            } finally {
                controller.abort();
            }
        };
    };

    const resetStore = () => {
        dispatch(resetStoreAction());
    };

//    console.log('local form data', todos);

    return (
        <div>
            {!blockRendered && (
                <div className="todo__ul">
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                <div>Task: {todo.task}</div>
                                <div>Setter: {todo.taskSetter}</div>
                                <div>Performer: {todo.taskPerformer}</div>
                                <div>Additional Info: {todo.additionalInfo}</div>
                                <div>Creation Time: {new Date(todo.createdAt).toLocaleString()}</div>
                                <button className="todo__ul_btn_complete" onClick={() => completeHandler(todo.id)} disabled={todo.completed}>
                                    Complete
                                </button>
                                <button className="todo__ul_btn_remove" onClick={() => removeHandler(todo.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
            <div className="todo__div_remote_btn">
                <button className="todo__btn_save" onClick={saveTodos}>Save Remote</button>
                <button className="todo__btn_load" onClick={() => dispatch(loadRemoteTodos())}>Load Remote</button>
                <button className="todo__btn_reset" onClick={resetStore}>Reset Store</button>
            </div>
        </div>
    );
};

export default TodoList;



