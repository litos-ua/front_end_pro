
// import { useSelector, useDispatch } from 'react-redux';
// import { completeTodoAction, removeTodoAction } from '../store';
// import { selectTodos } from '../store';
// import { saveTodo } from '../store'
//
// const TodoList = () => {
//     const todos = useSelector(selectTodos);
//     const dispatch = useDispatch();
//     const completeHandler = (id) => {
//         dispatch(completeTodoAction(id));
//     };
//
//     const removeHandler = (id) => {
//         dispatch(removeTodoAction(id));
//     };
//
//     const saveTodos = () => {
//         todos.forEach(todo => {
//             dispatch(saveTodo(todo));
//         });
//     };
//
//
//     return (
//         <div className="todo___ul">
//         <ul>
//             {todos.map((todo) => (
//                 <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//                     <div>Task: {todo.task}</div>
//                     <div>Setter: {todo.taskSetter}</div>
//                     <div>Performer: {todo.taskPerformer}</div>
//                     <div>Additional Info: {todo.additionalInfo}</div>
//                     <div>Creation Time: {new Date(todo.createdAt).toLocaleString()}</div>
//                     <button className="todo___ul_btn_complete"
//                             onClick={() => completeHandler(todo.id)} disabled={todo.completed}>
//                         Complete
//                     </button>
//                     <button className="todo___ul_btn_remove" onClick={() => removeHandler(todo.id)}>
//                         Remove
//                     </button>
//                 </li>
//             ))}
//         </ul>
//             <button className="todo___btn_save" onClick={saveTodos}>Save</button>
//         </div>
//     );
// };
//
// export default TodoList;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodoAction, removeTodoAction } from '../store';
import { selectTodos } from '../store';
import { saveTodo } from '../store';

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [blockRendered, setBlockRendered] = useState(false); // State to track whether the block has been rendered

    const completeHandler = (id) => {
        dispatch(completeTodoAction(id));
    };

    const removeHandler = (id) => {
        dispatch(removeTodoAction(id));
    };

    const saveTodos = () => {
        todos.forEach(todo => {
            dispatch(saveTodo(todo));
        });
        setBlockRendered(true); // Update state to indicate the block has been rendered
    };

    return (
        <div>
            {/* Conditionally render the block based on the state */}
            {!blockRendered && (
                <div className="todo___ul">
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                <div>Task: {todo.task}</div>
                                <div>Setter: {todo.taskSetter}</div>
                                <div>Performer: {todo.taskPerformer}</div>
                                <div>Additional Info: {todo.additionalInfo}</div>
                                <div>Creation Time: {new Date(todo.createdAt).toLocaleString()}</div>
                                <button className="todo___ul_btn_complete" onClick={() => completeHandler(todo.id)} disabled={todo.completed}>
                                    Complete
                                </button>
                                <button className="todo___ul_btn_remove" onClick={() => removeHandler(todo.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className="todo___btn_save" onClick={saveTodos}>Save</button>
                </div>
            )}
        </div>
    );
};

export default TodoList;







