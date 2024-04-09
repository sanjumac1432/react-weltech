import React from "react";
import { Formik, Field, Form } from "formik";

export const Loginwithformik = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title :"",
          firstname: "",
          lastname:"",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="title">title</label>
          <Field id="title" name="title" placeholder="title" type="text" />

         

          <label htmlFor="firstname">first Name</label>
          <Field id="firstname" name="firstname" placeholder="firstname" />

          <label htmlFor="lastname">Last Name</label>
          <Field id="lastname" name="lastname" placeholder="lastname" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

<label htmlFor="password">password</label>
          <Field id="password" name="password" placeholder="password"  type="password"/>

          <label htmlFor="confirmpassword">confrom password</label>
          <Field id="confirmpassword" name="confirmpassword" placeholder="conform password"  type="password"/>


          <input type="submit" value="submit" />
        </Form>
      </Formik>
    </div>
  );
};
