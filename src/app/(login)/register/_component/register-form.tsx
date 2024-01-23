"use client";
import { FlexCenter } from "@/components/common/flex-box";
import { Input } from "@/components/common/input/input";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  UserRegisterRequest,
  UserRegisterResponse,
} from "@/package/api/user/register";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiClientFetch } from "@/package/api/api-fetch";
import { ContainedLoadingButton } from "@/components/common/loading-button";
import { Text } from "@/components/common/text";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const initialValues: UserRegisterRequest = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    rePassword: "",
  };

  const handleFormSubmit = async (value: UserRegisterRequest) => {
    try {
      setIsLoading(true);
      const data: UserRegisterResponse = await apiClientFetch(
        "/api/user/register",
        value
      );
      if (data.status === "error") {
        throw new Error(data.responseText);
      }
      router.push("/register/verify?email=" + value.email);
      // const loginData: UserLoginResponse = await apiClientFetch(
      //   "/api/user/login",
      //   {
      //     email: value.email,
      //     password: value.password,
      //   }
      // );
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return (
    <form onSubmit={handleSubmit}>
      <FlexCenter paddingY={4}>
        <Grid container spacing={2.5} style={{ width: "380px" }}>
          <Grid item xs={6}>
            <Input
              name="lastName"
              onBlur={handleBlur}
              value={values.lastName}
              onChange={handleChange}
              error={!!touched.lastName && !!errors.lastName}
              helperText={(touched.lastName && errors.lastName) as string}
              placeholder="Họ"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              name="firstName"
              onBlur={handleBlur}
              value={values.firstName}
              onChange={handleChange}
              error={!!touched.firstName && !!errors.firstName}
              helperText={(touched.firstName && errors.firstName) as string}
              style={{ width: "100%" }}
              placeholder="Tên"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name="email"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              error={!!touched.email && !!errors.email}
              helperText={(touched.email && errors.email) as string}
              style={{ width: "100%" }}
              placeholder="Email"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              error={!!touched.password && !!errors.password}
              helperText={(touched.password && errors.password) as string}
              style={{ width: "100%" }}
              placeholder="Mật khẩu"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Text fontSize={12} fontWeight={300} pl={1}>
              Mật khẩu bao gồm:
              <br />
              Tối thiểu <span style={{ color: "#69b1da" }}>8 kí tự</span>
              <br />
              Ít nhất{" "}
              <span style={{ color: "#69b1da" }}>1 kí tự viết hoa (A-Z)</span>
              <br />
              Ít nhất <span style={{ color: "#69b1da" }}>1 chữ số (0-9)</span>
            </Text>
          </Grid>
          <Grid item xs={12}>
            <Input
              name="rePassword"
              onBlur={handleBlur}
              value={values.rePassword}
              onChange={handleChange}
              error={!!touched.rePassword && !!errors.rePassword}
              helperText={(touched.rePassword && errors.rePassword) as string}
              style={{ width: "100%" }}
              placeholder="Xác nhận mật khẩu"
              type="password"
            />
          </Grid>
        </Grid>
      </FlexCenter>
      <FlexCenter>
        <ContainedLoadingButton loading={isLoading} type="submit">
          Đăng kí
        </ContainedLoadingButton>
      </FlexCenter>
    </form>
  );
};

const formSchema = yup.object().shape({
  firstName: yup.string().required("Bắt buộc"),
  lastName: yup.string().required("Bắt buộc"),
  email: yup.string().email("invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please re-type password"),
});
