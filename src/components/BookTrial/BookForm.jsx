import Schemas from '../Schemas/Schemas'
import { TextMaskCustom } from "./Number"
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Formik } from 'formik';
import {
  FormTitle,
  Form,
  Button,
  WrapperInput,
  ErrorMessage,
} from './BookTrial.styled';
import { useSelector } from 'react-redux';
const options = [
  { name: 'Career and business', id: '1' },
  { name: 'Lesson for kids', id: '2' },
  { name: 'Living abroad', id: '3' },
  { name: 'Exams and coursework', id: '4' },
  { name: 'Culture, travel or hobby', id: '5' },
];


export const FormComponent = ({ languages }) => {
  const language = useSelector(state => state.filter.name);

  const learning = language === '' ? languages.join(', ') : language;

  const handelSubmit = values => {
    console.log(values);
  };

  return (
    <FormControl>
      <FormTitle>What is your main reason for learning {learning}?</FormTitle>
      <Formik
        initialValues={{
          email: '',
          fullName: '',
          number: '',
          lesson: options[0].name,
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
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={values.lesson}
              onChange={handleChange}
              name="radio-buttons-group"
              className="radio_group"
            >
              {options.map(({ name, id }) => (
                <FormControlLabel
                  key={id}
                  value={name}
                  name="lesson"
                  control={
                    <Radio
                      sx={{
                        color: '#12141733',
                        '&.Mui-checked': {
                          color: '#F4C550',
                        },
                      }}
                    />
                  }
                  label={name}
                />
              ))}
            </RadioGroup>
            <div>
              <WrapperInput>
                <input
                  type="text"
                  name="fullName"
                  onBlur={handleBlur}
                  placeholder="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && touched.fullName ? (
                  <ErrorMessage>* {errors.fullName}</ErrorMessage>
                ) : null}
              </WrapperInput>
              <WrapperInput>
                <input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <ErrorMessage>* {errors.email}</ErrorMessage>
                ) : null}
              </WrapperInput>
              <WrapperInput>
                <TextMaskCustom
                  type="tel"
                  name="number"
                  onBlur={handleBlur}
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={values.number}
                />
                {errors.number && touched.number ? (
                  <ErrorMessage>* {errors.number}</ErrorMessage>
                ) : null}
              </WrapperInput>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Book
            </Button>
          </Form>
        )}
      </Formik>
    </FormControl>
  );
};
