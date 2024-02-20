import Crumb from "./components/Crumb.tsx";
import IosShareIcon from "@mui/icons-material/IosShare";
import classnames from "classnames";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { LinearProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const path = [
  { text: "Categories", url: "#" },
  { text: "Productivity", url: "#" },
  { text: "The 5 AM Club summary", url: "#" },
];
const links = [
  { text: "The 5 AM Club Summary of 6 key ideas", url: "#" },
  { text: "What is The 5 AM Club about?", url: "#" },
  { text: "The 5 AM Club Review", url: "#" },
  { text: "Best quote from The 5 AM Club", url: "#" },
  { text: "Who should read The 5 AM Club?", url: "#" },
  { text: "About the Author", url: "#" },
  { text: "Book summaries like The 5 AM Club", url: "#" },
  { text: "People also liked these summaries", url: "#" },
  { text: "The 5 AM Club FAQs", url: "#" },
];

export default function BookHero() {
  const [isExpand, setIsExpand] = useState(false);

  function handleExpandClick() {
    setIsExpand((prv) => !prv);
  }

  return (
    <section
      className={"relative max-w-screen-lg mx-auto px-4 pt-6 md:pt-16 md:px-12"}
    >
      <div
        className={
          "block md:hidden absolute top-0 inset-x-0 -z-10 h-[300px] bg-[#feceb4]"
        }
      />
      <div className={"flex justify-between"}>
        <Crumb links={path} className={"mb-6"} />
        <button className={"text-[24px] text-[#03314b] md:text-[#9da3a4]"}>
          <IosShareIcon fontSize={"inherit"} />
        </button>
      </div>
      <div className={"flex flex-col md:flex-row gap-12 items-start"}>
        <div
          className={classnames(
            "bg-[#feceb4] ",
            "md:rounded-md rounded-t-none overflow-hidden md:w-[296px]",
            "md:order-1 flex-none self-stretch md:self-auto",
          )}
        >
          <img
            src="/book.webp"
            className={
              "object-contain w-[11.5rem] md:w-[16.5rem] aspect-square mx-auto md:my-8"
            }
            alt=""
          />
          <div
            className={
              "p-2 md:p-4 bg-[#03314b] w-full flex gap-4 items-center rounded-md md:rounded-none"
            }
          >
            <button className={"text-[48px]"}>
              <PlayCircleIcon
                className={"text-white hover:text-[#2ce080]"}
                fontSize={"inherit"}
              />
            </button>
            <div className={"flex-1"}>
              <div className={"truncate font-medium text-sm text-white"}>
                Listen to the Intro
              </div>
              <div className={"flex justify-between items-center gap-2"}>
                <LinearProgress
                  variant="determinate"
                  className={"flex-1"}
                  value={30}
                  classes={{
                    colorPrimary: "!bg-white",
                    barColorPrimary: "!bg-[#2ce080]",
                  }}
                />
                <p className={"text-white"}>01:54</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"flex flex-col"}>
          <p
            className={
              "mb-2 md:mb-6 flex -order-1 font-medium text-base text-[#6d787e]"
            }
          >
            Better than a summary
          </p>
          <h1
            className={
              "mb-2 md:mb-4 flex flex-col mt-4 md:mt-0 font-bold text-2xl md:text-3xl"
            }
          >
            The 5 AM Club
          </h1>
          <div className={"mb-6 font-bold"}>Robin Sharma</div>
          <div className={"mb-6 text-lg"}>
            Own Your Morning. Elevate Your Life.
          </div>
          <div className={"flex gap-2 items-center mb-8"}>
            <div className={"flex gap-1"}>
              <StarIcon className={"h-6 w-6 text-[#fdba0d]"} />
              <p className={"text-sm"}>4.5 (9470 ratings)</p>
            </div>
            <div className={"flex gap-2 items-center"}>
              <AccessTimeIcon className={"h-6 w-6"} />
              <p className={"text-sm"}>22 mins</p>
            </div>
          </div>
          <a
            className={classnames(
              "order-1 md:order-none block w-full md:max-w-[18.5rem]",
              "mt-4 mb-12 px-4 py-3",
              "bg-[#2ce080] hover:bg-[#20ba68] rounded text-center",
            )}
            href={"#"}
          >
            <span className={"text-[#03314b] font-medium"}>
              Start your free trial
            </span>
          </a>
          <div>
            <h2
              className={"text-[#03314b] text-base font-bold md:text-xl mb-4"}
            >
              Brief summary
            </h2>
            <p className={"text-xl md:text-lg mb-4 md:mb-6 text-[#3a4649]"}>
              The 5 AM Club by Robin Sharma is a self-help book that highlights
              the importance of waking up early to increase productivity and
              creativity. The author provides a framework for creating a morning
              routine that promotes personal growth and success.
            </p>
          </div>
          <div>
            <div className={"text-midnight font-bold text-sm mb-2"}>Topics</div>
            <div
              className={
                "flex gap-3 overflow-x-auto overflow-y-hidden flex-row md:flex-wrap gap-x-4 gap-y-2 mb-8"
              }
            >
              <div
                className={
                  "bg-[#f1f6f4] py-3 px-4 border-2 rounded border-transparent hover:border-[#2ce080] cursor-pointer"
                }
              >
                <span className={"whitespace-nowrap text-[#03314b]"}>
                  Success
                </span>
              </div>
              <div
                className={
                  "bg-[#f1f6f4] py-3 px-4 border-2 rounded border-transparent hover:border-[#2ce080] cursor-pointer"
                }
              >
                <span className={"whitespace-nowrap text-[#03314b]"}>
                  Routines & Habits
                </span>
              </div>
              <div
                className={
                  "bg-[#f1f6f4] py-3 px-4 border-2 rounded border-transparent hover:border-[#2ce080] cursor-pointer"
                }
              >
                <span className={"whitespace-nowrap text-[#03314b]"}>
                  Leadership
                </span>
              </div>
            </div>
          </div>
          <div>
            <button
              className={
                "flex items-center text-midnight font-bold text-sm cursor-pointer"
              }
              onClick={handleExpandClick}
            >
              Table of Contents
              <KeyboardArrowDownIcon
                className={classnames(isExpand && "rotate-180")}
              />
            </button>
            <ul hidden={!isExpand}>
              {links.map((link, idx) => (
                <li
                  className={
                    "first:mt-4 mb-4 last:mb-0 text-[#3a4649] font-medium text-sm"
                  }
                >
                  <a href={link.url} key={idx} className={"underline"}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
