const links = [
  {
    url: "Popular urls",
    links: [
      { text: "The 5 AM Club", url: "#" },
      { text: "The 7 Habits of Highly Effective People", url: "#" },
      { text: "Rich Dad, Poor Dad", url: "#" },
      { text: "12 Rules For Life", url: "#" },
      { text: "Thinking, Fast and Slow", url: "#" },
      { text: "Zero to One", url: "#" },
      {
        text: "How to Win Friends and Influence People in the Digital Age",
        url: "#",
      },
      { text: "Think and Grow Rich", url: "#" },
      { text: "The Subtle Art of Not Giving a F*ck", url: "#" },
    ],
  },
  {
    url: "Popular categories",
    links: [
      { text: "Personal Development", url: "#" },
      { text: "Psychology", url: "#" },
      { text: "Productivity", url: "#" },
      { text: "Career & Success", url: "#" },
      { text: "Management & Leadership", url: "#" },
      { text: "Science", url: "#" },
      { text: "Motivation & Inspiration", url: "#" },
      { text: "Mindfulness & Happiness", url: "#" },
      { text: "Money & Investments", url: "#" },
      { text: "Communication Skills", url: "#" },
    ],
  },
  {
    url: "Popular urls",
    links: [
      { text: "The 5 AM Club", url: "#" },
      { text: "The 7 Habits of Highly Effective People", url: "#" },
      { text: "Rich Dad, Poor Dad", url: "#" },
      { text: "12 Rules For Life", url: "#" },
      { text: "Thinking, Fast and Slow", url: "#" },
      { text: "Zero to One", url: "#" },
      {
        text: "How to Win Friends and Influence People in the Digital Age",
        url: "#",
      },
      { text: "Think and Grow Rich", url: "#" },
      { text: "The Subtle Art of Not Giving a F*ck", url: "#" },
    ],
  },
  {
    url: "Popular categories",
    links: [
      { text: "Personal Development", url: "#" },
      { text: "Psychology", url: "#" },
      { text: "Productivity", url: "#" },
      { text: "Career & Success", url: "#" },
      { text: "Management & Leadership", url: "#" },
      { text: "Science", url: "#" },
      { text: "Motivation & Inspiration", url: "#" },
      { text: "Mindfulness & Happiness", url: "#" },
      { text: "Money & Investments", url: "#" },
      { text: "Communication Skills", url: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={"max-w-screen-lg mx-auto px-9"}>
      <h2 className={"font-bold text-[1.5rem] mb-6 md:text-2xl"}>
        Discover the Blinkist catalogue
      </h2>
      <div className="pb-16">
        <div className="grid grid-flow-col auto-cols-auto lg:grid-cols-4 overflow-x-auto gap-8">
          {links.map((column, index) => (
            <div key={index} className={"w-64 lg:w-full"}>
              <h3 className="text-lg font-bold mb-2">{column.url}</h3>
              <ul>
                {column.links.map((link, index) => (
                  <li
                    key={index}
                    className={"text-sm hover:text-[#116be9] mb-4"}
                  >
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
