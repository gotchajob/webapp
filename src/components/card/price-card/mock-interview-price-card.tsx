"use client";

import { FlexBox } from "@/components/common/flex-box";
import { PriceCard } from "./price-card";
import { Text } from "@/components/common/text";
import { useState } from "react";
import { ServicePopup } from "@/components/popup/service-popup";
export const MockInterviewPriceCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <PriceCard
        title="Mock Interview"
        description="90 phút"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FlexBox alignItems={"baseline"}>
          <Text fontSize={25} color={"white"} fontWeight={700}>
            375
          </Text>
          <Text fontSize={15} color={"white"} fontWeight={700}>
            .000 VND
          </Text>
        </FlexBox>
      </PriceCard>
      <ServicePopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
