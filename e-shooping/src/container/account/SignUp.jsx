
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const SignUpView = () => {
    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: ''
        }}
            validationSchema={Yup.object().shape({
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
            })}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    <div className="container my-3">
                        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
                            <h4>Register</h4>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text"
                                    className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Phone</label>
                                <Field name="phone" type="text" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                                <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Register</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        />
        // <form>
        //     <div className="container my-3">
        //         <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block" >
        //             <div className="mb-3">
        //                 <label for="firstName" className="form-label">First Name</label>
        //                 <input type="text" className="form-control" id="firstName" />
        //             </div>
        //             <div className="mb-3">
        //                 <label for="lastName" className="form-label">Last Name</label>
        //                 <input type="text" className="form-control" id="lastName" />
        //             </div>
        //             <div className="mb-3">
        //                 <label for="phoneNum" className="form-label">Phone Number</label>
        //                 <input type="number" className="form-control" id="phoneNum" />
        //             </div>
        //             <div className="mb-3">
        //                 <label for="password" className="form-label">Password</label>
        //                 <input type="password" className="form-control" id="password" />
        //             </div>
        //             <button type="submit" className="btn btn-primary btn-block mb-3">Submit</button>
        //         </div>
        //     </div>
        // </form>

    );
};

export default SignUpView;
