import { Menu } from "../components/Menu";
import Arrow from "../assets/arrow.svg?react";
import { useRef, useState } from "react";
import classnames from "classnames";

export default function Header() {
  const [anchorElement, setAnchorElement] = useState<Element>();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  function handleClose() {
    setAnchorElement(undefined);
  }

  function handleMenuClick() {
    if (btnRef.current) setAnchorElement(btnRef.current);
  }

  return (
    <header
      className={classnames(
        "mx-auto flex justify-between items-center py-7 px-9 max-w-screen-lg",
      )}
    >
      <div className={"flex gap-8"}>
        <div>logo</div>
        <button
          className={classnames(
            "hidden lg:flex items-center gap-2 hover:text-[#0365f2] transition",
            anchorElement && "text-[#0365f2]",
          )}
          onClick={handleMenuClick}
          ref={btnRef}
        >
          <span>Categories</span>
          <Arrow
            className={classnames(
              "rotate-180 w-3 h-3 ml-2 mt-1 transition",
              anchorElement && "!rotate-0",
            )}
          />
        </button>
        <Menu
          open={!!anchorElement}
          anchorEl={anchorElement}
          onClose={handleClose}
          className={"hidden lg:flex"}
        />
      </div>
      <ul className={"flex gap-6"}>
        <li className={"hidden md:block font-medium text-[#03314b]"}>
          <a href="#" className={"hover:text-[#0365f2]"}>
            Coaching
          </a>
        </li>
        <li>
          <a href="#" className={"hover:text-[#0365f2]"}>
            For business
          </a>
        </li>
        <li>
          <a href="#" className={"hover:text-[#0365f2]"}>
            Log in
          </a>
        </li>
      </ul>
    </header>
  );
}
