import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { getUserToken } from "@/package/cookies/token";
import Box from "@mui/material/Box";
import { cookies } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userToken = getUserToken(cookies())
  return (
    <>
      <Header alreadyLogin={userToken !== ""}/>
      <Box mt={"96px"}>{children}</Box>
      <Footer/>
    </>
  );
}
