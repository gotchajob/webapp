import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import Box from "@mui/material/Box";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Box mt={"96px"}>{children}</Box>
      <Footer/>
    </>
  );
}
