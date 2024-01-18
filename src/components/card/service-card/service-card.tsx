"use client";

import { FlexCenter } from "../../common/flex-box";
import { Text } from "../../common/text";
import { PRIMARYCOLOR } from "../../config";
import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import "../service-card/styles.scss";
import { ServicePopup } from "@/components/popup/service-popup";
export interface ServiceCardParams {
  title: string;
  description: string;
  icon: ReactNode;
}

export const ServiceCard = ({ params }: { params: ServiceCardParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FlexCenter
        className="service-card"
        onClick={() => {
          setIsOpen(true);
        }}
        sx={{
          borderRadius: 4,
          margin: "20px",
          cursor: "pointer",
          padding: "5px 15px 0px",
          height: "190px",
          border: "2px solid var(--blue-blue-1, #6DB3DC)",
          boxShadow: "0px 0px 0px 0px rgba(8, 78, 118, 0.30)",
        }}
      >
        <FlexCenter>
          <Box width={"48px"}>{params.icon}</Box>
        </FlexCenter>
        <Text
          className="service-card-title"
          mt={1}
          color={PRIMARYCOLOR}
          fontSize={"18px"}
          fontWeight={700}
        >
          {params.title}
        </Text>
        <Text className="service-card-description" fontSize={13}>
          {params.description}
        </Text>
      </FlexCenter>
      <ServicePopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
