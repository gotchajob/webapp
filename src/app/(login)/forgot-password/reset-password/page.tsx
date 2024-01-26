import { ContainedButton, OutlinedButton } from "@/components/common/button";
import { FlexBetween, FlexBox, FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Input } from "@/components/common/input/input";
import { Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ResetPasswordForm } from "./_component/form";

export default function Page({searchParams} : {searchParams: {
  email: string,
  code: string
}}) {
  return (
    <>
      <FlexCenter mt={"50px"}>
        <ImageCard src="/assets/images/logo.png" width={"250px"} />
      </FlexCenter>
      <Box paddingY={5}>
        <Text
          color={PRIMARYCOLOR}
          textAlign={"center"}
          fontWeight={"700"}
          fontSize={30}
        >
          Có vẻ bạn đã quên mật khẩu?
        </Text>
        <Text mt={1} fontSize={12} textAlign={"center"} fontWeight={"700"}>
          Đừng lo, Gotcha Job sẽ giúp bạn lấy lại mật khẩu
        </Text>
      </Box>
      <ResetPasswordForm email={searchParams.email} code={searchParams.code}/>
    </>
  );
}
