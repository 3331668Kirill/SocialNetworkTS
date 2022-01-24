import {Field, Form, Formik, FormikHelpers, useFormik} from "formik";
import React from "react";
import {authorization} from "../common/api";
import {Redirect} from "react-router-dom";
import css from "./login.module.css"


interface Values {
    password: string
    email: string

}


export const Login = (props: { auth: any, getAuthUserData: any }) => {

    console.log(props)
    const validate = (v: any) => {
        const errors = {
            password: '',
            email: ''
        }
        if (!v.password) {
            errors.password = 'Required';
        } else if (v.password.length > 15) {
            errors.password = 'Must be 15 characters or less';
        }
        if (!v.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v.email)) {
            errors.email = 'Invalid email address';
        }
        if (errors.password === '' && errors.email === '') {
            console.log("NO MISTAKES")
            return {}
        }
        return errors
    }
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validate,
        onSubmit: (values: Values, {setSubmitting}: FormikHelpers<Values>
        ) => {

            authorization(values.email, values.password).then(data => {
                console.log("authorization")
                console.log(data)

                if (data.resultCode === 0) {
                    props.getAuthUserData()

                }
            })
            setSubmitting(false);

        },

    });
    const submit = (e: any) => {
        formik.handleSubmit(e)

    }

    return (
        <div className={css.login_block}>
            {props.auth.isAuth && <Redirect to={'/profile'}/>}
            <h1 className={css.auth}>Authorization</h1>
            <Formik
                initialValues={formik.initialValues}
                onSubmit={(values) => submit(values)}
            >
                <Form className={css.form}>


                    <div className={css.fields}>
                        <label htmlFor="email">email </label>
                        <Field id="email" name="email" placeholder="xxxx@mail.xxx"
                               type="email" onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.email}/>
                    </div>
                    {formik.touched.password && formik.errors.password ?
                        <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                    <div className={css.fields}>
                        <label htmlFor="password">password </label>

                        <Field id="password" type="password" {...formik.getFieldProps('password')}/>
                    </div>

                    {formik.touched.email && formik.errors.email ?
                        <div style={{color: 'red'}}>{formik.errors.email}</div> : null}

                    <button className={css.button} type="submit">Login</button>

                    <p>use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>

                </Form>
            </Formik>
        </div>
    )
}