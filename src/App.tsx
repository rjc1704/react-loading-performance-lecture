import { useDisclosure } from "@nextui-org/react";
import Carousel from "react-material-ui-carousel";
import * as imgs from "@/assets/imgs";
import ImgCard from "./components/ImgCard";
import catVideo from "@/assets/videos/cat_video.mp4";
import { lazy, Suspense } from "react";

const CustomModal = lazy(() => import("@/components/CustomModal"));

function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const images = Object.values(imgs);

    return (
        <div className="w-[1200px] flex flex-col mx-auto">
            <header className="w-full h-20 flex items-center justify-between px-4 md:px-6 text-xl">
                <div className="flex items-center justify-center">
                    <span>리액트 로딩 최적화</span>
                </div>
                <nav className="flex gap-4 sm:gap-6">
                    <div className="text-sm font-medium hover:underline underline-offset-4">이미지</div>
                    <div className="text-sm font-medium hover:underline underline-offset-4">동영상</div>
                    <div className="text-sm font-medium hover:underline underline-offset-4">폰트</div>
                    <div className="text-sm font-medium hover:underline underline-offset-4">코드스플리팅</div>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <Carousel>
                        {images.map((src, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg h-96">
                                <img src={src} className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Carousel Item" />
                            </div>
                        ))}
                    </Carousel>
                </section>
                <section className="w-full h-[500px] md:h-[700px]">
                    <div className="w-full h-full object-cover">
                        <video src={catVideo} controls autoPlay muted />
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="cursor-pointer  grid gap-6 lg:grid-cols-3 lg:gap-12">
                            {images.map((src) => (
                                <ImgCard key={src} src={src} handleClick={onOpen} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-5">
                    <div className="container px-4 md:px-6">
                        <p className="text-gray-500 md:text-2xl lg:text-[36px]">
                            {"가나다라마바사아자차카타파하"}
                            <br />
                            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
                            <br />
                            {"abcdefghijklmnopqrstuvwxyz"}
                            <br />
                            {"0123456789"}
                            <br />
                            {"~`!@#$%^&*()-_=+[{]}|’”/?,<.>:;"}
                        </p>
                    </div>
                </section>
            </main>
            <footer className="w-full h-20 flex items-center justify-center px-4 md:px-6 border-t">
                <p className="text-sm text-gray-500 dark:text-gray-400">Footer Contents Here</p>
            </footer>
            <Suspense fallback={<div>Modal Component Loading...</div>}>
                <CustomModal isOpen={isOpen} onOpenChange={onOpenChange} />
            </Suspense>
        </div>
    );
}

export default App;
