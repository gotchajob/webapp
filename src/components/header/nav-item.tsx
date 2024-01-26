"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Text } from "../common/text";
import { FlexBetween } from "../common/flex-box";
import { PRIMARYCOLOR } from "../config";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { apiClientFetch } from "@/package/api/api-fetch";
import { enqueueSnackbar } from "notistack";
export const NavigationItem = () => {
  const navItemList = [
    { name: "Dịch vụ", targetId: "serviceDiv", icon: ArrowDropDownIcon },
    { name: "Đội ngũ", targetId: "mentorDiv", icon: ArrowDropDownIcon },
    { name: "Blog", targetId: "blogDiv" },
  ];
  const handleClick = (targetId: string) => {
    if (document !== null) {
      //@ts-ignore
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {navItemList.map((navItem) => (
        <FlexBetween
          sx={{ cursor: "pointer" }}
          width={navItem.icon ? "170px" : "fit-content"}
          p={1.5}
          pl={3}
          pr={3}
          key={navItem.targetId}
          onClick={() => {
            handleClick(navItem.targetId);
          }}
        >
          <Text color={PRIMARYCOLOR} fontWeight={"bold"}>
            {navItem.name}
          </Text>
          {navItem.icon ? <ArrowDropDownIcon color="primary" /> : null}
        </FlexBetween>
      ))}
      <Box
        component={Link}
        p={1.5}
        pl={3}
        pr={3}
        href={"/quick-interview-test"}
        sx={{
          textDecoration: "none",
        }}
      >
        <Text color={PRIMARYCOLOR} fontWeight={"bold"}>
          Quick Interview Test
        </Text>
      </Box>
    </>
  );
};

export const LogoutButton = () => {
  const onClick = async () => {
    try {
      const res = await apiClientFetch("/api/user/logout");
      if (res.status === "error") {
        throw new Error("Không thể đăng xuất");
      }
      enqueueSnackbar(res.responseText, {
        variant: "success",
      });
      window.location.href = "/"
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    }
  };
  return (
    <IconButton size="medium" onClick={onClick}>
      <LogoutIcon
        sx={{
          width: 26,
          height: 26,
        }}
        color="primary"
      />
    </IconButton>
  );
};
