import HorizontalScroll from "./components/HorizontalScroll";
import { CategorySelector } from "./components/CategorySelector";

const books = [
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
  {
    title: "Win at Work and Succeed at Life",
    author: "Michael Hyatt and Megan...",
    desc: "5 Principles to Free Yourself from the Cult of Overwork",
    duration: "13 min",
  },
];

export default function CategoryExplorer() {
  return (
    <section className={"mx-auto py-12 max-w-screen-lg"}>
      <h1 className={"mb-12 text-center font-bold text-[2rem] leading-10"}>
        What are you interested in?
      </h1>
      <div className={"text-center text-xl leading-[1.4] mb-8"}>
        With over 6,500 nonfiction books, we have the{" "}
        <mark
          className={
            "font-bold bg-[linear-gradient(180deg,transparent_65%,#FEDC86_65%)] bg-transparent"
          }
        >
          most comprehensive
        </mark>
        &nbsp;library of its kind.
      </div>
      <CategorySelector classname={"mb-16"} />
      <div>
        <h3 className={"px-9 mb-2 text-2xl font-bold"}>
          Most popular in
          <br className={"inline md:hidden"} />{" "}
          <span className={"text-[#0365f2]"}>Career & Success</span>
        </h3>
        <div className={"px-9 mb-8 text-xl"}>
          Read or listen to 662 titles in this category
        </div>
        <HorizontalScroll>
          {books.map((book, idx) => (
            <div key={idx} className={"flex-none w-44 mx-6"}>
              <div className={"h-[176px] w-[176px] mb-2"}>
                <img
                  src="/book.webp"
                  alt=""
                  className={"w-full h-full object-contain"}
                />
              </div>
              <h4 className={"text-base font-bold"}>{book.title}</h4>
              <div className={"text-sm text-[#6d787e] mb-2"}>{book.author}</div>
              <div className={"text-sm text-[#042330]"}>{book.desc}</div>
              <div className={"text-sm text-[#6d787e]"}>{book.duration}</div>
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
