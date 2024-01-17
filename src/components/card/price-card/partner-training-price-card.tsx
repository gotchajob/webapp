"use client";

import { FlexBox } from "@/components/common/flex-box";
import { PriceCard } from "./price-card";
import { Text } from "@/components/common/text";
export const PartnerTrainingPriceCard = () => {
  return (
    <PriceCard title="Trải nghiệm doanh nghiệp" description="1 dự án">
      <FlexBox alignItems={"baseline"}>
        <Text fontSize={25} color={"white"} fontWeight={700}>
          1.200
        </Text>
        <Text fontSize={15} color={"white"} fontWeight={700}>
          .000 VND
        </Text>
      </FlexBox>
    </PriceCard>
  );
};
