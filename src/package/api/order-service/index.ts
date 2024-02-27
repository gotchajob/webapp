import { apiServerFetch, errorSystem } from "../api-fetch";

export interface OrderServiceRequest {
  serviceId: number;
  name: string;
  phone: string;
  email: string;
  paymentId: number;
  total: number;
}
export interface OrderServiceResponse {
  status: string;
  responseText: string;
  data: {};
}
export const OrderSerivce = async (
  params: OrderServiceRequest
): Promise<OrderServiceResponse> => {
  try {
    // console.log(params)
    const res = await apiServerFetch("/order-service", "POST", params);
    if (res.status === "error") {
      throw new Error("");
    }
    return res;
  } catch (error: any) {
    return errorSystem("Không thể gửi yêu cầu", { token: "" });
  }
};
