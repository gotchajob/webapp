"use client";

import { ContainedButton } from "@/components/common/button";
import { FlexCenter } from "@/components/common/flex-box";
import { Input } from "@/components/common/input/input";
import { ContainedLoadingButton } from "@/components/common/loading-button";
import { Text } from "@/components/common/text";
import { apiClientFetch } from "@/package/api/api-fetch";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    try {
      router.push("forgot-password/verify?email=" + email);
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
            Nhập email của bạn để nhận mã xác minh, chúng tôi sẽ gửi mã gồm 4
            chữ số đến email của bạn.
          </Text>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ maxWidth: "380px" }}
            placeholder="Email"
          />
        </Stack>
      </FlexCenter>
      <FlexCenter>
        <ContainedLoadingButton
          disabled={email.length === 0}
          onClick={handleClick}
          loading={isLoading}
        >
          Tiếp tục
        </ContainedLoadingButton>
      </FlexCenter>
    </>
  );
};
