import Typography, { TypographyProps } from "@mui/material/Typography";
import { PRIMARYCOLOR } from "../config";

export const maxLineStyle = (maxLine: number) => {
  return {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textverflow: "ellipsis",
  };
};

//@ts-ignore
export const Text = ({ children, ...props }: TypographyProps) => {
  return <Typography {...props}>{children}</Typography>;
};

export const MainTitle = ({ children, ...props }: TypographyProps) => {
  return (
    <Text
      color={PRIMARYCOLOR}
      textAlign={"center"}
      fontWeight={900}
      fontSize={35}
      {...props}
    >
      {children}
    </Text>
  );
};

export const SubTitle = ({ children, ...props }: TypographyProps) => {
  return (
    <Text
      color={PRIMARYCOLOR}
      textAlign={"center"}
      fontWeight={700}
      fontSize={30}
      {...props}
    >
      {children}
    </Text>
  );
};
