import * as yup from 'yup';

const formSchema = yup.object().shape({
    // first_name: yup
    //   .string()
    //   .trim()
    //   .required('First name is required!')
    //   .min(1, 'First name must be 1 or more characters long, silly'),
    //   last_name: yup
    //   .string()
    //   .trim()
    //   .required('Last Name is required!')
    //   .min(1, 'Last name must be 1 or more characters long, silly'),
    // email: yup
    //   .string()
    //   .email('Must be a valid email address!')
    //   .required('Email is required!'),
    // password: yup
    //   .string()
    //   .required('Must be a valid password!'),
    // tos: yup.boolean().oneOf(true)
});

export default formSchema