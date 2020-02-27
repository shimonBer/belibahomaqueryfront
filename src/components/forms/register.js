import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import {registerService} from '../services/academeez'

export default ({registerCb}) => {

    const [jwt, updateJwt] = useState('');
    const register = async (values) => {
        try{
            const jwt = await registerService(values);
            registerCb(jwt.token);
        }
        catch(err){
            window.alert(err);
        }
    }
    return (
        <Formik initialValues={{ firstName:'', lastName:'', email:'', password:'' }} 
                onSubmit={register}>
                    <Form>
                        <div>
                            <label>First Name</label>
                            <Field name='firstName'/>
                        </div>
                        <div>
                            <label>Last Name</label>
                            <Field name='lastName'/>
                        </div>
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
