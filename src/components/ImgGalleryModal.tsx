import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export default function ImgGallaryModal({ isOpen, onOpenChange, images }: { isOpen: boolean; onOpenChange: () => void; images: string[] }) {
  const IMG_WIDTH = 400;
  const IMG_HEIGHT = 250;
  const THUMBNAIL_IMG_WIDTH = 100;
  const THUMBNAIL_IMG_HEIGHT = 60;

  const items = images.map((src) => {
    return {
      original: src,
      originalClass: `w-[${IMG_WIDTH}px] h-[${IMG_HEIGHT}px] overflow-hidden`,
      thumbnail: src,
      thumbnailClass: `w-[${THUMBNAIL_IMG_WIDTH}px] h-[${THUMBNAIL_IMG_HEIGHT}px] overflow-hidden`
    } as ReactImageGalleryItem;
  });
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <span>Modal Title</span>
            </ModalHeader>
            <ModalBody>
              <ImageGallery items={items} />
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
