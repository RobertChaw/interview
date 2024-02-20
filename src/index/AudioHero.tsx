import classnames from "classnames";

export function AudioHero() {
  return (
    <section className={"overflow-hidden"}>
      <div
        className={"relative text-[#03314b] max-w-screen-lg mx-auto md:px-9"}
      >
        <div className={"px-12 md:px-0 md:mb-[9.25rem] lg:mb-[18.25rem]"}>
          <h1 className={"pt-16 pb-6 font-bold leading-[1.25] text-[2.5rem]"}>
            More knowledge&nbsp;
            <br className={"hidden md:block"} />
            in less time
          </h1>
          <div className={"pb-8 leading-[1.4] text-[1.25rem] w-[420px]"}>
            Perfect for curious people who love to learn, busy people who don’t
            have time to read, and even people who aren’t into reading.
          </div>
          <a
            href="#"
            className={classnames(
              "block px-4 pt-[11px] pb-[13px] border-2 border-[#2ce080] rounded bg-[#2ce080] w-full md:w-[292px]",
              "hover:border-[#20ba68] hover:bg-[#20ba68]",
              "text-base font-medium leading-4 text-center",
            )}
          >
            Start your free trial
          </a>
        </div>
        <div
          className={classnames(
            "mb-[4.25rem] md:absolute top-0 left-0 right-0 md:p-9 flex justify-center md:justify-end",
            "bg-[url('/background_wave_mobile.svg')] md:bg-[url('/background_wave_tablet.svg')] lg:bg-[url('/background_wave.svg')]",
            "bg-origin-padding bg-right-bottom bg-no-repeat bg-cover md:bg-contain bg-clip-border",
            "after:bg-[#0365f2] after:content-[''] after:absolute after:block after:top-0 after:left-full after:w-screen after:h-full",
          )}
        >
          <img
            src="/phones_tablet.png"
            alt=""
            className={
              "relative top-[60px] md:top-[100px] lg:top-[60px] w-auto max-w-[500px] md:max-w-[324px] lg:max-w-[459px] block"
            }
          />
        </div>
      </div>
    </section>
  );
}
