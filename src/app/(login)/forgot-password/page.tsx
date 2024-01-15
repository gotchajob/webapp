import { ContainedButton, OutlinedButton } from "@/components/common/button";
import { FlexBetween, FlexBox, FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Input } from "@/components/common/input";
import { Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function Page() {
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
      <FlexCenter paddingY={4}>
        <Stack spacing={2.5}>
          <Text
            style={{ width: "380px" }}
            textAlign={"center"}
            fontWeight={"300"}
            fontSize={14}
          >
            Nhập email của bạn để nhận mã xác minh, chúng tôi sẽ gửi mã gồm 4
            chữ số đến email của bạn.
          </Text>
          <Input style={{ width: "380px" }} placeholder="Email" />
        </Stack>
      </FlexCenter>
      <FlexCenter>
        <ContainedButton component={Link} href="/forgot-password/verify">
          Tiếp tục
        </ContainedButton>
      </FlexCenter>
      <FlexCenter mt={30}>
        <FlexBox>
          <Text fontSize={12} fontWeight={"700"}>
            Chưa có tài khoản? Đăng ký
          </Text>
          <Text
            component={Link}
            //@ts-ignore
            href={"/register"}
            fontSize={12}
            color={PRIMARYCOLOR}
            fontWeight={"700"}
            ml={0.5}
            sx={{
              textDecoration: "underline",
            }}
          >
            tại đây
          </Text>
        </FlexBox>
      </FlexCenter>
    </>
  );
}
