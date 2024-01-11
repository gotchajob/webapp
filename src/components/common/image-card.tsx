export const ImageCard = ({
  src,
  id,
  width = "100%",
  height,
}: {
  height?: string | number;
  src: string;
  id?: string;
  width?: string | number;
}) => {
  return (
    <img
      src={src}
      alt="none"
      style={{
        width,
        objectFit: "cover",
        objectPosition: "center",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        height: height !== null && height !== undefined ? height : "auto",
      }}
      id={id}
    />
  );
};
