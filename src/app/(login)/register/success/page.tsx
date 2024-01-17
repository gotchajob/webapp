import { ContainedButton } from "@/components/common/button";
import { FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { InputIcon } from "@/components/common/input";
import { Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <FlexCenter mt={"50px"}>
        <ImageCard src="/assets/images/logo.png" width={"250px"} />
      </FlexCenter>
      <Box marginTop={25}>
        <Text
          color={PRIMARYCOLOR}
          textAlign={"center"}
          fontWeight={"700"}
          fontSize={30}
        >
          Hoàn tất!
        </Text>
        <Text mt={1} fontSize={12} textAlign={"center"} fontWeight={"700"}>
          Xin chào{" "}
          <span
            style={{
              color: PRIMARYCOLOR,
            }}
          >
            Nguyền Văn A
          </span>
          , cùng Gotcha Job khám phá những dịch vụ thú vị nhé!
        </Text>
      </Box>
      <FlexCenter pt={5}>
        <ContainedButton component={Link} href="/" >
          Bắt đầu
        </ContainedButton>
      </FlexCenter>
    </>
  );
}
