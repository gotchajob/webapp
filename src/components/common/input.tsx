import { InputProps } from "@mui/material/Input";
import "../common/styles.scss";
import { PRIMARYCOLOR } from "../config";

export const Input = ({ ...props }: InputProps) => {
  // @ts-ignore
  return <input {...props} className="input" />;
};
export const InputIcon = ({ ...props }: InputProps) => {
  return (
    //@ts-ignore
    <input
      {...props}
      type="number"
      min={0}
      maxLength={1}
      max={9}
      style={{
        margin: "0px 10px",
        borderRadius: "50px",
        width: "50px",
        height: "50px",
        backgroundColor: "white !important",
        borderColor: PRIMARYCOLOR,
      }}
      className="input"
    />
  );
};
