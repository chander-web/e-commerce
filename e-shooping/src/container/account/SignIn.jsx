
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signInIntialValue, singInValidationSchema } from './accountValidationSchema';

const SignInView = () => {
    return (
        <Formik initialValues={signInIntialValue}
            validationSchema={singInValidationSchema}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    <div className="container my-3">
                        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
                            <h4>Login</h4>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-primary mr-2">Login</button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        />
    );
};

export default SignInView;
