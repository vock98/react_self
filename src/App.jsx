import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState(JsonData);
  /* 
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  */

  return (
    <div>
      <Navigation data={landingPageData.Navigation}/>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} Ndata={landingPageData.Navigation} />
      <About data={landingPageData.About} Ndata={landingPageData.Navigation} />
      <Services data={landingPageData.Services} Ndata={landingPageData.Navigation} />
      {/* <Gallery data={landingPageData.Gallery} Ndata={landingPageData.Navigation}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} Ndata={landingPageData.Navigation} /> */}
      <Team data={landingPageData.Team} Ndata={landingPageData.Navigation} />
      <Contact data={landingPageData.Contact} Ndata={landingPageData.Navigation} />
    </div>
  );
};

export default App;
