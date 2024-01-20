import "../input/styles.scss";
import { PRIMARYCOLOR } from "../../config";
import { TextFieldProps } from "@mui/material/TextField";
import { Text } from "../text";

export const Input = ({
  helperText,
  error,
  multiline,
  ...props
}: TextFieldProps) => {
  return (
    <>
      {multiline ? (
        // @ts-ignore
        <textarea
          {...props}
          className="input"
 
        />
      ) : (
        // @ts-ignore
        <input {...props} className="input" />
      )}
      {helperText ? (
        <Text fontSize={12} pl={"20px"} mt={0.5} color="#f44336">
          {helperText}
        </Text>
      ) : null}
    </>
  );
};
export const InputIcon = ({ ...props }: TextFieldProps) => {
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
