import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { cats } from "@/assets/imgs";
import ImageGallery from "react-image-gallery";
import { changeImgFormat } from "@/utils/cdnImage";
import { useContext } from "react";
import { ImgFormatContext } from "@/context/ImgFormatContext";

// const images = Object.values(imgs).map((src) => ({
//     original: src,
//     thumbnail: src,
//     thumbnailClass: "w-[100px] h-[60px] overflow-hidden",
//     originalClass: "w-[400px] h-[250px] overflow-hidden"
// }));

export default function CustomModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {
    const { supportingWebp } = useContext(ImgFormatContext);
    const images = cats.map((src) => ({
        original: supportingWebp ? changeImgFormat({ src, format: "webp" }) : src,
        thumbnail: supportingWebp ? changeImgFormat({ src, format: "webp" }) : src,
        thumbnailClass: "w-[100px] h-[60px] overflow-hidden",
        originalClass: "w-[400px] h-[250px] overflow-hidden"
    }));
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <span>Modal Title</span>
                        </ModalHeader>
                        <ModalBody>
                            <ImageGallery items={images} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
