import { Text } from "@/components/common/text";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <Box maxWidth={1350} px={2} margin={"auto"}>
      <Text color={"#b7b8b9"} fontSize={12} py={7}>
        Trang chủ/
        {/* {tabList.slice(0, tabList.length - 1).map((tab) => (
          <span key={tab.title}>{tab.title}/</span>
        ))} */}
        <span style={{ color: "#49a0d3" }}>Quick Interview Test</span>
      </Text>
      {children}
    </Box>
  );
}
