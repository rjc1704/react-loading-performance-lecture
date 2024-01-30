import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { FaCat } from "react-icons/fa6";
import cat5 from "@/assets/imgs/cat5.jpg";
import cat4 from "@/assets/imgs/cat4.jpg";
import cat3 from "@/assets/imgs/cat3.jpg";
import cat2 from "@/assets/imgs/cat2.jpg";
import cat1 from "@/assets/imgs/cat1.jpg";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: cat1,
        thumbnail: cat1
    },

    {
        original: cat2,
        thumbnail: cat2
    },
    {
        original: cat3,
        thumbnail: cat3
    },
    {
        original: cat4,
        thumbnail: cat4
    },
    {
        original: cat5,
        thumbnail: cat5
    }
];

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
