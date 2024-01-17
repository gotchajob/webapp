import { PRIMARYCOLOR } from "@/components/config";
import { Banner } from "./_components/banner";
import { MainTitle, SubTitle, Text } from "@/components/common/text";
import CardMedia from "@mui/material/CardMedia";
import { FlexCenter } from "@/components/common/flex-box";
import { PartnerCarousel } from "./_components/partner-slider";
import { Suspense } from "react";
import { ServiceCard } from "@/components/card/service-card/service-card";
import { ServiceList } from "./_components/service-list";
import { BlogList } from "./_components/blog-list";
import { Feedback } from "./_components/feedback";
import { PriceList } from "./_components/price-list";
export default async function Page() {
  return (
    <>
      <Banner />
      <MainTitle p={15}>Về chúng tôi</MainTitle>
      <FlexCenter>
        <CardMedia
          component={"video"}
          controls={true}
          sx={{ width: 800 }}
          src="/assets/videos/demo.mp4"
        />
      </FlexCenter>
      <FlexCenter>
        <PartnerCarousel />
      </FlexCenter>
      <FlexCenter>
        <ServiceList />
      </FlexCenter>
      <FlexCenter>
        <BlogList />
      </FlexCenter>
      <Feedback />
      <FlexCenter>
        <PriceList />
      </FlexCenter>
      <FlexCenter>
        <BlogList />
      </FlexCenter>
    </>
  );
}
