"use client";
import { ContainedButton, OutlinedButton } from "@/components/common/button";
import { StyledCard } from "@/components/common/card";
import { FlexBetween, FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { Input } from "@/components/common/input/input";
import { Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import { Answer } from "@/package/api/answer";
import { Question } from "@/package/api/question";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface SubmitAnswerProps {
  currentIndex: number;
  questionId: string;
  answer: string;
}

export const HandleAnswer = ({
  questionList,
}: {
  questionList: Question[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [answerList, setAnswerList] = useState<Answer[]>([]);
  const router = useRouter();
  const onClick = (props: SubmitAnswerProps) => {
    setActiveIndex(props.currentIndex + 1);
    setAnswerList([
      ...answerList,
      { answer: props.answer, questionId: props.questionId },
    ]);
  };

  const questionTabs = questionList.map((question, index) => {
    return <AnswerForm index={index} onClick={onClick} question={question} />;
  });
  questionTabs.push(
    <>
      <FlexCenter>
        <ImageCard src="/assets/images/logo.png" width={"250px"} />
      </FlexCenter>
      <Box marginTop={5}>
        <Text
          color={PRIMARYCOLOR}
          textAlign={"center"}
          fontWeight={"700"}
          fontSize={30}
        >
          Hoàn tất!
        </Text>
        <Text mt={1} fontSize={12} textAlign={"center"} fontWeight={"700"}>
          Kết quả bài test sẽ được gửi qua email sớm nhất
        </Text>
      </Box>
      <FlexCenter pt={10}>
        <ContainedButton component={Link} href="/">
          Về trang chủ
        </ContainedButton>
      </FlexCenter>
    </>
  );
  return <>{questionTabs[activeIndex]}</>;
};

export const AnswerForm = ({
  question,
  index,
  onClick,
}: {
  question: Question;
  index: number;
  onClick: (props: SubmitAnswerProps) => void;
}) => {
  const [disabled, setDisabled] = useState(true);
  const [currentAnwser, setCurrentAnwser] = useState("");
  const handleSubmit = () => {
    onClick({
      answer: currentAnwser,
      currentIndex: index,
      questionId: question.id,
    });
    setDisabled(true);
    setCurrentAnwser("")
  };
  return (
    <StyledCard width={900} margin={"auto"} bgcolor={"#fbfdff"} pb={5}>
      <Text
        textAlign={"center"}
        maxWidth={700}
        margin={"auto"}
        fontWeight={700}
        fontSize={23}
        py={4}
        color={PRIMARYCOLOR}
      >
        Câu hỏi 1: {question.question}?
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
          value={currentAnwser}
          rows={10}
          style={{
            width: "500px",
          }}
          onChange={(e) => {
            setCurrentAnwser(e.target.value);
          }}
          placeholder="Nhập câu trả lời"
          multiline={true}
          disabled={disabled}
        />
      </FlexCenter>
      <FlexCenter>
        <FlexBetween width={350}>
          <OutlinedButton>Dừng test</OutlinedButton>
          <ContainedButton
            disabled={currentAnwser.length === 0}
            onClick={handleSubmit}
          >
            Tiếp tục
          </ContainedButton>
        </FlexBetween>
      </FlexCenter>
    </StyledCard>
  );
};
