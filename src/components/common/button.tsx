import Button, { ButtonProps } from "@mui/material/Button";
import { PRIMARYCOLOR } from "../config";
import IconButton from "@mui/material/IconButton";

export const ContainedButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      {...props}
      style={{
        backgroundColor: PRIMARYCOLOR,
        textTransform: "none",
        height: 40,
        borderRadius: 30,
        width: "fit-content",
        padding: 3,
        boxShadow: "none",
        paddingLeft: 25,
        paddingRight: 25,
        fontWeight: 500,
        fontSize: "1.1rem",
        letterSpacing: 1,
      }}
    >
      {children}
    </Button>
  );
};

export const OutlinedButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      {...props}
      style={{
        border: `2px solid ${PRIMARYCOLOR} !important`,
        textTransform: "none",
        height: 40,
        borderRadius: 30,
        padding: 2,
        boxShadow: "none",
        paddingLeft: 25,
        paddingRight: 25,
        fontWeight: 500,
        width: "fit-content",
        fontSize: "1.1rem",
        letterSpacing: 1,
      }}
    >
      {children}
    </Button>
  );
};
export const OutlinedIconButton = ({ children, ...props }: ButtonProps) => {
  return (
    <IconButton
      variant="outlined"
      color="primary"
      {...props}
      style={{
        border: `2px solid ${PRIMARYCOLOR} !important`,
        textTransform: "none",
        height: 42,
        width: 42,
        borderRadius: 30,
        padding: 4,
        boxShadow: "none",
        fontWeight: 500,
        fontSize: "1.1rem",
        letterSpacing: 1,
      }}
    >
      {children}
    </IconButton>
  );
};
