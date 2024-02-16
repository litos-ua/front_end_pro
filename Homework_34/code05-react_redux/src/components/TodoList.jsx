import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodoAction, removeTodoAction } from '../store';
import { selectTodos } from '../store';

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const completeHandler = (id) => {
        dispatch(completeTodoAction(id));
    };

    const removeHandler = (id) => {
        dispatch(removeTodoAction(id));
    };


    return (
        <div className="todo___ul">
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    <div>Task: {todo.task}</div>
                    <div>Setter: {todo.taskSetter}</div>
                    <div>Performer: {todo.taskPerformer}</div>
                    <div>Additional Info: {todo.additionalInfo}</div>
                    <div>Creation Time: {new Date(todo.create_time).toLocaleString()}</div>
                    <button className="todo___ul_btn_complete"
                            onClick={() => completeHandler(todo.id)} disabled={todo.completed}>
                        Complete
                    </button>
                    <button className="todo___ul_btn_remove" onClick={() => removeHandler(todo.id)}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default TodoList;





