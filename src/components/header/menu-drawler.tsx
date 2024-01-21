"use client";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuDrawler = ({ ...props }: IconButtonProps) => {
  return (
    <IconButton
      {...props}
      size="large"
      sx={{
        ...props.sx,
      }}
    >
      <MenuIcon color="primary" />
    </IconButton>
  );
};
