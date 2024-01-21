"use client";

import { FlexBox } from "@/components/common/flex-box";
import { PriceCard } from "./price-card";
import { Text } from "@/components/common/text";
export const SmartTUMPriceCard = () => {
  return (
    <PriceCard title="Smart Tum" desVisible={false} disable={true}>
      <FlexBox alignItems={"baseline"}>
        <Text fontSize={25} color={"white"} fontWeight={700}>
          Miễn phí
        </Text>
      </FlexBox>
    </PriceCard>
  );
};
