
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { signUpIntialValue, singUpValidationSchema } from './accountValidationSchema';

const SignUpView = () => {
  return (
    <React.Fragment>
      <Formik initialValues={signUpIntialValue}
        validationSchema={singUpValidationSchema}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, touched }) => 
          (<Form>
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
                  <label htmlFor="phone">Phone</label>
                  <Field name="phone" type="text" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                  <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Password</label>
                  <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                  <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-primary mr-2">Register</button>&nbsp;
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </div>
            </div>
          </Form>)
        }
      />
    </React.Fragment>
  );
};

export default SignUpView;
