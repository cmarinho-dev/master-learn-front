import Header from "./components/layout/Header";
import ContinueCard from "./components/layout/ContinueCard";
import Catalogue from "./components/layout/Catalogue";
import Subscription from "./components/layout/Subscription";
import Event from "./components/layout/Event";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-4 sm:px-5 md:px-18 lg:px-24 py-6 space-y-10">
        <Event />
        <div className="flex flex-wrap">
          <div className="flex flex-col flex-2 gap-12">
            <ContinueCard />
            <Catalogue />
          </div>
          <div className="flex-col hidden ps-6 xl:flex">
            <Subscription />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
