import { Menu } from "./components/Menu";
import { useRef, useState } from "react";
import HorizontalScroll from "./index/components/HorizontalScroll";

export default function Test() {
  const [anchorElement, setAnchorElement] = useState<Element>();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  function handleClose() {
    setAnchorElement(undefined);
  }

  function handleMouseEnter() {
    if (btnRef.current) setAnchorElement(btnRef.current);
  }

  return (
    <div className={""}>
      <HorizontalScroll>
        {/* 这里放置要横向滚动的内容 */}
        <div className="flex-none w-64 h-64 bg-gray-200"></div>
        <div className="flex-none w-64 h-64 bg-gray-300"></div>
        <div className="flex-none w-64 h-64 bg-gray-400"></div>
        <div className="flex-none w-64 h-64 bg-gray-500"></div>
        <div className="flex-none w-64 h-64 bg-gray-600"></div>
        <div className="flex-none w-64 h-64 bg-gray-200"></div>
        <div className="flex-none w-64 h-64 bg-gray-300"></div>
        <div className="flex-none w-64 h-64 bg-gray-400"></div>
        <div className="flex-none w-64 h-64 bg-gray-500"></div>
        <div className="flex-none w-64 h-64 bg-gray-600"></div>
        <div className="flex-none w-64 h-64 bg-gray-200"></div>
        <div className="flex-none w-64 h-64 bg-gray-300"></div>
        <div className="flex-none w-64 h-64 bg-gray-400"></div>
        <div className="flex-none w-64 h-64 bg-gray-500"></div>
        <div className="flex-none w-64 h-64 bg-gray-600"></div>
      </HorizontalScroll>
    </div>
  );
}
