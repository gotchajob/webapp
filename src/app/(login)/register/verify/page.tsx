import { ContainedButton } from "@/components/common/button";
import { FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import { UserCreateVerify } from "@/package/api/user/create-verify-email";
import Box from "@mui/material/Box";

import { VerifyForm } from "./_component/verify-form";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    email: string;
  };
}) {
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
          Gần xong rồi!
        </Text>
        <Text mt={1} fontSize={12} textAlign={"center"} fontWeight={"700"}>
          Xác nhận để thiết lập tài khoản
        </Text>
      </Box>

      <Suspense fallback={null}>
        <VerifyForm searchParams={searchParams} />
      </Suspense>
    </>
  );
}
