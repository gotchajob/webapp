"use client";

import { FlexBox } from "@/components/common/flex-box";
import { PriceCard } from "./price-card";
import { Text } from "@/components/common/text";
export const SmartTUMPriceCard = () => {
  return (
    <PriceCard title="Smart Tum" desVisible={false}>
      <FlexBox alignItems={"baseline"}>
        <Text fontSize={25} color={"white"} fontWeight={700}>
          1.500
        </Text>
        <Text fontSize={15} color={"white"} fontWeight={700}>
          .000 VND -
        </Text>
        <Text fontSize={25} color={"white"} fontWeight={700}>
          2.500
        </Text>
        <Text fontSize={15} color={"white"} fontWeight={700}>
          .000 VND
        </Text>
      </FlexBox>
    </PriceCard>
  );
};
