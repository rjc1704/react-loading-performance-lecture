import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import ImgFormatContextProvider from "./context/ImgFormatContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <NextUIProvider>
    <ImgFormatContextProvider>
      <App />
    </ImgFormatContextProvider>
  </NextUIProvider>
);
