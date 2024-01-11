import { ImageCard } from "../common/image-card";

export const MockInterviewIcon = ({ width }: { width?: number | string }) => {
  return <ImageCard width={width} src="/assets/icon/mock-interview-icon.png" />;
};

export const PartnerTrainingIcon = ({ width }: { width?: number | string }) => {
  return (
    <ImageCard width={width} src="/assets/icon/partner-training-icon.png" />
  );
};
export const CVIcon = ({ width }: { width?: number | string }) => {
  return <ImageCard width={width} src="/assets/icon/cv-icon.png" />;
};

export const SmartTumIcon = ({ width }: { width?: number | string }) => {
  return <ImageCard width={width} src="/assets/icon/smart-tum-icon.png" />;
};
