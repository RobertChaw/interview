export default function MainFeature() {
  return (
    <section className={"mb-12 max-w-5xl px-12 py-6 md:py-8 lg:px-12 mx-auto"}>
      <h2
        className={
          "text-center font-bold text-[1.5rem] mb-6 md:text-[2rem] md:mb-8"
        }
      >
        Understand books & podcasts in 15 minutes
      </h2>
      <ul className={"flex flex-col md:flex-row gap-6"}>
        <li className={"flex flex-row md:flex-col items-center gap-6"}>
          <img src="/headphones.svg" alt="" className={"h-[60px] w-[60px]"} />
          <div className={"md:text-center"}>
            <h3 className={"md:pb-2 text-[1.5rem] md:text-2xl font-bold"}>
              Read or listen
            </h3>
            <div className={"text-[1rem] md:text-xl"}>
              Get the key ideas from nonfiction bestsellers in minutes, not
              hours.
            </div>
          </div>
        </li>
        <li className={"flex flex-row md:flex-col items-center gap-6"}>
          <img src="/bulb.svg" alt="" className={"h-[60px] w-[60px]"} />
          <div className={"md:text-center"}>
            <h3 className={"md:pb-2 text-[1.5rem] md:text-2xl font-bold"}>
              Find your next read
            </h3>
            <div className={"text-[1rem] md:text-xl"}>
              Get book lists curated by experts and personalized
              recommendations.
            </div>
          </div>
        </li>
        <li className={"flex flex-row md:flex-col items-center gap-6"}>
          <img src="/mic.svg" alt="" className={"h-[60px] w-[60px]"} />
          <div className={"md:text-center"}>
            <h3 className={"md:pb-2 text-[1.5rem] md:text-2xl font-bold"}>
              Shortcasts<sup className={"text-[#ff445d] text-sm"}>NEW</sup>
            </h3>
            <div className={"text-[1rem] md:text-xl"}>
              We’ve teamed up with podcast creators to bring you key insights
              from podcasts.
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
