import {Field, Form, Formik, FormikHelpers, FormikValues, useFormik} from "formik";
import React, {FormEvent, useState} from "react";
import {authMe} from "../common/api";
import {Redirect} from "react-router-dom";

interface Values {
    loginName: string;
    email: string;
}


export const Login = () => {
    const [st, setSt] = useState(true)
    const validate = (v: any) => {
        const errors = {
            loginName: '',
            email: ''
        }
        if (!v.loginName) {
            errors.loginName = 'Required';
        } else if (v.loginName.length > 15) {
            errors.loginName = 'Must be 15 characters or less';
        }
        if (!v.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v.email)) {
            errors.email = 'Invalid email address';
        }
        if (errors.loginName === '' && errors.email === '') {
            console.log("NO MISTAKES")
            return {}
        }
        return errors
    }
    const formik = useFormik({
        initialValues: {
            loginName: '',
            email: '',
        },
        validate,
        onSubmit: (values: Values, {setSubmitting}: FormikHelpers<Values>
        ) => {
            console.log('www', values)
            authMe().then(data => {
                console.log(data)

                if (data.data.login === values.loginName && data.data.email === values.email) {
                    setSt(false)
                }
            })
            setSubmitting(false);

        },

    });
    const submit = (e: any) => {
        formik.handleSubmit(e)

    }
    const isAuth = () => {
        authMe().then(data => {
            if (data.resultCode === 0) {
                setSt(false)
        }
    })
    }
    isAuth()
    return (
        <div>
            {!st && <Redirect to={'/profile'}/>}
            <h1>Login</h1>
            <Formik
                initialValues={formik.initialValues}
                onSubmit={(values) => submit(values)}
            >
                <Form>
                    <label htmlFor="loginName">Login Name </label>
                    <Field id="loginName" {...formik.getFieldProps('loginName')}/>
                    {formik.touched.loginName && formik.errors.loginName ?
                        <div style={{color: 'red'}}>{formik.errors.loginName}</div> : null}

                    <div>
                        <label htmlFor="email">Email </label>
                        <Field id="email" name="email" placeholder="xxxx@mail.xxx"
                               type="email" onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.email}/>
                        {formik.touched.email && formik.errors.email ?
                            <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    </div>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}