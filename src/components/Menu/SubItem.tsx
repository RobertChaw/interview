export function SubItem({
  name,
  // onHover,
}: {
  name: string;
  // onHover: (name: string) => void;
}) {
  return (
    <li className={"flex mb-2 last:mb-0"}>
      <a
        href="#"
        className={
          "h-12 w-full flex items-center font-medium hover:text-[#0365f2] active:text-[#0365f2] "
        }
      >
          {name}
      </a>
    </li>
  );
}
