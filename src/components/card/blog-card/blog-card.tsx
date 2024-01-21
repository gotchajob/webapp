"use client";

import { StyledCard } from "@/components/common/card";
import { ImageCard } from "@/components/common/image-card";
import { Text, maxLineStyle } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import Stack from "@mui/material/Stack";
import EastIcon from "@mui/icons-material/East";
import "../blog-card/styled.scss";
export interface BlogCardProps {
  time: string;
  author: string;
  title: string;
  description: string;
  image: string;
}

export const BlogCard = ({ props }: { props: BlogCardProps }) => {
  return (
    <StyledCard
      className="blog-card"
      sx={{
        height: "405px",
        margin: "15px",
        cursor: "pointer",
        width: "278px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 280 */}
      <ImageCard src={props.image} height={"100%"} />
      <Stack spacing={1} paddingX={3} paddingY={2.5}>
        <Text fontSize={12}>
          <span
            style={{
              color: PRIMARYCOLOR,
            }}
          >
            {props.time}
          </span>{" "}
          / {props.author}
        </Text>
        <Text style={maxLineStyle(2)} fontWeight={700}>
          {props.title}
        </Text>
        <Stack spacing={1} className="blog-card-navigation">
          <Text style={maxLineStyle(2)} fontSize={12}>
            {props.description}
          </Text>
          <EastIcon fontSize="small" color="primary" />
        </Stack>
      </Stack>
    </StyledCard>
  );
};
