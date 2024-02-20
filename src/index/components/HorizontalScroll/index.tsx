import React, { useRef, ReactNode, useEffect, useState } from "react";
import classnames from "classnames";
import ScrollArrow from "../../../assets/scroll_arrow.svg?react";
import "./index.css";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

// ChatGPT 生成
const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsAtStart(scrollRef.current.scrollLeft === 0);
        setIsAtEnd(
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
            scrollRef.current.scrollWidth,
        );
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollWidth = () => {
    if (scrollRef.current) {
      return scrollRef.current.scrollWidth;
    }
    return 0;
  };

  const containerWidth = () => {
    if (scrollRef.current) {
      return scrollRef.current.clientWidth;
    }
    return 0;
  };

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: containerWidth(),
        behavior: "smooth",
      });
    }
  };

  const scrollToPrevious = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -containerWidth(),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={classnames(className, "flex items-center")}>
      <button
        onClick={scrollToPrevious}
        className={classnames(
          " hidden md:block h-full md:mr-4",
          "rotate-90 disabled:text-[#bac8ce] text-[#0365f2]",
        )}
        disabled={isAtStart}
      >
        <ScrollArrow />
      </button>

      <div ref={scrollRef} className="flex-1 flex overflow-x-auto">
        {children}
      </div>
      <button
        onClick={scrollToNext}
        className={classnames(
          "hidden md:block h-full md:pl-4",
          "-rotate-90 disabled:text-[#bac8ce] text-[#0365f2]",
        )}
        disabled={isAtEnd}
      >
        <ScrollArrow />
      </button>
    </div>
  );
};

export default HorizontalScroll;
