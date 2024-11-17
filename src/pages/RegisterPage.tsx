import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import * as Yup from 'yup';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  username: Yup.string().min(3, 'Username must be at least 3 characters').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});

const RegisterPage: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (values: { username: string, email: string, password: string }) => {
    try {
      const response = await register(values.username, values.email, values.password);
      
      if (response.status !== 201) {
        return
      }

      navigate("/login")
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form>
            <Field
              name="username"
              as={TextField}
              label="Username"
              fullWidth
              variant="outlined"
              margin="normal"
              value={values.username}
              onChange={handleChange}
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              value={values.email}
              onChange={handleChange}
            />
            <Field
              name="password"
              as={TextField}
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              value={values.password}
              onChange={handleChange}
            />
            {error && <Box sx={{ color: 'red' }}>{error}</Box>}
            <Button type="submit" fullWidth variant="contained" sx={{ marginTop: 2 }}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export { RegisterPage };
