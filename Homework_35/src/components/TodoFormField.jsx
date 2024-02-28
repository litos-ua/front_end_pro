import React from 'react';
import { TextField } from '@mui/material';

const FormField = ({ id, label, formik, ...props }) => {
    return (
        <TextField
            fullWidth
            id={id}
            name={id}
            label={label}
            variant="outlined"
            margin="normal"
            value={formik.values[id]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={formik.touched[id] && formik.errors[id]}
            {...props}
        />
    );
};

export default FormField;
