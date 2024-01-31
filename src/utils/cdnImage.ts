export const changeImgFormat = ({ src, format }: { src: string; format: string }) => {
    return src.replace(/\.[^/.]+$/, `.${format}`);
};
export const checkSupportWebP = (): Promise<boolean> => {
    return new Promise((resolve) => {
        var img = new Image();
        img.onload = function () {
            resolve(true);
        };
        img.onerror = function () {
            resolve(false);
        };
        img.src = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
    });
};
