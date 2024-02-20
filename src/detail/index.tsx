import Header from "./Header.tsx";
import Crumb from "./components/Crumb.tsx";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import classnames from "classnames";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { LinearProgress } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookHero from "./BookHero.tsx";

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

function Detail() {
  return (
    <div>
      <Header />
      <BookHero />
    </div>
  );
}

export default Detail;
