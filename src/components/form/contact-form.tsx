"use client";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input } from "../common/input/input";
import { ContainedButton } from "../common/button";
import { FlexBetween } from "../common/flex-box";
export const ContactForm = () => {
  const handleSubmitForm = () => {
    console.log("hello");
  };
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    description: ""
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Bắt buộc"),
    phone: yup.string(),
    email: yup.string().required("Bắt buộc"),
    description: yup.string().required("Bắt buộc"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleSubmitForm,
      initialValues,
      validationSchema,
    });
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Input
            style={{ width: "100%" }}
            name="name"
            onBlur={handleBlur}
            value={values.name}
            onChange={handleChange}
            placeholder="Họ và tên"
            error={!!touched.name && !!errors.name}
            helperText={(touched.name && errors.name) as string}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            style={{ width: "100%" }}
            name="phone"
            onBlur={handleBlur}
            value={values.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
            error={!!touched.phone && !!errors.phone}
            helperText={(touched.phone && errors.phone) as string}
          />
        </Grid>
        <Grid item xs={8}>
          <Input
            style={{ width: "100%" }}
            name="email"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            error={!!touched.email && !!errors.email}
            helperText={(touched.email && errors.email) as string}
          />
        </Grid>
        <Grid item xs={9.5}>
          <Input
            multiline
            rows={4}
            style={{ width: "100%" }}
            name="description"
            onBlur={handleBlur}
            value={values.description}
            onChange={handleChange}
            placeholder="Dịch vụ cần tư vấn"
            error={!!touched.description && !!errors.description}
            helperText={(touched.description && errors.description) as string}
          />
        </Grid>
        <Grid item xs={2.5}>
          <FlexBetween alignItems={"flex-end"} height={"90%"}>
            <div></div>
            <ContainedButton type="submit">Gửi</ContainedButton>
          </FlexBetween>
        </Grid>
      </Grid>
    </form>
  );
};
