"use client";

import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { FlexBetween, FlexBox, FlexCenter } from "../common/flex-box";
import { ImageCard } from "../common/image-card";
import DialogContent from "@mui/material/DialogContent";
import { Text } from "../common/text";
import { PRIMARYCOLOR } from "../config";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { ContainedButton, OutlinedIconButton } from "../common/button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { formatNumber } from "@/package/util";

interface ServicePopupProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode[];
  data: {
    title: string;
    useTime: number;
    rating: number;
    totalRaing: number;
    price: number;
    image: string;
    priceDes: string;
  };
}

const StyledText = ({ children }: { children: ReactNode }) => {
  return (
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
      {children}
    </Text>
  );
};
export const ServicePopup = ({
  isOpen,
  setIsOpen,
  children,
  data,
}: ServicePopupProps) => {
  const handleClick = () => {
    if (document !== null) {
      //@ts-ignore
      document
        .getElementById("priceDiv")
        .scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  return (
    <Dialog
      open={isOpen}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 7,
        },
      }}
      onClose={() => {
        setIsOpen(false);
      }}
      fullWidth
      maxWidth="md"
    >
      <DialogContent
        sx={{
          padding: 0,
          width: "100%",
          paddingTop: 7,
          paddingBottom: 10,
          paddingRight: 12,
          position: "relative",
        }}
      >
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            top: 35,
            right: 35,
            border: "1px solid #B4D8ED",
          }}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <CloseIcon sx={{ color: "#B4D8ED" }} />
        </IconButton>
        <Grid container spacing={4}>
          <Grid item xs={4.5} position={"relative"}>
            <FlexCenter position={"relative"} left={-21} height={"100%"}>
              <ImageCard src={data.image} width={360} height={320} />
            </FlexCenter>
          </Grid>
          <Grid item xs={7.5}>
            <Text mb={6} fontSize={45} fontWeight={"700"} color={PRIMARYCOLOR}>
              {data.title}
            </Text>
            <FlexBetween>
              <Text color={"#b7b8b9"} fontSize={12}>
                <span style={{ color: "#49a0d3" }}>{data.useTime} lượt </span>sử
                dụng dịch vụ
              </Text>
              <FlexBox>
                <Rating
                  name="read-only"
                  value={data.rating}
                  readOnly
                  size="small"
                />
                <Text color={"#b7b8b9"} fontSize={12} ml={1}>
                  [{data.totalRaing}]
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
            <Stack spacing={1}>{children}</Stack>
            <FlexBox mt={3}>
              <FlexCenter
                py={3}
                px={3.5}
                bgcolor={"#F2FAFF"}
                boxShadow="0px 6px 12px rgba(21.95, 98.70, 142.38, 0.20)"
                borderRadius={55}
                mr={5}
                overflow="hidden"
              >
                <Text color={"#0E82C4"} fontWeight={700} fontSize={20}>
                  {data.price === 0 ? (
                    <span
                      style={{
                        fontSize: 30,
                      }}
                    >
                      Miễn phí
                    </span>
                  ) : (
                    <>
                      <span
                        style={{
                          fontSize: 25,
                        }}
                      >
                        {formatNumber(data.price)} VND/
                      </span>
                      {data.priceDes}
                    </>
                  )}
                </Text>
              </FlexCenter>
              <ContainedButton onClick={handleClick}>
                {data.price === 0 ? "Trải nghiệm ngay" : "Mua ngay"}
              </ContainedButton>
            </FlexBox>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export const MockInterviewServicePopup = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ServicePopup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      data={{
        image: "/assets/images/illu-1.png",
        title: "Mock Interview",
        rating: 5,
        totalRaing: 112,
        useTime: 173,
        price: 375000,
        priceDes: "1 buổi phòng vấn",
      }}
    >
      <StyledText>
        Dịch vụ phỏng vấn thử{" "}
        <span style={{ fontWeight: 700 }}>
          mô phỏng một buổi phỏng vấn thực tế
        </span>
        . Người dùng sẽ được phỏng vấn bởi các chuyên gia nhiều năm trong lĩnh
        vực, là nhà tuyển dụng của các tập đoàn.
      </StyledText>
      <StyledText>
        Buổi phỏng vấn sẽ được{" "}
        <span style={{ fontWeight: 700 }}>
          diễn ra trong vòng 1 tiếng 30 phút với 1 tiếng để phỏng vấn và 30p
          dùng cho Q&A và feedback.
        </span>
      </StyledText>
      <StyledText>
        Sau buổi phỏng vấn GotchaJob sẽ đảm bảo ứng viên hiểu rõ được một buổi
        phỏng vấn tương tự sẽ diễn ra như thế nào, hơn thế nữa là nắm bắt được
        khả năng qua vòng phỏng vấn dựa trên kết quả phỏng vấn thử của ứng viên
        và đánh giá từ phía chuyên gia.
      </StyledText>
    </ServicePopup>
  );
};

