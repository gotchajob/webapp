import { ApiResponse } from "./types";

export const apiFetch = async (
  url: string,
  body?: any,
  accessToken?: string
): Promise<ApiResponse> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: accessToken || "",
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return await res.json();
};
