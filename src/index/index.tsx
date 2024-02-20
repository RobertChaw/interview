import classnames from "classnames";
import Header from "./Header.tsx";
import { AudioHero } from "./AudioHero.tsx";
import MainFeature from "./MainFeature.tsx";
import Statistics from "./Statistics.tsx";
import TrialDurationExplanation from "./TrialDurationExplanation.tsx";
import Footer from "./Footer.tsx";
import "./index.css";
import AppReviews from "./AppReviews.tsx";
import CategoryExplorer from "./CategoryExplorer.tsx";
import StickyHeader from "./components/StickyHeader.tsx";

function Index() {
  return (
    <div>
      <StickyHeader>
        <div
          className={
            "mx-auto py-2 px-4 max-w-screen-lg flex justify-between items-center"
          }
        >
          <div>Logo</div>
          <button
            className={classnames(
              "block px-4 pt-[11px] pb-[13px] rounded bg-[#2ce080]",
              "hover:border-[#20ba68] hover:bg-[#20ba68]",
              "text-base font-medium leading-4 text-center",
            )}
          >
            Start free trial
          </button>
        </div>
      </StickyHeader>
      <Header />
      <AudioHero />
      <MainFeature />
      <Statistics />
      <TrialDurationExplanation />
      <AppReviews />
      <div className={"bg-[#f1f6f4]"}>
        <CategoryExplorer />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
