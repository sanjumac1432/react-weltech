import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup  from 'yup'

export const Formvalidation = () => {

const validationshcam = ()=>{

    return Yup.object().shape({ 
        firstname : Yup.string().required("first name is required"),
        lastname : Yup.string().required("last name is required"),
        email: Yup.string().required("emai is required").email("email is invalid"),
        password: Yup.string().required("password is required").min( 6, "Password must be at least 6 characters" ).max(8," Password must not exceed 8 characters"),
        confirmpassword: Yup.string().required( "conforms password confirmation is required").oneOf([Yup.ref( "password")],"Password does not match"),
        tearms : Yup.bool().required( "terms and conditions must be accepted").oneOf([true] ,  "you must agree to the terms")




    })


}



  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        tearms : false
      }}
      onSubmit={(values) => {
        console.log(values);
      }}

      validationSchema={validationshcam()}
    >
      <Form>
        <label htmlFor="firstname">first Name</label>
        <Field id="firstname" name="firstname" placeholder="firstname" />
        <ErrorMessage
          name="firstname"
          component="div"
          className="text-danger"
        ></ErrorMessage>

        <label htmlFor="lastname">Last Name</label>
        <Field id="lastname" name="lastname" placeholder="lastname" />

        <ErrorMessage
          name="lastname"
          component="div"
          className="text-danger"
        ></ErrorMessage>

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-danger"
        ></ErrorMessage>

        <label htmlFor="password">password</label>
        <Field
          id="password"
          name="password"
          placeholder="password"
          type="password"
        />

        <ErrorMessage
          name="password"
          component="div"
          className="text-danger"
        ></ErrorMessage>

        <label htmlFor="confirmpassword">confrom password</label>
        <Field
          id="confirmpassword"
          name="confirmpassword"
          placeholder="conform password"
          type="password"
        />

        <ErrorMessage
          name="confirmpassword"
          component="div"
          className="text-danger"
        ></ErrorMessage>
 <label htmlFor="tearms">tearsms</label>
        <Field
          id="tearms"
          name="tearms"
          placeholder=" tearms"
          type="checkbox"
        />
          <ErrorMessage
          name="tearms"
          component="div"
          className="text-danger"
        ></ErrorMessage>


        <input type="submit" value="submit" />
      </Form>
    </Formik>
  );
};
