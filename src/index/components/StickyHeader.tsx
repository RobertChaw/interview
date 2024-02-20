import React, { useState, useEffect, ReactNode } from "react";
import classnames from "classnames";

const StickyHeader = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 400) {
        setIsSticky(true);
        console.log("testing handleScroll true");
      } else {
        setIsSticky(false);
        console.log("testing handleScroll false");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` ${isSticky ? "sticky" : ""} top-0 z-50 shadow-md`}>
      {isSticky && (
        <div className={classnames("bg-white w-full", className)}>
          {children}
        </div>
      )}
    </div>
  );
};

export default StickyHeader;
