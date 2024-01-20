"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { ImageCard } from "../common/image-card";
import Stack from "@mui/material/Stack";
import { FlexBox, FlexCenter } from "../common/flex-box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Text } from "../common/text";
import { PRIMARYCOLOR } from "../config";
import Box from "@mui/material/Box";
import { Input } from "../common/input/input";
import { ContainedButton } from "../common/button";
import { ContainedCard } from "../common/card";

export interface Tab {
  title: string;
  component: ReactNode;
}

export const PricePopup = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [tabList, setTabList] = useState<Tab[]>([]);
  if (tabList.length === 0) {
    tabList.push(tabListCard[0]);
  }
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
      <DialogContent sx={{ padding: 0, width: "100%", overflow: "hidden" }}>
        <Grid container>
          <Grid item xs={7} py={8} pl={7} pr={7}>
            <Stack spacing={3}>
              <FlexBox>
                <ArrowBackIcon
                  fontSize={"small"}
                  sx={{
                    color: "#6DB3DC",
                  }}
                />
                <Text color={"#b7b8b9"} fontSize={12} ml={2}>
                  Mock Interview/
                  {tabList.slice(0, tabList.length - 2).map((tab) => (
                    <>{tab.title}/</>
                  ))}
                  <span style={{ color: "#49a0d3" }}>
                    {tabList.at(tabList.length - 1)?.title}
                  </span>
                </Text>
              </FlexBox>
              <Box>
                <Text fontSize={14}>
                  Bạn đang trong quá trình thanh toán dịch vụ
                </Text>
                <Text fontSize={45} fontWeight={"700"} color={PRIMARYCOLOR}>
                  Mock Interview
                </Text>
              </Box>
            </Stack>
            {tabList.at(tabList.length - 1)?.component}
            {/* <ServiceInformation /> */}
            {/* <TakeInformation/> */}
            <FlexCenter mt={12}>
              <ContainedButton
                onClick={() => {
                  setTabList([...tabList, tabListCard[tabList.length]]);
                }}
              >
                Tiếp tục
              </ContainedButton>
            </FlexCenter>
          </Grid>

          <Grid item xs={5}>
            <ImageCard height={"100%"} src="/assets/images/illu-2.png" />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const TakeInformation = () => {
  return (
    <Box>
      <Text fontSize={14} color={PRIMARYCOLOR} mb={1}>
        Vui lòng điền thông tin dưới đây
      </Text>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Input
            placeholder="Họ và tên"
            style={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Họ và tên"
            style={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Input
            placeholder="Họ và tên"
            style={{
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
const ServiceInformation = () => {
  return (
    <>
      <Box mb={2}>
        <Text fontSize={14} color={PRIMARYCOLOR} mb={1}>
          Bạn được
        </Text>
        <ContainedCard>
          <Text fontSize={12.5} fontWeight={"200"} color={"#04273B"}>
            1 buổi phỏng vấn trong 1 tiếng.
          </Text>
          <Text fontSize={12.5} fontWeight={"200"} color={"#04273B"}>
            30 phút cho Q&A và nhận feedback của bên tuyển dụng.
          </Text>
        </ContainedCard>
      </Box>
      <Box>
        <Text fontSize={14} color={PRIMARYCOLOR} mb={1}>
          Sau khi thanh toán
        </Text>
        <ContainedCard>
          <Text fontSize={12.5} fontWeight={"200"} color={"#04273B"}>
            Chúng tôi sẽ gửi mail xác nhận hoàn tất thanh toán và mail xác nhận
            lịch hẹn kèm những bước cần làm tiếp theo, bạn vui lòng kiểm tra
            mail đã liên kết với tài khoản Gotcha Job.
          </Text>
          <Text fontSize={12.5} fontWeight={"200"} color={"#04273B"} mt={1}>
            Nếu hơn 1 ngày chưa nhận được mail, vui lòng liên hệ với chúng tôi
            để được hỗ trợ.
          </Text>
        </ContainedCard>
      </Box>
    </>
  );
};

const tabListCard: Tab[] = [
  {
    title: "Điền thông tin cá nhân",
    component: <TakeInformation />,
  },
  {
    title: "Chú thích",
    component: <ServiceInformation />,
  },
];
