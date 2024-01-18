"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Link from "next/link";
import { Text } from "../common/text";
import { FlexBetween } from "../common/flex-box";
import { PRIMARYCOLOR } from "../config";

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
