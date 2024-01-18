import { FlexBox, FlexCenter } from "@/components/common/flex-box";
import { ImageCard } from "@/components/common/image-card";
import { MainTitle, Text } from "@/components/common/text";
import { ContactForm } from "@/components/form/contact-form";
import { GoogleMap } from "@/components/map/google-map";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

export const Contact = () => {
  return (
    <>
      <MainTitle p={10} pt={30}>
        Liên hệ chúng tôi
      </MainTitle>
      <Grid container sx={{ width: "1200px" }}>
        <Grid item xs={12} mb={15}>
          <FlexCenter>
            <GoogleMap />
          </FlexCenter>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={4}>
            <InformationLine
              image="/assets/icon/location.png"
              title="Địa chỉ:"
              subtitle="Vinhomes Grand Park,P.Long Thạnh Mỹ, Quận 9, Tp.HCM"
            />
            <InformationLine
              image="/assets/icon/email.png"
              title="Email:"
              subtitle="gotchajob.vn@gmail.com"
            />
            <InformationLine
              image="/assets/icon/phone.png"
              title="Số điện thoại:"
              subtitle="+84 0941 244 285"
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
};

const InformationLine = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <FlexBox alignItems={"center"}>
      <ImageCard src={image} width={"35px"} />
      <Box marginLeft={1}>
        <Text fontWeight={"700"} fontSize={16}>
          {title}
        </Text>
        <Text fontSize={12}>{subtitle}</Text>
      </Box>
    </FlexBox>
  );
};
