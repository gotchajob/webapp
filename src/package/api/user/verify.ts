import { apiServerFetch, errorSystem } from "../api-fetch";

export interface UserVerifyRequest {
  email: string;
  code: string;
}
export interface UserVerifyResponse {
  status: string;
  responseText: string;
  data: {
    fullName: string
  };
}

export const UserVerify = async (
  params: UserVerifyRequest
): Promise<UserVerifyResponse> => {
  try {
    const userRegister = await apiServerFetch("/user/verify", "POST", params);
    return userRegister;
  } catch (error: any) {
    console.log(error.message);
    return errorSystem("Xác thực thất bại", "");
  }
};
