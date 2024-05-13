import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToken } from '../../redux/SliceAuth';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import Schemas from "../Schemas/Schemas";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Formik } from 'formik';
import { FormWrapper, Title, Description, ErrorMessage, Input, InputWrapper, Form, PasswordWrapper, PasswordVisibility, Button  } from "./Auth.styled";
export const RegisterForm = ({ onClose }) => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const handelSubmit = async values => {
    const { email, password } = values;
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // await addDoc(collection(db, 'users'), {
      //   name,
      //   email,
      //   id: result.user.uid,
      // });

      dispatch(addToken(result.user.accessToken));
      onClose();
      return result;
    } catch (error) {
      throw error;
    }
  };

  return (
    <FormWrapper>
      <Title>Registration</Title>
      <Description>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Description>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={Schemas}
        onSubmit={handelSubmit}
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
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <ErrorMessage>* {errors.name}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <Input
                id="email"
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
                  id="password"
                  name="password"
                  type={visibility ? 'text' : 'password'}
                  placeholder="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <PasswordVisibility
                  type="button"
                  onClick={() => setVisibility(!visibility)}
                >
                  {visibility ? <FiEye /> : <FiEyeOff />}
                </PasswordVisibility>
              </PasswordWrapper>
              {errors.password && touched.password ? (
                <ErrorMessage>* {errors.password}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
