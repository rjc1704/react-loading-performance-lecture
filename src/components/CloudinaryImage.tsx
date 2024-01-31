import { changeImgFormat } from "@/utils/cdnImage";

type Props = {
    width: number;
    height: number;
    src: string;
    alt: string;
};

export default function CloudinaryImage({ width, height, src, alt }: Props) {
    const extendedSrc = src.replace("upload/", `upload/w_${width},h_${height},c_fill,q_auto/`);

    return (
        <picture>
            <source srcSet={changeImgFormat({ src: extendedSrc, format: "webp" })} type="image/webp" />
            <img src={extendedSrc} alt={alt} />
        </picture>
    );
}
