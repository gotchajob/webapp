"use client";
import { FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { MainTitle } from "@/components/common/text";
import Box from "@mui/material/Box";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "../../../scss/carousel.scss";
import {
  MentorCard,
  MentorCardProps,
  MentorNextButton,
} from "@/components/card/mentor-card/mentor-card";

export const MentorList = () => {
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
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  const items = listMentor.map((mentor) => {
    return <MentorCard props={mentor} key={mentor.title}/>;
  });
  return (
    <>
      <MainTitle p={10} pt={30} id={"mentorDiv"}>
        Đội ngũ chuyên môn
      </MainTitle>
      <Box width={1024} paddingX={"50px"} position={"relative"}>
        <AliceCarousel
          innerWidth={1024}
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
