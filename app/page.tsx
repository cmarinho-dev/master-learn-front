import Header from "./components/layout/Header";
import ContinueCard from "./components/layout/ContinueCard";
import Catalogue from "./components/layout/Catalogue";
import Subscription from "./components/layout/Subscription";
import Event from "./components/layout/Event";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:px-18 lg:px-24 sm:px-5 py-5 space-y-10">
        <Event />
        <div className="flex flex-wrap">
          <div className="flex flex-col flex-2 gap-12">
            <ContinueCard />
            <Catalogue />
          </div>
          <div className="flex-col hidden ps-6 large:flex">
            <Subscription />
          </div>
        </div>
      </div>
    </>
  );
}
