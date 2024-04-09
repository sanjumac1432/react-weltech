import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Univercityfrom = () => {
  const UniversitySchema = () =>
    Yup.object().shape({
      univercity: Yup.string().required(" University name is required"),
      stream: Yup.string().required(" Stream is required"),
      startyear: Yup.number().required("Start year is required").positive(),
      endyear: Yup.number()
        .required(" End year is required"),
      tearms: Yup.bool().required(" Tearm agreement is required").oneOf([true]),
    });

  return (
    <Formik
      initialValues={{
        univercity: "",
        stream: "",
        startyear: "",
        endyear: "",
        tearms: false,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={UniversitySchema()}
    >
      <Form>
        <label htmlFor="University">University name</label>
        <Field id="University" name="University" placeholder="University" />
        <ErrorMessage
          name="University"
          component="div"
          className="text-danger"
        ></ErrorMessage>

        <Field id="stream" name="stream" placeholder="stream" />

        <ErrorMessage
          name="stream"
          component="div"
          className="text-danger"
        ></ErrorMessage>

        <label htmlFor="startyear">Start Year</label>
        <Field
          id="startyear"
          name="startyear"
          placeholder="startyear"
          type="number"
        />
        <ErrorMessage
          name="startyear"
          component="div"
          className="text-danger"
        ></ErrorMessage>

        <label htmlFor="endyear">End Year</label>
        <Field
          id="endyear"
          name="endyear"
          placeholder="endyear"
          type="number"
        />

        <ErrorMessage
          name="endyear"
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
