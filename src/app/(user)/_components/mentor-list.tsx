"use client";
import { MainTitle } from "@/components/common/text";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "../../../scss/carousel.scss";
import {
  MentorCard,
  MentorCardProps,
  MentorNextButton,
} from "@/components/card/mentor-card/mentor-card";
import useWindowSize from "@/hook/use-window-size";

export const MentorList = () => {
  const clientWidth = useWindowSize();
  const [mentorNumber, setMentorNumber] = useState(3);
  useEffect(() => {
    if (clientWidth > 1024) {
      setMentorNumber(3);
    } else {
      setMentorNumber(Math.floor((clientWidth - 100) / 308));
    }
  }, [clientWidth]);
  const listMentor: MentorCardProps[] = [
    {
      image: "/assets/images/mentor-1.png",
      title: "Trần Nguyễn Phi Long",
      subtitle: "Head of Retail Marketing tại PNJ",
      description:
        "Anh Phi Long với hơn 12 năm kinh nghiệm trong ngành, từng giữ vị trí quản lý cấp cao và lãnh đạo marketing của nhiều công ty, tổ chức hàng đầu Việt Nam cũng như các tập đoàn quốc tế hàng đầu thế giới như Central Group, Lazada, Nhóm Mua, Pharmacity & PNJ.",
    },
    {
      image: "/assets/images/mentor-2.png",
      title: "Trần Nguyễn Phi Long",
      subtitle: "Head of Retail Marketing tại PNJ",
      description:
        "Anh Phi Long với hơn 12 năm kinh nghiệm trong ngành, từng giữ vị trí quản lý cấp cao và lãnh đạo marketing của nhiều công ty, tổ chức hàng đầu Việt Nam cũng như các tập đoàn quốc tế hàng đầu thế giới như Central Group, Lazada, Nhóm Mua, Pharmacity & PNJ.",
    },
    {
      image: "/assets/images/mentor-3.png",
      title: "Trần Nguyễn Phi Long",
      subtitle: "Head of Retail Marketing tại PNJ",
      description:
        "Anh Phi Long với hơn 12 năm kinh nghiệm trong ngành, từng giữ vị trí quản lý cấp cao và lãnh đạo marketing của nhiều công ty, tổ chức hàng đầu Việt Nam cũng như các tập đoàn quốc tế hàng đầu thế giới như Central Group, Lazada, Nhóm Mua, Pharmacity & PNJ.",
    },
    {
      image: "/assets/images/mentor-3.png",
      title: "Trần Nguyễn Phi Long",
      subtitle: "Head of Retail Marketing tại PNJ",
      description:
        "Anh Phi Long với hơn 12 năm kinh nghiệm trong ngành, từng giữ vị trí quản lý cấp cao và lãnh đạo marketing của nhiều công ty, tổ chức hàng đầu Việt Nam cũng như các tập đoàn quốc tế hàng đầu thế giới như Central Group, Lazada, Nhóm Mua, Pharmacity & PNJ.",
    },
  ];
  const responsive = {
    308: {
      items: 1,
    },
    616: {
      items: 2,
    },
    924: {
      items: 3,
    },
  };

  const items = listMentor.map((mentor) => {
    return <MentorCard props={mentor} key={mentor.title} />;
  });
  return (
    <>
      <MainTitle py={10} pt={30} id={"mentorDiv"}>
        Đội ngũ chuyên môn
      </MainTitle>
      <Box
        width={mentorNumber * 308 + 100}
        paddingX={"50px"}
        position={"relative"}
      >
        <AliceCarousel
          innerWidth={mentorNumber * 308}
          activeIndex={0}
          animationDuration={1000}
          preservePosition
          renderNextButton={({ isDisabled }) => (
            <MentorNextButton disabled={isDisabled as boolean} isNext={true} />
          )}
          renderPrevButton={({ isDisabled }) => (
            <MentorNextButton disabled={isDisabled as boolean} isNext={false} />
          )}
          mouseTracking
          items={items}
          responsive={responsive}
        />
      </Box>
    </>
  );
};
