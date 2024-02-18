
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



// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { completeTodoAction, removeTodoAction } from '../store';
// import { selectTodos } from '../store';
// import { saveTodo } from '../store';
//
// const TodoList = () => {
//     const todos = useSelector(selectTodos);
//     const dispatch = useDispatch();
//     const [blockRendered, setBlockRendered] = useState(false);
//
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
//         setBlockRendered(true);
//     };
//
//     return (
//         <div>
//             {!blockRendered && (
//                 <div className="todo___ul">
//                     <ul>
//                         {todos.map((todo) => (
//                             <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//                                 <div>Task: {todo.task}</div>
//                                 <div>Setter: {todo.taskSetter}</div>
//                                 <div>Performer: {todo.taskPerformer}</div>
//                                 <div>Additional Info: {todo.additionalInfo}</div>
//                                 <div>Creation Time: {new Date(todo.createdAt).toLocaleString()}</div>
//                                 <button className="todo___ul_btn_complete" onClick={() => completeHandler(todo.id)} disabled={todo.completed}>
//                                     Complete
//                                 </button>
//                                 <button className="todo___ul_btn_remove" onClick={() => removeHandler(todo.id)}>
//                                     Remove
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//
//                 </div>
//             )}
//             <button className="todo___btn_save" onClick={saveTodos}>Save</button>
//         </div>
//     );
// };
//
// export default TodoList;




import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodoAction, removeTodoAction } from '../store';
import { selectTodos } from '../store';
import { saveTodo } from '../store';

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

    // const saveTodos = () => {
    //     const controller = new AbortController();
    //     todos.forEach(todo => {
    //         dispatch(saveTodo(todo, controller));
    //     });
    //     setBlockRendered(true);
    //     return () => {
    //         controller.abort();
    //         setBlockRendered(true);
    //     };
    // }

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


    // useEffect(() => {
    //     const controller = new AbortController();
    //     dispatch(saveTodo(todos, controller));
    //     return () => {
    //         controller.abort();
    //         setBlockRendered(false);
    //     };
    //     // eslint-disable-next-line
    // }, [count]);

    console.log('local form data', todos);

    return (
        <div>
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

                </div>
            )}
            <button className="todo___btn_save" onClick={saveTodos}>Save</button>
        </div>
    );
};

export default TodoList;



