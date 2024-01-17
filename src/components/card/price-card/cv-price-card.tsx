"use client";

import { FlexBox } from "@/components/common/flex-box";
import { PriceCard } from "./price-card";
import { Text } from "@/components/common/text";
export const CVPriceCard = () => {
  return (
    <PriceCard title="CV" description="1 CV">
      <FlexBox alignItems={"baseline"}>
        <Text fontSize={25} color={"white"} fontWeight={700}>
          200
        </Text>
        <Text fontSize={15} color={"white"} fontWeight={700}>
          .000 VND
        </Text>
      </FlexBox>
    </PriceCard>
  );
};
