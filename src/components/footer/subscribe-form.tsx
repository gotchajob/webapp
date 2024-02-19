"use client";

import Stack from "@mui/material/Stack";
import { Input } from "../common/input/input";
import { ContainedButton } from "../common/button";
import { Text } from "../common/text";
import { useState } from "react";
import {
  SubscribeNewsRequest,
  SubscribeNewsResponse,
} from "@/package/api/subscribe-news";
import { apiClientFetch } from "@/package/api/api-fetch";
import { enqueueSnackbar } from "notistack";

export const SubscribeForm = () => {
  const [input, setInput] = useState("");
  const handleClick = async () => {
    try {
      const data: SubscribeNewsResponse = await apiClientFetch(
        "/api/subscribe-news",
        { email: input }
      );
      if (data.status === "error") {
        throw new Error(data.responseText);
      }
      enqueueSnackbar("Đã gửi thành công", {
        variant: "success",
      });
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    } finally {
    }
  };
  return (
    <Stack spacing={3}>
      <Text fontSize={15} color={"white"} fontWeight={200}>
        Đăng ký bằng Email của bạn để nhận được tin tức mới nhất của chúng tôi
      </Text>
      <Input
        placeholder="Email"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></Input>
      <ContainedButton
        sx={{
          width: "fit-content",
        }}
        onClick={handleClick}
      >
        Đăng kí
      </ContainedButton>
    </Stack>
  );
};
