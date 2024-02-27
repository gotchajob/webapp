"use client";

import { apiClientFetch } from "@/package/api/api-fetch";
import { formatDate } from "@/package/util";

export const UpdateAccessServer = ({ accessTime }: { accessTime: string }) => {
  const handleUpdateAccess = async () => {
    const currentDate = new Date();
    if (accessTime !== formatDate(currentDate.toISOString(), "dd/MM/yyyy")) {
      const res = await apiClientFetch("/api/access", {});
      console.log(res)
    }
  };
  handleUpdateAccess();
  return <></>;
};
