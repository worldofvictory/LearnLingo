import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { toast } from 'react-toastify';
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
import { addToken } from '../../redux/SliceAuth';

export const Login = ({ onClose }) => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const handelSubmit = async values => {
    const { email, password } = values;
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(addToken(credentials.user.accessToken));
      onClose();
      return credentials.user;
    } catch (error) {
      toast.error(
        'Oops something went wrong',
      );
    }
  };

  return (
    <FormWrapper>
      <Title>Log In</Title>
      <Description>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Description>
      <Formik
        initialValues={{
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
                type="email"
                id="email"
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
                  type={visibility ? 'text' : 'password'}
                  placeholder="Password"
                  onBlur={handleBlur}
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <PasswordVisibility
                  type="button"
                  onClick={() => setVisibility(!visibility)}
                >
                  {visibility ? <FiEyeOff /> : <FiEye />}
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
};
