import { QuestionList } from "@/package/api/question";
import { HandleAnswer } from "./answer-form";
import { getUserToken } from "@/package/cookies/token";
import { cookies } from "next/headers";

export const Answer = async ({ questionId }: { questionId: string }) => {
  const accessToken = getUserToken(cookies());
  const questionList = await QuestionList(
    {
      questionId,
    },
    accessToken
  );
  return <HandleAnswer questionList={questionList.data} />;
};
