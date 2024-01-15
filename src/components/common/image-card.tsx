export const ImageCard = ({
  src,
  id,
  width = "100%",
  height = "auto",
  borderRadius = 0,
}: {
  height?: string | number;
  src: string;
  borderRadius?: number;
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
        height,
        borderRadius,
      }}
      id={id}
    />
  );
};
