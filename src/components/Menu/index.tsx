import Arrow from "../../assets/arrow.svg?react";
import { Item } from "./Item.tsx";
import { SubItem } from "./SubItem.tsx";
import { useState } from "react";
import { Popover } from "@mui/material";

const menuData = [
  {
    title: "Inspiration & Personal Growth",
    children: [
      { title: "Personal Development" },
      { title: "Productivity" },
      { title: "Motivation & Inspiration" },
      { title: "Biography & Memoir" },
      { title: "Creativity" },
      { title: "Education" },
    ],
  },
  {
    title: "Health & Meditation",
    children: [
      { title: "Psychology" },
      { title: "Technology & the Future" },
      { title: "Technology & the Future" },
    ],
  },
  {
    title: "Career & Business",
    children: [
      { title: "Career & Success" },
      { title: "Management & Leadership" },
      { title: "Productivity" },
      { title: "Entrepreneurship" },
      { title: "Marketing & Sales" },
      { title: "Corporate Culture" },
      { title: "Education" },
    ],
  },
];

export function Menu({
  open,
  anchorEl,
  onClose,
  className,
}: {
  open: boolean;
  anchorEl?: Element;
  onClose: () => void;
  className: string;
}) {
  const [activeItem, setActiveItem] = useState("");
  const subItems =
    menuData.find((item) => item.title === activeItem)?.children || [];
  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      className={className}
    >
      <div
        className={
          "bg-[#f8faf9] z-10 shadow-[rgba(58,70,73,0.2)_0px_10px_20px_0px] flex mx-auto rounded-lg"
        }
      >
        <ul className={"w-80 m-6 z-10"}>
          {menuData.map((item, idx) => (
            <Item
              isActive={activeItem === item.title}
              name={item.title}
              onHover={setActiveItem}
              key={idx}
            />
          ))}
        </ul>
        <ul className={"w-[19rem] my-6 px-6"}>
          {subItems.map((item, idx) => (
            <SubItem name={item.title} key={idx} />
          ))}
        </ul>
      </div>
    </Popover>
  );
}
