import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import  * as Yup from "yup";




export const Login = () => {
 const validate = ()=>{
    return Yup.object().shape({
        email : Yup.string().required("email is required").email("email is invalid"),
        password: Yup.string().required("password is required").matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one digit")
        .matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one special character")
    })
 }

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          
        }}
        onSubmit={(values) => {
          console.log(values);
        }}

        validationSchema={validate()}
      >
        <Form>
         

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <ErrorMessage name="email" component="div" className="text-danger" />

          <label htmlFor="password">password</label>
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
 <ErrorMessage name="password" component="div" className="text-danger" />

         

          <input type="submit" value="submit" />
        </Form>
      </Formik>
    </div>
  );
};
