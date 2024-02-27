
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store';
import { Box, Button, OutlinedInput } from '@mui/material';


const TodoForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const [taskSetter, setTaskSetter] = useState('');
    const [taskPerformer, setTaskPerformer] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodoAction({ task, taskSetter, taskPerformer, additionalInfo }));
        setTask('');
        setTaskSetter('');
        setTaskPerformer('');
        setAdditionalInfo('');
    };

    return (
        <Box className="todo__form" border={2} borderRadius={10} p={2} maxWidth="80%" margin="auto">
            <Box display="flex" flexDirection="row" justifyContent="center" gap={2} alignItems="center">
                <OutlinedInput
                    className="todo__form_input"
                    placeholder="ToDo"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ width: '25%' }}
                />
                <OutlinedInput
                    className="todo__form_input"
                    placeholder="Setter"
                    value={taskSetter}
                    onChange={(e) => setTaskSetter(e.target.value)}
                    style={{ width: '25%' }}
                />
                <OutlinedInput
                    className="todo__form_input"
                    placeholder="Performer"
                    value={taskPerformer}
                    onChange={(e) => setTaskPerformer(e.target.value)}
                    style={{ width: '25%' }}
                />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" margin="auto" mt={2} width="50%">
                <OutlinedInput
                    className="todo__form_textarea"
                    placeholder="Additional Info"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    style={{ width: '75%' }}
                />

            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
                <Button className="todo__form_submit_btn" variant="contained" color="primary" onClick={handleAddTodo}>
                    Add Todo
                </Button>
            </Box>
        </Box>
    );
};

export default TodoForm;








