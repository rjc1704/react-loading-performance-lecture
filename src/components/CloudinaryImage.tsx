import { getCloudinaryImgUrl } from "@/utils/cdnImage";

type Props = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

export default function CloudinaryImage({ width, height, src, alt }: Props) {
  const { originalUrl, formattedUrl } = getCloudinaryImgUrl({ width, height, src, format: "webp" });

  return (
    <picture>
      <source srcSet={formattedUrl} type="image/webp" />
      <img src={originalUrl} alt={alt} loading="lazy" />
    </picture>
  );
}
