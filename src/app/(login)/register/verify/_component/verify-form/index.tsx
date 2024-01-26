import { useSearchParams } from "next/navigation";
import { Form } from "./form";
import { UserCreateVerify } from "@/package/api/user/create-verify-email";
export const VerifyForm = async ({
  searchParams,
}: {
  searchParams: {
    email: string
  };
}) => {
  const res = await UserCreateVerify(searchParams);
  return <Form res={res} email={searchParams.email} />;
};
