import Arrow from "../../assets/arrow.svg?react";
import classnames from "classnames";

export function Item({
  name,
  onHover,
  isActive,
}: {
  name: string;
  onHover: (name: string) => void;
  isActive: boolean;
}) {
  function handleHover() {
    onHover(name);
  }

  return (
    <li className={"flex mb-2 last:mb-0"} onMouseEnter={handleHover}>
      <button
        className={classnames(
          "flex items-center h-12 w-full text-midnight cursor-pointer hover:text-[#0365f2]",
          isActive && "text-[#0365f2]",
        )}
      >
        <div className={"w-full flex items-center font-medium"}>{name}</div>
        <div className={""}>
          <Arrow className={"w-6 h-6 p-1 -rotate-90 flex-shrink-0"} />
        </div>
      </button>
    </li>
  );
}
