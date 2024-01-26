import { CVPriceCard } from "@/components/card/price-card/cv-price-card";
import { MockInterviewPriceCard } from "@/components/card/price-card/mock-interview-price-card";
import { PartnerTrainingPriceCard } from "@/components/card/price-card/partner-training-price-card";
import { SmartTUMPriceCard } from "@/components/card/price-card/smart-tum-price-card";
import { FlexCenter } from "@/components/common/flex-box";
import { MainTitle } from "@/components/common/text";
import { UserCurrent } from "@/package/api/user/current";
import { getUserToken } from "@/package/cookies/token";

import Grid from "@mui/material/Grid";
import { cookies } from "next/headers";

export const PriceList = async() => {
  const accessToken = await getUserToken(cookies())
  const user = await UserCurrent(accessToken)
  return (
    <>
      <MainTitle py={10} pt={30} id={"priceDiv"}>
        Giá cả
      </MainTitle>
      <Grid container sx={{ maxWidth: "760px" }}>
        <Grid item xs={12} sm={6}>
          <FlexCenter>
            <MockInterviewPriceCard user={user}/>
          </FlexCenter>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            marginTop: {
              xs: 10,
              sm: "0px !important",
            },
          }}
        >
          <FlexCenter>
            <PartnerTrainingPriceCard />
          </FlexCenter>
        </Grid>
        <Grid item xs={12} sm={6} marginTop={10}>
          <FlexCenter>
            <CVPriceCard />
          </FlexCenter>
        </Grid>
        <Grid item xs={12} sm={6} marginTop={10}>
          <FlexCenter>
            <SmartTUMPriceCard />
          </FlexCenter>
        </Grid>
      </Grid>
    </>
  );
};
