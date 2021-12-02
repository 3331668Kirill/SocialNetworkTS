import {Field, Form, Formik, FormikHelpers, FormikValues, useFormik} from "formik";
import React, {FormEvent, useState} from "react";
import {authMe} from "../common/api";
import {Redirect} from "react-router-dom";

interface Values {
    loginName: string;
    email: string;
}

type OnSubmit =
    ((values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => (void | Promise<any>))
    & ((e?: (React.FormEvent<HTMLFormElement> | undefined)) => void)

export const Login = () => {
    const [st, setSt] = useState(true)
    const formik = useFormik({
        initialValues: {
            loginName: '',
            email: '',
        },
        onSubmit: (values: Values, {setSubmitting}: FormikHelpers<Values>
        ) => {

            setSubmitting(false);
            setSt(false)
        },
    });
    const onch = (e: any) => {
        authMe().then(data => {
            console.log(data)
            if (data.resultCode === 1 || data.data.login === e.loginName && data.data.email === e.email) {
                console.log(e)
                formik.handleSubmit(e)
            }
        })
    }

    return (
        <div>
            {!st && <Redirect to={'/profile'}/>}
            <h1>Login</h1>
            <Formik
                initialValues={formik.initialValues}
                onSubmit={onch}
            >
                <Form>
                    <label htmlFor="loginName">Login Name </label>
                    <Field id="loginName" name="loginName" placeholder="loginName"/>

                    {/*<label htmlFor="lastName">Last Name</label>*/}
                    {/*<Field id="lastName" name="lastName" placeholder="Doe" />*/}

                    <label htmlFor="email">Email </label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="john@mail.com"
                        type="email"
                    />

                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}