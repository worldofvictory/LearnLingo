//import { useState } from 'react';
import { Formik } from 'formik';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import {
  Description,
  ErrorMessage,
  Form,
  FormWrapper,
  Input,
  Title,
  Button,
  PasswordVisibility,
  InputWrapper,
  PasswordWrapper,
} from './Auth.styled';
import Schemas from "../Schemas/Schemas";

export const Login = () => {
const initialValues = {
    name: '',
    email: '',
    password: '',
    };
    return (
    <FormWrapper>
      <Title>Log In</Title>
      <Description>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Description>
      <Formik
        initialValues={initialValues}
        validationSchema={Schemas} 
      >
        {({
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          handleBlur,
          handleChange,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <ErrorMessage>* {errors.email}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <PasswordWrapper>
                <Input
                  name="password"
                  placeholder="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <PasswordVisibility
                  type="button"
                >
                  <FiEyeOff /> : <FiEye />
                </PasswordVisibility>
              </PasswordWrapper>
              {errors.password && touched.password ? (
                <ErrorMessage>* {errors.password}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
 }
