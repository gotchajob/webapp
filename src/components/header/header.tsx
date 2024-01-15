import Container from "@mui/material/Container";
import { ImageCard } from "../common/image-card";
import { FlexBetween, FlexBox } from "../common/flex-box";
import Link from "next/link";
import { NavigationItem } from "./nav-item";
import { ContainedButton, OutlinedButton } from "../common/button";

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
        padding: "25px 100px 23px !important",
        boxShadow: " 0px 4px 30px 0px rgba(8, 78, 118, 0.20);",
      }}
    >
      <FlexBetween>
        <Link href={"/"}>
          <ImageCard src="/assets/images/logo.png" width={180} />
        </Link>
        <FlexBox>
          <NavigationItem />
        </FlexBox>
        <FlexBox>
          <OutlinedButton sx={{ mr: 1.5 }}>Đăng kí</OutlinedButton>
          <ContainedButton component={Link} href="/login">Đăng nhập</ContainedButton>
        </FlexBox>
      </FlexBetween>
    </Container>
  );
};
