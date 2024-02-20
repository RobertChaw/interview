import classnames from "classnames";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const categoryList = [
  "Career & Success",
  "Mindfulness & Happiness",
  "Parenting",
  "Society & Culture",
  "Sex & Relationships",
  "Science",
  "Religion & Spirituality",
];

export function CategorySelector({ classname }: { classname?: string }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  const filteredCategoryList =
    isLargeScreen || isExpanded ? categoryList : categoryList.slice(0, 2);

  function handleItemClick(title: string) {
    setSelectedItem(title);
  }

  function handleExpandClick() {
    setIsExpanded((prv) => !prv);
  }

  return (
    <div
      className={classnames(
        "flex flex-col items-stretch md:items-start md:flex-row flex-wrap justify-center gap-2 px-4",
        classname,
      )}
    >
      {filteredCategoryList.map((category, idx) => (
        <button
          key={idx}
          className={classnames(
            "text-left md:text-center text-base px-4 py-2.5 border-2 border-white hover:border-[#2ce080] rounded bg-white",
            selectedItem === category && "!border-[#2ce080]",
          )}
          onClick={() => handleItemClick(category)}
        >
          {category}
        </button>
      ))}
      <button
        className={"md:hidden underline text-[#0365f2] text-xl"}
        onClick={handleExpandClick}
      >
        {!isExpanded ? "Show all" : "Hide additional categories"}
        <ArrowForwardIosIcon
          className={classnames(
            "!h-5 !w-5",
            !isExpanded ? "rotate-90" : "-rotate-90",
          )}
        />
      </button>
    </div>
  );
}
