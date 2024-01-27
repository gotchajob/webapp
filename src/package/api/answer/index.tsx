export interface Answer {
  questionId: string;
  answer: string;
}
export interface SendAnswerRequest {
  answerList: Answer[];
}
export interface SendAnswerResponse {
  status: string;
  responseText: string;
  data: string;
}
