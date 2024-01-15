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
            Thiết lập lại mật khẩu
          </Text>
          <Input
            style={{ width: "380px" }}
            placeholder="Mật khẩu"
            type="password"
          />
          <Input
            style={{ width: "380px" }}
            placeholder="Xác nhận mật khẩu"
            type="password"
          />
        </Stack>
      </FlexCenter>
      <FlexCenter>
        <ContainedButton>Xong</ContainedButton>
      </FlexCenter>
    </>
  );
}
