import { SectionsContainer, Section } from "react-fullpage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "@global/Header";

import Start from "@pages/Start";
import About from "@pages/About";
import Skills from "@pages/Skills";
import Carrer from "@pages/Carrer";
import Works from "@pages/Works";
import Contact from "@pages/Contact";

const App = () => {
  let options = {
    anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
    activeClass: "active",
    arrowNavigation: false,
    delay: 1000,
    navigation: false,
    scrollBar: false,
    sectionClassName: "Section",
    verticalAlign: false,
  };

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const thisId = hash ? hash.slice(1) : "page1";
    const Sections = document.querySelectorAll(".Section");
    const list = document.querySelectorAll(".list");
    const thisSection = document.querySelector(`.SectionWrap .${thisId}`);
    const thisList = document.querySelector(`.headerMenu .${thisId}`);
    for (let section of Sections) {
      section.classList.remove("active");
    }

    for (let li of list) {
      li.classList.remove("active");
    }

    thisSection?.classList.add("active");
    thisList?.classList.add("active");
  }, [location.hash]);

  return (
    <div className="App">
      <Header />
      <SectionsContainer {...options} className="SectionWrap">
        <Section className="Section page1">
          <Start />
        </Section>
        <Section className="Section page2">
          <About />
        </Section>
        <Section className="Section page3">
          <Skills />
        </Section>
        <Section className="Section page4">
          <Carrer />
        </Section>
        <Section className="Section page5">
          <Works />
        </Section>
        <Section className="Section page6">
          <Contact />
        </Section>
      </SectionsContainer>
    </div>
  );
};
export default App;
