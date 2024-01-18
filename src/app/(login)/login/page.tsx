import { ContainedButton, OutlinedButton } from "@/components/common/button";
import { FlexBetween, FlexBox, FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Input } from "@/components/common/input/input";
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
          Chào mừng bạn đã trở lại!
        </Text>
        <Text mt={1} fontSize={12} textAlign={"center"} fontWeight={"700"}>
          Hãy để chúng tôi tiếp tục đồng hành cùng bạn
        </Text>
      </Box>
      <FlexCenter paddingY={4}>
        <Stack spacing={2.5}>
          <Input style={{ width: "380px" }} placeholder="Email" />
          <Input
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
            <ContainedButton>Đăng nhập</ContainedButton>
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
      <FlexCenter mt={16}>
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
