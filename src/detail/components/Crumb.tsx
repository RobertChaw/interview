import React from "react";
import classnames from "classnames";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface Link {
  text: string;
  url: string;
}

interface CrumbProps {
  links: Link[];
  className?: string;
}

const Crumb: React.FC<CrumbProps> = ({ links, className }) => {
  const previous = links[links.length - 2];
  return (
    <div>
      <div className={classnames("hidden md:flex items-center", className)}>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a
              href={link.url}
              className={classnames(
                "text-blue-600 hover:underline",
                index + 1 == links.length && "!text-blue-700",
              )}
            >
              {link.text}
            </a>
            {index !== links.length - 1 && (
              <span className="text-gray-500 mx-2">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <a
        className={"md:hidden flex items-center text-sm text-[#03314b]"}
        href={previous.url}
      >
        <span>
          <ArrowBackIosIcon fontSize={"inherit"} />
        </span>
        {previous.text}
      </a>
    </div>
  );
};

export default Crumb;
