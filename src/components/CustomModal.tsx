import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { FaCat } from "react-icons/fa6";

export default function CustomModal({ src, isOpen, onOpenChange }: { src: string; isOpen: boolean; onOpenChange: () => void }) {
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
                            <img alt="cat" className="aspect-content overflow-hidden rounded-xl object-cover object-center" height="600" src={src} width="800" />
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
