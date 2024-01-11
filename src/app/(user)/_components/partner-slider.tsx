"use client";
import { FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { SubTitle } from "@/components/common/text";
import Box from "@mui/material/Box";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const PartnerCarousel = () => {
  const listPartner = [
    {
      name: "Đại học quốc gia",
      logo: "/assets/images/partner-1.png",
    },
    {
      name: "Đại học quốc gia",
      logo: "/assets/images/partner-1.png",
    },
    {
      name: "Đại học quốc gia",
      logo: "/assets/images/partner-2.png",
    },
    {
      name: "Đại học quốc gia",
      logo: "/assets/images/partner-3.png",
    },
    {
      name: "Đại học quốc gia",
      logo: "/assets/images/partner-4.png",
    },
    {
      name: "Đại học quốc gia",
      logo: "/assets/images/partner-5.png",
    },
    {
      name: "Đại học quốc gia",
      logo: "/assets/images/partner-1.png",
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
      items: 5,
    },
  };

  const items = listPartner.map((partner) => {
    return (
      <FlexCenter
        key={partner.name}
        data-value="1"
        sx={{
          width: "120px",
          paddingLeft: "30px",
          paddingRight: "30px",
          height: "60px !important",
        }}
      >
        <ImageCard src={partner.logo} width={80} />
      </FlexCenter>
    );
  });
  return (
    <>
      <SubTitle pt={15} pb={3}>
        Đối tác của chúng tôi
      </SubTitle>
      <Box width={700}>
        <AliceCarousel
          innerWidth={1024}
          activeIndex={0}
          animationDuration={1000}
          autoPlay
          autoPlayInterval={2000}
          disableButtonsControls
          mouseTracking
          items={items}
          responsive={responsive}
        />
      </Box>
    </>
  );
};
