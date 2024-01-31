import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { FaCat } from "react-icons/fa6";
import * as imgs from "@/assets/imgs";
import ImageGallery from "react-image-gallery";

const images = Object.values(imgs).map((src) => ({
    original: src,
    thumbnail: src,
    thumbnailClass: "w-[100px] h-[60px] overflow-hidden",
    originalClass: "w-[400px] h-[250px] overflow-hidden"
}));

export default function CustomModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <span>
                                Modal Title &nbsp;
                                <FaCat style={{ display: "inline" }} />
                            </span>
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
