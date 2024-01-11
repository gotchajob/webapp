import Box, { BoxProps } from "@mui/material/Box";

export const FlexBox = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
};
export const FlexBetween = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
};

export const FlexCenter = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      {...props}
    >
      <div>{children}</div>
    </Box>
  );
};
