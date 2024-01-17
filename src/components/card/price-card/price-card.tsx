"use client";

import { ContainedButton } from "@/components/common/button";
import { FlexBox, FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Text } from "@/components/common/text";
import Box, { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";

export const DescriptionIcon = ({ children, ...props }: BoxProps) => {
  return (
    <Box position={"relative"} top={0} left={400 - 127} width={90} {...props}>
      <Box position={"absolute"} zIndex={2} width={90}>
        <ImageCard src="/assets/images/star-icon.png"></ImageCard>
      </Box>
      <FlexCenter
        position={"absolute"}
        {...props}
        zIndex={2}
        style={{
          width: "90px",
          height: "85px",
        }}
      >
        <Text
          fontSize={12}
          color={"#FFD703"}
          fontWeight={700}
          sx={{
            transform: "rotate(19.14deg)",
          }}
        >
          {children}
        </Text>
      </FlexCenter>
    </Box>
  );
};
export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <FlexCenter position={"absolute"} zIndex={2} width={376} top={-16}>
      <Text
        px={2}
        py={0.5}
        color={"#04273B"}
        bgcolor={"#b4d8ed"}
        borderRadius={4}
        fontWeight={700}
      >
        {children}
      </Text>
    </FlexCenter>
  );
};
export const ButtonClick = ({ children }: { children: ReactNode }) => {
  return (
    <FlexCenter position={"absolute"} zIndex={2} width={376} bottom={-20}>
      {/* <Text px={2} py={0.5} color={"#04273B"} bgcolor={"#b4d8ed"} borderRadius={4} fontWeight={700}>
        </Text> */}
      <ContainedButton>{children}</ContainedButton>
    </FlexCenter>
  );
};
export const PriceCard = ({
  children,
  desVisible = true,
  title,
  description,
}: {
  description?: string;
  title: string;
  children: ReactNode;
  desVisible?: boolean;
}) => {
  return (
    <Box position={"relative"} marginX={1.5}>
      <DescriptionIcon visibility={desVisible ? "visible" : "hidden"}>
        {description}
      </DescriptionIcon>
      <Title>{title}</Title>
      <FlexCenter
        position={"relative"}
        top={0}
        sx={{
          background:
            "linear-gradient(125deg, #04273B 0%, #06344E 40%, #0A4F77 72%, #1E6792 100%)",
          boxShadow: "0px 0px 20px rgba(8.40, 78, 117.60, 0.30)",
          borderRadius: 5,
          border: "2px #6DB3DC solid",
          paddingY: 7,
        }}
      >
        <FlexCenter>{children}</FlexCenter>
        <FlexCenter>
          <Text fontSize={13} color={"white"} fontWeight={100}>
            Bấm vào để xem chi tiết
          </Text>
        </FlexCenter>
      </FlexCenter>
      <ButtonClick>Mua ngay</ButtonClick>
    </Box>
  );
};
