import React from 'react';
import {Formik, Form, Field} from 'formik';
import {loginService} from '../../services/authServices';



export default (props) => {

    const login = async(values) => {
        try {
            const response = await loginService(values);
            if (200 <= response.status <= 300) {
                // loginCb({ token: response.data.token, expires: response.data.expiresIn });
                localStorage.setItem("query-auth-token", response.data.token);
                props.history.push('/reports');


            }
        }
        catch(err){
            console.log(err);
        }

    }
    return (
        <Formik initialValues={{ email:'', password:'' }} 
                onSubmit={login}>
                    <Form>
                        <div>
                            <label>Email</label>
                            <Field name='email' type='email'/>
                        </div>
                        <div>
                            <label>Password</label>
                            <Field name='password' type='password'/>
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                        </div>
                    </Form>
        </Formik>
        

    );
}
