import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { getCloudinaryImgUrl } from "@/utils/cdnImage";
import { useContext } from "react";
import { ImgFormatContext } from "@/context/ImgFormatContext";

export default function ImgGallaryModal({ isOpen, onOpenChange, images }: { isOpen: boolean; onOpenChange: () => void; images: string[] }) {
  const IMG_WIDTH = 400;
  const IMG_HEIGHT = 250;
  const THUMBNAIL_IMG_WIDTH = 100;
  const THUMBNAIL_IMG_HEIGHT = 60;

  const { supportingWebp } = useContext(ImgFormatContext);
  const items = images.map((src) => {
    const { originalUrl, formattedUrl } = getCloudinaryImgUrl({ width: IMG_WIDTH, height: IMG_HEIGHT, src });
    const { originalUrl: thumbUrl, formattedUrl: thumbWebpUrl } = getCloudinaryImgUrl({ width: THUMBNAIL_IMG_WIDTH, height: THUMBNAIL_IMG_HEIGHT, src });
    return {
      original: supportingWebp ? formattedUrl : originalUrl,
      originalClass: `w-[${IMG_WIDTH}px] h-[${IMG_HEIGHT}px] overflow-hidden`,
      thumbnail: supportingWebp ? thumbWebpUrl : thumbUrl,
      thumbnailClass: `w-[${THUMBNAIL_IMG_WIDTH}px] h-[${THUMBNAIL_IMG_HEIGHT}px] overflow-hidden`,
      thumbnailLoading: "lazy",
      loading: "lazy"
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
