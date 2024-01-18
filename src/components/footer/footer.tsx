import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Text } from "../common/text";
import { FlexBox, FlexCenter } from "../common/flex-box";
import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import { ImageCard } from "../common/image-card";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Input } from "../common/input/input";
import { ContainedButton } from "../common/button";

export const Footer = () => {
  return (
    <>
      <FlexCenter
        bgcolor={"#031a27"}
        height={280}
        mt={12}
        pb={2}
        width={"100%"}
      >
        <Grid container sx={{ width: "1200px" }}>
          <Grid item xs={3}>
            <Text color="white" fontSize={25} fontWeight="700" mb={2}>
              GJ
            </Text>
            <Stack spacing={3}>
              <Text fontSize={11} color={"white"} fontWeight={100}>
                Vinhomes Grand Park <br /> P.Long Thạnh Mỹ, Quận 9, Tp.HCM
              </Text>
              <Box>
                <Text fontSize={11} color={"white"} fontWeight={100}>
                  <span style={{ fontWeight: "500" }}>SĐT: </span>+84 0941 244
                  285
                </Text>
                <Text fontSize={11} color={"white"} fontWeight={100}>
                  <span style={{ fontWeight: "500" }}>Email: </span>
                  gotchajob.vn@gmail.com 285
                </Text>
              </Box>
              <ImageCard width={25} src="/assets/icon/facebook-icon.png" />
            </Stack>
          </Grid>
          <Grid item xs={2.5}>
            <Title>Về GotchaJob</Title>
            <Stack spacing={0.5}>
              <AboutItem title="Trang chủ" />
              <AboutItem title="Về chúng tôi" />
              <AboutItem title="Giá cả" />
              <AboutItem title="Term of service" />
              <AboutItem title="Privacy policy" />
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Title>Các dịch vụ</Title>
            <Stack spacing={0.5}>
              <AboutItem title="Chỉnh & sửa CV" />
              <AboutItem title="Mentoring" />
              <AboutItem title="Workshop & Seminar" />
              <AboutItem title="Mock Interview" />
              <AboutItem title="Tham quan công ty" />
            </Stack>
          </Grid>
          <Grid item xs={3.5}>
            <Title>Tin tức mới</Title>
            <Stack spacing={3}>
              <Text fontSize={15} color={"white"} fontWeight={200}>
                Đăng ký bằng Email của bạn để nhận được tin tức mới nhất của
                chúng tôi
              </Text>
              <Input placeholder="Email"></Input>
              <ContainedButton>
                Đăng kí
              </ContainedButton>
            </Stack>
          </Grid>
        </Grid>
      </FlexCenter>
      <Box bgcolor={"#010d14"} height={20}></Box>
    </>
  );
};

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <Text color="white" fontSize={18} fontWeight="700" mb={2}>
      {children}
    </Text>
  );
};
const AboutItem = ({ title }: { title: string }) => {
  return (
    <FlexBox>
      <ArrowRight color="primary" />
      <Text ml={1} fontSize={15} color={"white"} fontWeight={100}>
        {title}
      </Text>
    </FlexBox>
  );
};
