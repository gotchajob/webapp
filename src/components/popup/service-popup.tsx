"use client";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import { Dispatch, SetStateAction } from "react";
import { FlexBetween, FlexBox, FlexCenter } from "../common/flex-box";
import { ImageCard } from "../common/image-card";
import DialogContent from "@mui/material/DialogContent";
import { Text } from "../common/text";
import { PRIMARYCOLOR } from "../config";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { ContainedButton } from "../common/button";

export const ServicePopup = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 7,
        },
      }}
      fullWidth
      maxWidth="lg"
    >
      <DialogContent
        sx={{ padding: 0, width: "100%", paddingY: 10, paddingRight: 12 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={4.5} position={"relative"} overflow={"hidden"}>
            <FlexCenter position={"relative"} left={-21} height={"100%"}>
              <ImageCard src="/assets/images/illu-1.png" />
            </FlexCenter>
          </Grid>
          <Grid item xs={7.5}>
            <Text mb={6} fontSize={45} fontWeight={"700"} color={PRIMARYCOLOR}>
              Mock Interview
            </Text>
            <FlexBetween>
              <Text color={"#b7b8b9"} fontSize={12}>
                <span style={{ color: "#49a0d3" }}>143 lượt </span>sử dụng dịch
                vụ
              </Text>
              <FlexBox>
                <Rating name="read-only" value={5} readOnly size="small" />
                <Text color={"#b7b8b9"} fontSize={12} ml={1}>
                  [112]
                </Text>
                <Text
                  color={"#49a0d3"}
                  sx={{ textDecoration: "underline" }}
                  fontSize={12}
                  ml={3}
                >
                  Xem đánh giá
                </Text>
              </FlexBox>
            </FlexBetween>
            <Text my={1} fontSize={20} fontWeight={"700"} color={PRIMARYCOLOR}>
              Mô tả:
            </Text>
            <Stack spacing={1}>
              <Text
                color="#04273B"
                fontSize={12.5}
                fontWeight={300}
                sx={{
                  ":before": {
                    content: `"\u2022"`,
                    mr: 1,
                  },
                }}
              >
                Dịch vụ phỏng vấn thử{" "}
                <span style={{ fontWeight: 700 }}>
                  mô phỏng một buổi phỏng vấn thực tế
                </span>
                . Người dùng sẽ được phỏng vấn bởi các chuyên gia nhiều năm
                trong lĩnh vực, là nhà tuyển dụng của các tập đoàn.
              </Text>
              <Text
                color="#04273B"
                fontSize={12.5}
                fontWeight={300}
                sx={{
                  ":before": {
                    content: `"\u2022"`,
                    mr: 1,
                  },
                }}
              >
                Buổi phỏng vấn sẽ được{" "}
                <span style={{ fontWeight: 700 }}>
                  diễn ra trong vòng 1 tiếng 30 phút với 1 tiếng để phỏng vấn và
                  30p dùng cho Q&A và feedback.
                </span>
              </Text>
              <Text
                color="#04273B"
                fontSize={12.5}
                fontWeight={300}
                sx={{
                  ":before": {
                    content: `"\u2022"`,
                    mr: 1,
                  },
                }}
              >
                Sau buổi phỏng vấn GotchaJob sẽ đảm bảo ứng viên hiểu rõ được
                một buổi phỏng vấn tương tự sẽ diễn ra như thế nào, hơn thế nữa
                là nắm bắt được khả năng qua vòng phỏng vấn dựa trên kết quả
                phỏng vấn thử của ứng viên và đánh giá từ phía chuyên gia.
              </Text>
            </Stack>
            <FlexBetween mt={3}>
              <FlexCenter
                py={3}
                px={3.5}
                bgcolor={"#F2FAFF"}
                boxShadow="0px 6px 12px rgba(21.95, 98.70, 142.38, 0.20)"
                borderRadius={55}
                overflow="hidden"
              >
                <Text color={"#0E82C4"} fontWeight={700} fontSize={20}>
                  <span
                    style={{
                      fontSize: 25,
                    }}
                  >
                    375.000 VND/
                  </span>
                  1 buổi phòng vấn
                </Text>
              </FlexCenter>
              <ContainedButton>Mua ngay</ContainedButton>
            </FlexBetween>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
