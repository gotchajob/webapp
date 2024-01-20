"use client";
import { ContainedButton, OutlinedButton, OutlinedIconButton } from "@/components/common/button";
import { FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Text } from "@/components/common/text";
import useWindowSize from "@/hook/use-window-size";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const Banner = () => {
  const [bannerHeight, setBannerHeight] = useState(753.36);
  let clientWidth = useWindowSize();
  useEffect(() => {
    if (document !== null) {
      const bannerHeight =
        document.getElementById("imageBannerId")?.clientHeight || 753.36;
      setBannerHeight(bannerHeight);
    }
  }, [clientWidth]);
  return (
    <Box position={"relative"} height={bannerHeight}>
      <Box position={"absolute"} width={"100%"} zIndex={0} >
        <ImageCard src="/assets/images/banner.png" id={"imageBannerId"}/>
      </Box>
      <FlexCenter
        position="absolute"
        sx={{
          zIndex: 1,
          width: "100%",
          height: bannerHeight,
          backgroundColor: "#010D14A6",
        }}
      >
        <Stack spacing={5}>
          <Box>
            <Text
              color={"#FBFDFF"}
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={45}
            >
              GotchaJob
            </Text>
            <Text color={"#FBFDFF"} textAlign={"center"} fontWeight={"bold"}>
              Nền tảng website & app cung cấp các dịch vụ cải thiện kỹ năng
              người dùng trong quá trình họ tham gia ứng tuyển công việc
            </Text>
          </Box>
          <FlexCenter>
            <ContainedButton sx={{mr: 3}}>Bắt đầu</ContainedButton>
            <OutlinedIconButton >
              <PlayArrowIcon />
            </OutlinedIconButton>
          </FlexCenter>
        </Stack>
      </FlexCenter>
    </Box>
  );
};
