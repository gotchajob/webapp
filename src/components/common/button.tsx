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
        height: 42,
        borderRadius: 30,
        padding: 5,
        boxShadow: "none",
        paddingLeft: 30,
        paddingRight: 30,
        fontWeight: 900,
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
        height: 42,
        borderRadius: 30,
        padding: 4,
        boxShadow: "none",
        paddingLeft: 30,
        paddingRight: 30,
        fontWeight: 900,
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
        fontWeight: 900,
        fontSize: "1.1rem",
        letterSpacing: 1,
      }}
    >
      {children}
    </IconButton>
  );
};
