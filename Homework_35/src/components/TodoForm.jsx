
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../ducks';
import { Box, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormField from './TodoFormField';

const TodoForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        task: Yup.string()
            .min(3, 'Task must be at least 3 characters')
            .max(20, 'Task must be at most 20 characters')
            .matches(/^[a-zA-Z0-9-_]+$/, 'Task can only contain letters, numbers, "-", and "_"')
            .required('Task is required'),
        taskSetter: Yup.string()
            .min(5, 'Setter must be at least 5 characters')
            .max(20, 'Setter must be at most 20 characters')
            .matches(/^[a-zA-Z-_]+$/, 'Setter can only contain letters, "-", and "_"')
            .required('Setter is required'),
        taskPerformer: Yup.string()
            .min(5, 'Performer must be at least 5 characters')
            .max(20, 'Performer must be at most 20 characters')
            .matches(/^[a-zA-Z-_]+$/, 'Performer can only contain letters, "-", and "_"')
            .required('Performer is required'),
        additionalInfo: Yup.string()
            .max(100, 'Additional info must be at most 100 characters'),
    });

    const formik = useFormik({
        initialValues: {
            task: '',
            taskSetter: '',
            taskPerformer: '',
            additionalInfo: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch(addTodoAction(values));
            resetForm();
        },
    });

    return (
        <Box className="todo__form" border={2} borderRadius={10} p={2} maxWidth="80%" margin="auto" component="form" onSubmit={formik.handleSubmit}>
            <FormField id="task" label="ToDo" formik={formik} />
            <FormField id="taskSetter" label="Setter" formik={formik} />
            <FormField id="taskPerformer" label="Performer" formik={formik} />
            <FormField id="additionalInfo" label="Additional Info" formik={formik} multiline rows={3} />
            <Box display="flex" justifyContent="center" mt={2}>
                <Button className="todo__form_submit_btn" variant="contained" color="primary" type="submit">
                    Add Todo
                </Button>
            </Box>
        </Box>
    );
};

export default TodoForm;









