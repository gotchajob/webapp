"use client";
import { FlexCenter } from "@/components/common/flex-box";
import { Input } from "@/components/common/input/input";
import { ContainedLoadingButton } from "@/components/common/loading-button";
import { Text } from "@/components/common/text";
import { apiClientFetch } from "@/package/api/api-fetch";
import {
  VerifyForgetPasswordRequest,
  VerifyForgetPasswordResponse,
} from "@/package/api/user/verify-forget-password";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const ResetPasswordForm = ({
  email,
  code,
}: {
  email: string;
  code: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleClick = async () => {
    try {
      setIsLoading(true);
      if (password !== confirmPassword) {
        throw new Error("Mật khẩu không khớp");
      }
      const params: VerifyForgetPasswordRequest = {
        code,
        email,
        password,
      };
      const data: VerifyForgetPasswordResponse = await apiClientFetch(
        "/api/user/verify-forget-password",
        params
      );
      if (data.status === "error") {
        throw new Error(data.responseText);
      }
      if (window) {
        window.location.href = "/";
      }
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Box
        paddingY={4}
        sx={{ maxWidth: "380px", width: "100%", margin: "auto" }}
      >
        <Stack spacing={2.5}>
          <Text
            style={{ maxWidth: "380px", width: "100%" }}
            textAlign={"center"}
            fontWeight={"300"}
            fontSize={14}
          >
            Thiết lập lại mật khẩu
          </Text>
          <Input
            style={{ maxWidth: "380px" }}
            placeholder="Mật khẩu"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
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
          <Input
            style={{ maxWidth: "380px" }}
            placeholder="Xác nhận mật khẩu"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Stack>
      </Box>
      <FlexCenter>
        <ContainedLoadingButton loading={isLoading} onClick={handleClick}>
          Xong
        </ContainedLoadingButton>
      </FlexCenter>
    </>
  );
};
