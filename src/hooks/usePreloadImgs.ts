import { ImgFormatContext } from "@/context/ImgFormatContext";
import { getCloudinaryImgUrl } from "@/utils/cdnImage";
import { useCallback, useContext, useEffect } from "react";

type PreloadImg = { src: string; width: number; height: number };

export default function usePreloadImgs(imgs: PreloadImg[]) {
  const { supportingWebp } = useContext(ImgFormatContext);

  const preloadImg = useCallback(
    ({ src, width, height }: { src: string; width: number; height: number }) => {
      const image = new Image();
      const { originalUrl, formattedUrl } = getCloudinaryImgUrl({ width, height, src });
      image.src = supportingWebp ? formattedUrl : originalUrl;
    },
    [supportingWebp]
  );

  useEffect(() => {
    imgs.forEach((img) => preloadImg(img));
  }, [preloadImg, imgs]);

  return null;
}
