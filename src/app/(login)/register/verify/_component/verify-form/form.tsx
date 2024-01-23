"use client";
import { ContainedButton } from "@/components/common/button";
import { FlexCenter } from "@/components/common/flex-box";
import { InputIcon } from "@/components/common/input/input";
import { ContainedLoadingButton } from "@/components/common/loading-button";
import { Text } from "@/components/common/text";
import { apiClientFetch } from "@/package/api/api-fetch";
import { CreateVerifyResponse } from "@/package/api/user/create-verify";
import {
  UserVerifyRequest,
  UserVerifyResponse,
} from "@/package/api/user/verify";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const Form = ({
  res,
  email,
}: {
  res: CreateVerifyResponse;
  email: string;
}) => {
  const [input, setInput] = useState<string[]>(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  if (res.status === "error" && res.responseText === "Verified account") {
    router.push("/login")
    // enqueueSnackbar(res.responseText, {
    //   variant: "error",
    // });
  }
  const inputRefs = [1, 2, 3, 4];

  const handleTextChange = (newNumber: string, index: number) => {
    try {
      console.log(newNumber);
      const number = Number.parseInt(newNumber);
      if (number >= 0 && number <= 9) {
        const updateInput = input;
        updateInput[index] = newNumber;
        setInput(updateInput);
        console.log(input.join(""));
      }
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
        "/api/user/verify",
        value
      );
      if (data.status === "error") {
        throw new Error(data.responseText);
      }
      console.log(data)
      router.push("/register/success?name=" + data.data.fullName);
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
            style={{ width: "380px" }}
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
                value={input[index].toString()}
                onChange={(e) => {
                  handleTextChange(e.target.value.toString(), index);
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
