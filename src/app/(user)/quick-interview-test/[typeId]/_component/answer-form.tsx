"use client";
import { ContainedButton, OutlinedButton } from "@/components/common/button";
import { StyledCard } from "@/components/common/card";
import { FlexBetween, FlexCenter } from "@/components/common/flex-box";
import { Input } from "@/components/common/input/input";
import { Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import { useState } from "react";
export const AnswerForm = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <StyledCard width={900} margin={"auto"} bgcolor={"#fbfdff"} pb={5}>
      <Text
        textAlign={"center"}
        fontWeight={700}
        fontSize={23}
        py={4}
        color={PRIMARYCOLOR}
      >
        Câu hỏi 1: Bạn biết gì về Digital Marketing?
      </Text>
      <FlexCenter mb={5}>
        <ContainedButton
          onClick={() => {
            setDisabled(!disabled);
          }}
        >
          Bắt đầu trả lời
        </ContainedButton>
      </FlexCenter>
      <FlexCenter mb={10}>
        <Input
          rows={10}
          style={{
            width: "500px",
          }}
          placeholder="Nhập câu trả lời"
          multiline={true}
          disabled={disabled}
        />
      </FlexCenter>
      <FlexCenter>
        <FlexBetween width={350}>
          <OutlinedButton>
            Dừng test
          </OutlinedButton>
          <ContainedButton>
            Tiếp tục
          </ContainedButton>
        </FlexBetween>
      </FlexCenter>
    </StyledCard>
  );
};
