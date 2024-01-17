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
          Chào mừng bạn đến với Gotcha Job!
        </Text>
        <Text mt={1} fontSize={12} textAlign={"center"} fontWeight={"700"}>
          Hãy để chúng tôi tiếp tục đồng hành cùng bạn
        </Text>
      </Box>
      <FlexCenter paddingY={4}>
        <Grid container spacing={2.5} style={{ width: "380px" }}>
          <Grid item xs={6}>
            <Input style={{ width: "100%" }} placeholder="Họ" />
          </Grid>
          <Grid item xs={6}>
            <Input style={{ width: "100%" }} placeholder="Tên" />
          </Grid>
          <Grid item xs={12}>
            <Input style={{ width: "100%" }} placeholder="Email" type="email" />
          </Grid>
          <Grid item xs={12}>
            <Input
              style={{ width: "100%" }}
              placeholder="Mật khẩu"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              style={{ width: "100%" }}
              placeholder="Xác nhận mật khẩu"
              type="password"
            />
          </Grid>
        </Grid>
      </FlexCenter>
      <FlexCenter>
        <ContainedButton
          component={Link}
          href="/register/verify"
        >
          Đăng kí
        </ContainedButton>
      </FlexCenter>
      <FlexCenter mt={16}>
        <FlexBox>
          <Text fontSize={12} fontWeight={"700"}>
            Đã có tài khoản? Đăng nhập
          </Text>
          <Text
            component={Link}
            //@ts-ignore
            href={"/login"}
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
