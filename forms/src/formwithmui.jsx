import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Validatewithmui = () => {
  const Addjobs = Yup.object().shape({
    title: Yup.string().required("title is required"),
    maxApplicant: Yup.number()
      .required("Number of applicants are required")
      .positive(),
    maxPosition: Yup.number()
      .required("Number of positions are required")
      .positive(),
    dateofposting: Yup.string().required("date of posting is required"),
    deadline: Yup.string()
      .required("Deadline for application is required")
      .min(
        Yup.ref("dateofposting"),
        "The deadline must be after the date of posting."
      ),
    skill: Yup.string().required("skill is required"),
    duration: Yup.number()
      .required("duration time is required")
      .oneOf([1, 2, 3, 4, 5, 6]),
    jobtype: Yup.string().required("job type is required"),
    salary: Yup.number().required("salary is required").positive(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      maxApplicant: "",
      maxPosition: "",
      dateofposting: "",
      deadline: "",
      skill: "",
      duration: "",
      jobtype: "",
      salary: "",
    },
    validationSchema: Addjobs,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />

        <TextField
          fullWidth
          id="maxApplicant"
          name="maxApplicant"
          label="Max Applicant"
          type="number"
          value={formik.values.maxApplicant}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.maxApplicant && Boolean(formik.errors.maxApplicant)
          }
          helperText={formik.touched.maxApplicant && formik.errors.maxApplicant}
        />
        <TextField
          fullWidth
          id="maxPosition"
          name="maxPosition"
          label="Max Position"
          type="number"
          value={formik.values.maxPosition}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.maxPosition && Boolean(formik.errors.maxPosition)
          }
          helperText={formik.touched.maxPosition && formik.errors.maxPosition}
        />
        <TextField
          fullWidth
          id="dateofposting"
          name="dateofposting"
          label="Date of Posting"
          type="date"
          value={formik.values.dateofposting}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.dateofposting && Boolean(formik.errors.dateofposting)
          }
          helperText={
            formik.touched.dateofposting && formik.errors.dateofposting
          }
        />
        <TextField
          fullWidth
          id="deadline"
          name="deadline"
          label="Deadline"
          type="date"
          value={formik.values.deadline}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.deadline && Boolean(formik.errors.deadline)}
          helperText={formik.touched.deadline && formik.errors.deadline}
        />
        <TextField
          fullWidth
          id="skill"
          name="skill"
          label="Skill"
          value={formik.values.skill}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.skill && Boolean(formik.errors.skill)}
          helperText={formik.touched.skill && formik.errors.skill}
        />
        <TextField
          fullWidth
          id="duration"
          name="duration"
          label="Duration"
          type="number"
          value={formik.values.duration}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.duration && Boolean(formik.errors.duration)}
          helperText={formik.touched.duration && formik.errors.duration}
        />
        <TextField
          fullWidth
          id="jobtype"
          name="jobtype"
          label="Job Type"
          value={formik.values.jobtype}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.jobtype && Boolean(formik.errors.jobtype)}
          helperText={formik.touched.jobtype && formik.errors.jobtype}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};