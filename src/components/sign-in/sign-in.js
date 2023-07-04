import React, { useState } from "react";
import "./sign-in.scss";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "../../helpers/swal";

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    const [userName] = values.email.split("@");
    try {
      localStorage.removeItem("userName");
      localStorage.setItem("userName", userName);
      navigate("/dashboard");
    } catch (err) {
      const message = err.message || "An error occurred";
      toast(message, "error");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container fluid className="sign-in">
      <Form noValidate onSubmit={formik.handleSubmit} className="p-4">
        <h2>MANAGE COURSES</h2>
        <h3>SIGN IN</h3>
        <p>Enter your credentials to access your account</p>

        <Form.Group className="mb-3 mt-5">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="my-3"
          disabled={!(formik.dirty && formik.isValid) || loading}
        >
          {loading && <Spinner animation="border" size="sm" />} SIGN IN
        </Button>

        <Form.Group className="mb-3">
          Forgot your password?&nbsp;
          <Link to="/">Reset Password</Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignIn;
