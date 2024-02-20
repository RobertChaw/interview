import classnames from "classnames";
import { useEffect, useState } from "react";

const sentences = [
  "Be more knowledgeable",
  "Be more successful",
  "Be healthier",
  "Be a better parent",
  "Be happier",
  "Be your best self!",
];

export default function Statistics() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prv) => {
        if (prv + 1 >= sentences.length) return 0;
        return prv + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className={
          "max-w-5xl py-6 md:py-8 lg:py-12 md:px-12 lg:px-9 mx-auto flex flex-col md:flex-row justify-between"
        }
      >
        <ul className={"flex-1 p-4 md:p-0"}>
          {sentences.map((sentence, idx) => (
            <li
              key={idx}
              className={classnames(
                "text-[#6d787e] mb-2 last:mb-6 text-[32px] leading-10 font-bold",
                activeIdx === idx && "!text-[#03314b]",
              )}
            >
              {sentence}
            </li>
          ))}
        </ul>
        <div className={"flex-1"}>
          <ul className={"bg-[#f1f6f4] px-4 md:px-8 py-12 space-y-6"}>
            <li className={"flex gap-4"}>
              <div className={"text-2xl text-[#0365f2] font-bold"}>95%</div>
              <div className={"text-base md:text-xl text-[#3a4649]"}>
                of Blinkist members
                <span className={"font-bold"}>read significantly</span> more
                than before*
              </div>
            </li>
            <li className={"flex gap-4"}>
              <div className={"text-2xl text-[#0365f2] font-bold"}>91%</div>
              <div className={"text-base md:text-xl text-[#3a4649]"}>
                of Blinkist members
                <span className={"font-bold"}>create better habits*</span>
              </div>
            </li>
            <li className={"flex gap-4"}>
              <div className={"text-2xl text-[#0365f2] font-bold"}>95%</div>
              <div className={"text-base md:text-xl text-[#3a4649]"}>
                have made
                <span className={"font-bold"}>
                  positive changes in their lives
                </span>
                thanks to Blinkist*
              </div>
            </li>
          </ul>
          <div
            className={"text-right text-[#6d787e] leading-[1.57] text-sm p-4"}
          >
            * Based on internal study using survey data
            <br />
            from general Blinkist customers
          </div>
        </div>
      </section>
      <section
        className={classnames(
          "max-w-5xl py-6 md:py-8 lg:py-12 px-12 lg:px-9 mx-auto",
          "flex flex-nowrap flex-col md:flex-row justify-between gap-16",
        )}
      >
        <div className={"flex-1"}>
          <img
            src="/image_en@2x-31f2ab90ccaaf56e5713.webp"
            alt=""
            className={"w-full object-contain"}
          />
        </div>

        <div className={"flex-1"}>
          <ul>
            {sentences.map((sentence, idx) => (
              <li
                key={idx}
                className={classnames(
                  "text-[#6d787e] mb-2 last:mb-6 text-[32px] leading-10 font-bold",
                  activeIdx === idx && "!text-[#03314b]",
                )}
              >
                {sentence}
              </li>
            ))}
          </ul>
          <a
            className={
              "block w-[18.5rem] mx-auto md:mx-0 px-4 py-3 text-[#03314b] text-center font-medium bg-[#2ce080] hover:bg-[#20ba68] rounded"
            }
            href={"#"}
          >
            Start your free trial
          </a>
        </div>
      </section>
    </>
  );
}
