import { ContainedButton, OutlinedButton } from "@/components/common/button";
import { FlexBetween, FlexBox, FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Form } from "./_component/login-form/form";

export default function Page() {
  return (
    <>
      <FlexCenter mt={"50px"}>
        <Link href={"/"}>
          <ImageCard src="/assets/images/logo.png" width={"250px"} />
        </Link>
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
      <Form />
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
