"use client";

import { FlexBox } from "@/components/common/flex-box";
import { PriceCard } from "./price-card";
import { Text } from "@/components/common/text";
export const MockInterviewPriceCard = () => {
  return (
    <PriceCard title="Mock Interview" description="90 phút">
      <FlexBox alignItems={"baseline"}>
        <Text fontSize={25} color={"white"} fontWeight={700}>
          375
        </Text>
        <Text fontSize={15} color={"white"} fontWeight={700}>
          .000 VND
        </Text>
      </FlexBox>
    </PriceCard>
  );
};
