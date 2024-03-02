import { useSearchParams } from "next/navigation";
import { PasswordVerifyForm } from "./form";
import { UserCreateVerify } from "@/package/api/user/create-verify-email";
import { UserCreateForgotPassword, UserCreateForgotPasswordResponse } from "@/package/api/user/create-forgot-password";
export const VerifyForm = async ({
  searchParams,
}: {
  searchParams: {
    email: string
  };
}) => {
  const res = await UserCreateForgotPassword(searchParams);
  console.log(res)
  return <PasswordVerifyForm res={res} email={searchParams.email} />;
};
