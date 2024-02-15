
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store';
import './todos.css';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const [taskSetter, setTaskSetter] = useState('');
    const [taskPerformer, setTaskPerformer] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodoAction({ task, taskSetter, taskPerformer, additionalInfo}));
        setTask('');
        setTaskSetter('');
        setTaskPerformer('');
        setAdditionalInfo('');
    };

    return (
        <form className="todo__form todo" onSubmit={handleAddTodo}>
            <div className="todo__form_input">
                <input className="todo__form_input todo__form_input_todo" type="text" placeholder="ToDo"
                    value={task} onChange={(e) => setTask(e.target.value)} />
                <input className="todo__form_input todo__form_input_setter" type="text" placeholder="Setter"
                    value={taskSetter} onChange={(e) => setTaskSetter(e.target.value)} />
                <input className="todo__form_input todo__form_input_performer" type="text" placeholder="Performer"
                    value={taskPerformer} onChange={(e) => setTaskPerformer(e.target.value)} />
            </div>

            <textarea className="todo__form_textarea" placeholder="Additional Info"
                      value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />

            <div className="todo__form_submit">
                <button  className="todo__form_submit_btn" type="submit">Add Todo</button>
            </div>

        </form>
    );
};

export default TodoForm;
