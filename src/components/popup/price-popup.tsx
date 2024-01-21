"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

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
  const [nextPageTitle, setNextPageTitle] = useState("");
  const tabListCard: Tab[] = [
    {
      title: "Điền thông tin cá nhân",
      component: <TakeInformation setNextPageTitle={setNextPageTitle} />,
    },
    {
      title: "Chú thích",
      component: <ServiceInformation setNextPageTitle={setNextPageTitle} />,
    },
    {
      title: "Thanh toán",
      component: <ServicePayment setNextPageTitle={setNextPageTitle} />,
    },
    {
      title: "Quét mã QR",
      component: <QRPayment />,
    },
  ];
  useEffect(() => {
    setTabList([tabListCard[0]]);
  }, [isOpen]);
  const [openSuccess, setOpenSuccess] = useState(false);
  return (
    <>
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
        maxWidth="md"
      >
        <DialogContent
          sx={{
            padding: 0,
            width: "100%",
            overflow: "hidden",
            height: "580px",
          }}
        >
          <Grid container height={"100%"}>
            <Grid item xs={7} py={7} px={6} position={"relative"}>
              <Stack spacing={3} mb={2}>
                <FlexBox>
                  <ArrowBackIcon
                    fontSize={"small"}
                    sx={{
                      color: "#6DB3DC",
                    }}
                    onClick={() => {
                      if (tabList.length === 1) {
                        setIsOpen(false);
                      } else {
                        setTabList(tabList.slice(0, tabList.length - 1));
                      }
                    }}
                  />
                  <Text color={"#b7b8b9"} fontSize={12} ml={2}>
                    Mock Interview/
                    {tabList.slice(0, tabList.length - 1).map((tab) => (
                      <span key={tab.title}>{tab.title}/</span>
                    ))}
                    <span style={{ color: "#49a0d3" }}>
                      {tabList.at(tabList.length - 1)?.title}
                    </span>
                  </Text>
                </FlexBox>
                <Box>
                  <Text fontSize={12}>
                    Bạn đang trong quá trình thanh toán dịch vụ
                  </Text>
                  <Text fontSize={45} fontWeight={"700"} color={PRIMARYCOLOR}>
                    Mock Interview
                  </Text>
                </Box>
              </Stack>
              {tabList.at(tabList.length - 1)?.component}

              {tabList.length < 4 ? (
                <FlexCenter
                  position={"absolute"}
                  bottom={64}
                  width={"100%"}
                  right={0}
                >
                  <ContainedButton
                    disabled={nextPageTitle.length === 0}
                    onClick={() => {
                      if (nextPageTitle.length > 0) {
                        setTabList([
                          ...tabList,
                          tabListCard[
                            tabListCard.findIndex(
                              (value) => value.title === nextPageTitle
                            )
                          ],
                        ]);
                        setNextPageTitle("");
                      }
                    }}
                  >
                    Tiếp tục
                  </ContainedButton>
                </FlexCenter>
              ) : (
                <FlexCenter
                  position={"absolute"}
                  bottom={70}
                  width={"100%"}
                  right={0}
                >
                  <ContainedButton
                    onClick={() => {
                      setOpenSuccess(true);
                      setIsOpen(false);
                    }}
                  >
                    Kiểm tra thanh toán
                  </ContainedButton>
                </FlexCenter>
              )}
            </Grid>
            <Grid item xs={5}>
              <ImageCard height={"100%"} src="/assets/images/illu-2.png" />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <PriceSuccessPopup isOpen={openSuccess} setIsOpen={setOpenSuccess} />
    </>
  );
};

export const PriceSuccessPopup = ({
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
      maxWidth="md"
    >
      <DialogContent
        sx={{ padding: 0, width: "100%", overflow: "hidden", height: "580px" }}
      >
        <Grid container height={"100%"}>
          <Grid item xs={7} py={8} px={15} position={"relative"}>
            <FlexCenter height={"100%"}>
              <Stack spacing={2}>
                <Box>
                  <Text fontSize={14} textAlign={"center"}>
                    Bạn đã hoàn thành quá trình thanh toán dịch vụ
                  </Text>
                  <Text
                    textAlign={"center"}
                    fontSize={45}
                    fontWeight={"700"}
                    color={PRIMARYCOLOR}
                  >
                    Mock Interview
                  </Text>
                </Box>
                <Text fontSize={14} textAlign={"center"}>
                  Vui lòng kiểm tra mail đã liên kết với tài khoản Gotcha Job để
                  nhận mail xác nhận thông tin sớm nhất.
                </Text>
                <Text fontSize={14} textAlign={"center"}>
                  Nếu hơn 1 ngày chưa nhận được mail, vui lòng liên hệ với chúng
                  tôi qua tin nhắn hoặc hotline để được hỗ trợ.
                </Text>
              </Stack>
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
const TakeInformation = ({
  setNextPageTitle,
}: {
  setNextPageTitle: Dispatch<SetStateAction<string>>;
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (name.length > 0 && phone.length > 0 && email.length > 0) {
      setNextPageTitle("Chú thích");
    } else {
      setNextPageTitle("");
    }
  }, [name, phone, email]);
  return (
    <Box>
      <Text fontSize={12} color={PRIMARYCOLOR} mb={1} fontWeight={"700"}>
        Vui lòng điền đầy đủ thông tin dưới đây
      </Text>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Input
            placeholder="Họ và tên"
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Số điện thoại"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            style={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
const ServiceInformation = ({
  setNextPageTitle,
}: {
  setNextPageTitle: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    setNextPageTitle("Thanh toán");
  }, []);
  return (
    <>
      <Box mb={2}>
        <Text fontSize={12} color={PRIMARYCOLOR} mb={1} fontWeight={700}>
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
        <Text fontSize={12} color={PRIMARYCOLOR} mb={1} fontWeight={700}>
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
const ServicePayment = ({
  setNextPageTitle,
}: {
  setNextPageTitle: Dispatch<SetStateAction<string>>;
}) => {
  const paymentList = [
    {
      name: "Quét mã QR",
      value: "Quét mã QR",
    },
  ];
  return (
    <Box>
      <Text fontSize={12} fontWeight={700} color={PRIMARYCOLOR} mb={1}>
        Chọn phương thức thanh toán
      </Text>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => {
          setNextPageTitle(e.target.value);
        }}
      >
        <Stack spacing={2} width={250}>
          {paymentList.map((payment) => (
            <FlexBox
              key={payment.value}
              borderRadius={2}
              sx={{
                boxShadow: "0px 0px 20px rgba(8.40, 78, 117.60, 0.20)",
                alignItems: "center",
              }}
            >
              <Radio
                value={payment.value}
                size="small"
                sx={{
                  color: "#0E82C4",
                  m: 1.5,
                }}
              />
              <Text color={"#0E82C4"} fontSize={14}>
                {payment.name}
              </Text>
            </FlexBox>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

const QRPayment = () => {
  return (
    <FlexCenter>
      <Box padding={1} mb={1} paddingBottom={0} borderRadius={2} border={"2px solid #0E82C4"}>
        <ImageCard src="/assets/images/QRPay.png" width={150} />
      </Box>
      <Text textAlign={"center"} fontSize={14}>
        Võ Thị Như Ngọc
      </Text>
      <Text textAlign={"center"} fontSize={14}>
        5904205128102
      </Text>
      <Text textAlign={"center"} fontSize={14}>
        Ngân hàng Agribank
      </Text>
    </FlexCenter>
  );
};