export const PartnerTrainingServicePopup = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ServicePopup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      data={{
        image: "/assets/images/illu-3.png",
        title: "Trải nghiệm doanh nghiệp",
        rating: 5,
        totalRaing: 60,
        useTime: 67,
        price: 1200000,
        priceDes: "1 lần trải nghiệm",
      }}
    >
      <StyledText>
        Buổi phỏng vấn sẽ được{" "}
        <span style={{ fontWeight: 700 }}>
          diễn ra trong vòng 1 tiếng 30 phút với 1 tiếng để phỏng vấn và 30p
          dùng cho Q&A và feedback.
        </span>
      </StyledText>
      <StyledText>
        Trải nghiệm sẽ bao gồm các phần:{" "}
        <span style={{ fontWeight: 700 }}>Training, Capstone Project</span> để
        thực hành các kiến thức đã được training.
      </StyledText>
      <StyledText>
        Sau thời gian trải nghiệm, GotchaJob đảm bảo được rằng ứng viên sẽ tìm
        hiểu được môi trường doanh nghiệp, hiểu rõ hơn về công việc bản thân lựa
        chọn và nhận được những đánh giá từ doanh nghiệp về năng lực.
      </StyledText>
    </ServicePopup>
  );
};

export const CVServicePopup = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ServicePopup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      data={{
        image: "/assets/images/illu-4.png",
        title: "Tạo CV",
        rating: 5,
        totalRaing: 168,
        useTime: 106,
        price: 200000,
        priceDes: "1 CV",
      }}
    >
      <StyledText>
        Làm CV dựa theo vị trí công việc người dùng đang mong muốn ứng tuyển.
      </StyledText>
      <StyledText>
        Lựa chọn và chắt lọc những thông tin giá trị nhất để đưa vào CV.
      </StyledText>
      <StyledText>
        Đồng thời đưa ra lời khuyên về kiến thức, kỹ năng mà người dùng cần cải
        thiện để CV hoàn thiện và được đánh giá cao trong mắt NTD.
      </StyledText>
    </ServicePopup>
  );
};

export const SmartTUMServicePopup = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ServicePopup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      data={{
        image: "/assets/images/illu-5.png",
        title: "Smart TUM",
        rating: 5,
        totalRaing: 168,
        useTime: 247,
        price: 0,
        priceDes: "",
      }}
    >
      <StyledText>
        Làm CV dựa theo vị trí công việc người dùng đang mong muốn ứng tuyển.
      </StyledText>
      <StyledText>
        Lựa chọn và chắt lọc những thông tin giá trị nhất để đưa vào CV.
      </StyledText>
      <StyledText>
        Đồng thời đưa ra lời khuyên về kiến thức, kỹ năng mà người dùng cần cải
        thiện để CV hoàn thiện và được đánh giá cao trong mắt NTD.
      </StyledText>
    </ServicePopup>
  );
};
