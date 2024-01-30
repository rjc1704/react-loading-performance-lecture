import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function ImgCard({ src, handleClick = () => {} }: { src: string; handleClick?: (src: string) => void }) {
    return (
        <div onClick={() => handleClick(src)}>
            <Card className="py-4 max-w-[294px] hover:scale-105">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-hidden py-2 rounded-xl h-[185px]">
                    <img alt="Card background" className="w-full h-full object-cover" src={src} width={270} height={175} />
                </CardBody>
            </Card>
        </div>
    );
}
