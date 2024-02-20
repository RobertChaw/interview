export default function TrialDurationExplanation() {
  return (
    <section className={"max-w-5xl px-12 mx-auto"}>
      <div
        className={
          "text-[#03314b] text-[2rem] font-bold leading-tight md:text-center mb-6"
        }
      >
        A small investment, an incredible growth opportunity
      </div>
      <div className={"text-xl leading-[1.4] md:text-center mb-8"}>
        Get access to powerful ideas from
        <mark
          className={
            "font-bold bg-[linear-gradient(180deg,transparent_65%,#FEDC86_65%)] bg-transparent"
          }
        >
          more than 6,500 nonfiction books and podcasts.
        </mark>
      </div>
      <div className={"trial-timeline-with-reminder-step"}>
        <ul className="timeline">
          <li className="timeline__step">
            <div className="timeline__axis">
              <div className="timeline__bullet"></div>
              <div className="timeline__line"></div>
            </div>
            <div className="timeline__label">Today</div>
            <p className="timeline__text">
              Start enjoying the entire library of Blinks and shows.
            </p>
          </li>
          <li className="timeline__step timeline__step--reminder">
            <div className="timeline__axis">
              <div className="timeline__bullet"></div>
              <div className="timeline__line"></div>
            </div>
            <div className="timeline__label">Day 5</div>
            <p className="timeline__text">
              We’ll send you a <strong>reminder</strong> email that your trial
              is ending.
            </p>
          </li>
          <li className="timeline__step timeline__step--last">
            <div className="timeline__axis">
              <div className="timeline__bullet"></div>
              <div className="timeline__line"></div>
            </div>
            <div className="timeline__label">Day 7</div>
            <p className="timeline__text">Free trial ends.</p>
          </li>
          <li className="timeline__finish"></li>
        </ul>
      </div>
      <div className={"bg-[#d7e9ff] py-6 px-4 md:flex md:items-center md:gap-4"}>
        <div>
          Enjoy unlimited access for 7 days. Love it and keep investing in
          yourself for only <b>$8.34</b> a month, or <b>simply cancel before February 28
          and you won’t ever be charged.</b>
        </div>
        <a
          className={
            "block md:min-w-[18.5rem] mt-4 md:m-0 px-4 py-3 text-[#03314b] bg-[#2ce080] hover:bg-[#20ba68] rounded text-center font-medium"
          }
          href={"#"}
        >
          Start your free trial
        </a>
      </div>
    </section>
  );
}
