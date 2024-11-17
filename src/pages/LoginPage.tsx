import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Box, Divider } from "@mui/material";
import * as Yup from "yup";
import { login } from "../services/api";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

interface PrivateRouteProps {
  setIsLoggedIn: (value: boolean) => void;
}

const LoginPage: React.FC<PrivateRouteProps> = ({setIsLoggedIn}) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await login(values.email, values.password);
      if (response.status !== 200) {
        return;
      }
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      setIsLoggedIn(true)
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 3 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form>
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
            {error && <Box sx={{ color: "red" }}>{error}</Box>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
            <Divider />
            <Button
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={() => navigate("/register")}
            >
              {"Registration"}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export { LoginPage };
