"use client";
import { ContainedButton } from "@/components/common/button";
import { FlexCenter } from "@/components/common/flex-box";
import { InputIcon } from "@/components/common/input/input";
import { ContainedLoadingButton } from "@/components/common/loading-button";
import { Text } from "@/components/common/text";
import { apiClientFetch } from "@/package/api/api-fetch";
import { UserCreateForgotPasswordRequest, UserCreateForgotPasswordResponse } from "@/package/api/user/create-forgot-password";
import { CreateVerifyResponse } from "@/package/api/user/create-verify-email";
import {
  UserVerifyRequest,
  UserVerifyResponse,
} from "@/package/api/user/verify-email";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const PasswordVerifyForm = ({
  res,
  email,
}: {
  res: UserCreateForgotPasswordResponse;
  email: string;
}) => {
  const [input, setInput] = useState<string[]>(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const inputRefs = [1, 2, 3, 4];

  const handleTextChange = (newNumber: string, index: number) => {
    try {
      const updateInput = input;
      updateInput[index] = newNumber;
      setInput(updateInput);
    } catch (error) {}
  };
  const handleClick = async () => {
    try {
      const value: UserVerifyRequest = {
        code: input.join(""),
        email,
      };
      setIsLoading(true);
      const data: UserVerifyResponse = await apiClientFetch(
        "/api/user/check-code-forget-password",
        value
      );
      if (data.status === "error") {
        throw new Error(data.responseText);
      }
      router.push("/forgot-password/reset-password?email=" + email + "&code=" + input.join(""));
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
      <FlexCenter paddingY={4}>
        <Stack spacing={2.5}>
          <Text
            style={{ maxWidth: "380px" }}
            textAlign={"center"}
            fontWeight={"300"}
            fontSize={14}
          >
            Nhập mã 4 số được gửi tới email của bạn để xác thực.
          </Text>
          <FlexCenter>
            {inputRefs.map((inputRef, index) => (
              <InputIcon
                key={index}
                onChange={(e: string) => {
                  handleTextChange(e, index);
                }}
              />
            ))}
          </FlexCenter>
        </Stack>
      </FlexCenter>
      <FlexCenter>
        <ContainedLoadingButton loading={isLoading} onClick={handleClick}>
          Xác nhận
        </ContainedLoadingButton>
      </FlexCenter>
    </>
  );
};
