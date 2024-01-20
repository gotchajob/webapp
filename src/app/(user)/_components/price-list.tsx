import { CVPriceCard } from "@/components/card/price-card/cv-price-card";
import { MockInterviewPriceCard } from "@/components/card/price-card/mock-interview-price-card";
import { PartnerTrainingPriceCard } from "@/components/card/price-card/partner-training-price-card";
import { SmartTUMPriceCard } from "@/components/card/price-card/smart-tum-price-card";
import { MainTitle } from "@/components/common/text";

import Grid from "@mui/material/Grid";

export const PriceList = () => {
  return (
    <>
      <MainTitle p={10} pt={30} id={"priceDiv"}>
        Giá cả
      </MainTitle>
      <Grid container sx={{ width: "760px" }}>
        <Grid item xs={6}>
          <MockInterviewPriceCard />
        </Grid>
        <Grid item xs={6}>
          <PartnerTrainingPriceCard />
        </Grid>
        <Grid item xs={6} marginTop={10}>
          <CVPriceCard />
        </Grid>
        <Grid item xs={6} marginTop={10}>
          <SmartTUMPriceCard />
        </Grid>
      </Grid>
    </>
  );
};
