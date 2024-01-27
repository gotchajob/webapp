import { ContainedButton } from "@/components/common/button";
import { StyledCard } from "@/components/common/card";
import { FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { MainTitle, Text } from "@/components/common/text";
import { PRIMARYCOLOR } from "@/components/config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactNode, Suspense } from "react";
import { Tabs } from "./_component/tab";

export default async function Page() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <Suspense fallback={null}>
            <Tabs />
          </Suspense>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <ImageCard src="/assets/images/quick-interview-test.png" />
        </Grid>
      </Grid>
    </>
  );
}
