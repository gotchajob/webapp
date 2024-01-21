import Container from "@mui/material/Container";
import { ImageCard } from "../common/image-card";
import { FlexBetween, FlexBox } from "../common/flex-box";
import Link from "next/link";
import { NavigationItem } from "./nav-item";
import { ContainedButton, OutlinedButton } from "../common/button";
import { MenuDrawler } from "./menu-drawler";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
export const Header = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "96px",
        position: "fixed",
        zIndex: 1000,
        top: 0,
        background: "rgba(251, 253, 255, 0.80)",
        padding: "25px 0px 23px !important",
        boxShadow: " 0px 4px 30px 0px rgba(8, 78, 118, 0.20);",
      }}
    >
      <FlexBetween maxWidth={1312} margin={"auto"} px={2}>
        <MenuDrawler
          sx={{
            display: {
              1310: "none",
              1309: "flex",
            },
          }}
        />
        <Link href={"/"}>
          <ImageCard src="/assets/images/logo.png" width={180} />
        </Link>
        <FlexBox
          sx={{
            display: {
              1310: "flex !important",
              1309: "none",
              xs: "none",
            },
          }}
        >
          <NavigationItem />
        </FlexBox>
        <FlexBox
          sx={{
            display: {
              xl: "flex !important",
              sm: "flex !important",
              xs: "none",
            },
          }}
        >
          <OutlinedButton>Đăng kí</OutlinedButton>
          <ContainedButton component={Link} href="/login">
            Đăng nhập
          </ContainedButton>
        </FlexBox>
        <IconButton
          size="large"
          component={Link}
          href="/login"
          sx={{
            display: {
              xl: "none !important",
              sm: "none !important",
              xs: "flex",
            },
          }}
        >
          <LoginIcon color="primary" />
        </IconButton>
      </FlexBetween>
    </Container>
  );
};
