import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`;

export const Form = styled.form`
  display: block;
`;

export const Input = styled.input`
  border-radius: 12px;
  width: 100%;
  border: 1px solid var( --homepage);
  padding: 16px 18px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
  display: block;
  outline: none;
  transition: border var(--transition);

  &:focus {
    border: 1px solid var(--hoverBt);
  }
`;

export const ErrorMessage = styled.p`
  color: #ff0000c2;
  margin-top: 5px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37;
`;

export const InputWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 18px;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const PasswordVisibility = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  transition: color var(--transition);
  background-color: transparent;
  border: none;

  &:hover,
  :focus {
    color: var(--active-color);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border-radius: 12px;
  background-color: var(--active-color);
  border: none;
  width: 100%;
  padding: 16px 0;
  margin: 40px auto 0;
  transition: background-color var(--transition);

  &:hover,
  :focus {
    background-color: var(--hoverBt);
  }
`;
export const FormWrapper = styled.div`
  width: 566px;
  max-width: 100%;
  padding: 64px;
`;