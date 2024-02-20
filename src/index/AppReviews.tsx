import Star from "../assets/star.svg?react";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const reviews = [
  {
    name: "Sven O.",
    comment:
      "It's highly addictive to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge.",
  },
  {
    name: "Sven O.",
    comment:
      "It's highly addictive to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge.",
  },
  {
    name: "Sven O.",
    comment:
      "It's highly addictive to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge.",
  },
];

const cards = [
  {
    title: "4.7 Stars",
    description: "Average ratings on iOS and Google Play",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "4.7 Stars",
    description: "Average ratings on iOS and Google Play",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "4.7 Stars",
    description: "Average ratings on iOS and Google Play",
    image: "https://via.placeholder.com/300",
  },
];

export default function AppReviews() {
  return (
    <>
      <section className={"max-w-5xl mx-auto py-16 px-12"}>
        <h1 className={"mb-12 text-center font-bold text-[2rem] leading-10"}>
          What our members say Sven O.
        </h1>
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className={"max-w-[600px] bg-[#fff3d7] mb-8 mx-auto p-4"}
          >
            <div
              className={
                "flex md:gap-2 gap-0 flex-col md:flex-row md:justify-items-center md:mb-2"
              }
            >
              <div className={"text-base"}>{review.name}</div>
              <Rating
                size={"small"}
                defaultValue={5}
                icon={<StarIcon className={"text-[#0365F2] h-6 w-6"} />}
              />
            </div>
            <span>{review.comment}</span>
          </div>
        ))}
        <a
          className={
            "block max-w-[18.5rem] mx-auto mt-4 px-4 py-3 text-[#03314b] bg-[#2ce080] hover:bg-[#20ba68] rounded text-center font-medium"
          }
          href={"#"}
        >
          Start your free trial
        </a>
      </section>
      <section className={"max-w-5xl mx-auto py-16 px-12"}>
        <p className={"text-center text-3xl font-bold mb-10"}>
          Start growing with Blinkist now
        </p>
        <div className="flex md:flex-row flex-col justify-center">
          {cards.map((card, index) => (
            <div
              className="flex-1 px-6 pt-7 pb-14 rounded-xl mx-8 md:mx-4 my-4 bg-[#D7E9FF] text-center"
              key={index}
            >
              <Rating
                defaultValue={5}
                icon={<StarIcon className={"text-[#0365F2] block !h-7 !w-7"} />}
                className={"mt-4 mb-6"}
                readOnly
              />
              <div className="font-bold text-4xl mb-2">{card.title}</div>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
