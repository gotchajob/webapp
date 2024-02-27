import { apiServerFetch, errorSystem } from "../api-fetch";

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  status: string;
  responseText: string;
  data: {
    token: string;
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      roleId: number;
      status: number;
    };
  };
}

export const UserLogin = async (
  params: UserLoginRequest
): Promise<UserLoginResponse> => {
  try {
    console.log(params);
    const res = await apiServerFetch("/user/login", "POST", params);
    if (res.status === "error") {
      throw new Error(res.responseText);
    }
    return res;
  } catch (error: any) {
    return errorSystem(error.message, { token: "" });
  }
};
