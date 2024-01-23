"use client";
import { ContainedButton, OutlinedButton } from "@/components/common/button";
import { FlexBetween, FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Input } from "@/components/common/input/input";
import { ContainedLoadingButton } from "@/components/common/loading-button";
import { Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import { apiClientFetch } from "@/package/api/api-fetch";
import { UserLoginResponse } from "@/package/api/user/login";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const data: UserLoginResponse = await apiClientFetch("/api/user/login", {
        email,
        password,
      });
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
      <FlexCenter paddingY={4}>
        <Stack spacing={2.5}>
          <Input
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            style={{ width: "380px" }}
            placeholder="Email"
          />
          <Input
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            style={{ width: "380px" }}
            placeholder="Mật khẩu"
            type="password"
          />
        </Stack>
        <FlexBetween pt={1}>
          <Box></Box>
          <Text
            component={Link}
            //@ts-ignore
            href="/forgot-password"
            fontSize={12}
            color={PRIMARYCOLOR}
            fontWeight={"700"}
            sx={{
              textDecoration: "underline",
            }}
          >
            Quên mật khẩu?
          </Text>
        </FlexBetween>
      </FlexCenter>
      <FlexCenter>
        <Stack spacing={3}>
          <FlexCenter>
            <ContainedLoadingButton loading={isLoading} onClick={handleLogin}>
              Đăng nhập
            </ContainedLoadingButton>
          </FlexCenter>
          <Divider
            sx={{
              width: 380,
            }}
          >
            <Text fontSize={12} fontWeight={"700"} color={"#C1C1C1"}>
              Hoặc đăng nhập bằng
            </Text>
          </Divider>
          <FlexCenter>
            <OutlinedButton>
              <FlexBetween width={100}>
                <ImageCard width={20} src="/assets/icon/google-icon.png" />
                <Text fontSize={14} fontWeight={700} color={"black"}>
                  Google
                </Text>
              </FlexBetween>
            </OutlinedButton>
          </FlexCenter>
        </Stack>
      </FlexCenter>
    </>
  );
};
