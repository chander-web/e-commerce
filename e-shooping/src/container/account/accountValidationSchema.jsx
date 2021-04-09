import * as Yup from 'yup';

export const signUpIntialValue = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: ''
};

export const signInIntialValue = {
  email: '',
  password: ''
};

export const singUpValidationSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last Name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    phone: Yup.string()
      .min(10, 'Phone Minimum 10 digits')
      .required('Phone is required'),
    password: Yup.string()
      .required('Password is required')
  });
};


export const singInValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
  });
};