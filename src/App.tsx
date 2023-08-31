import { SectionsContainer, Section } from "react-fullpage";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

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

  const [isPage2Active, setIsPage2Active] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const thisId = hash ? hash.slice(1) : "page1";
    const Sections = document.querySelectorAll(".Section");
    const list = document.querySelectorAll(".list");
    const thisSection = document.querySelector(`.SectionWrap .${thisId}`);
    const thisList = document.querySelector(`.headerMenu .${thisId}`);
    const page2 = document.querySelector(".page2");

    for (let section of Sections) {
      section.classList.remove("active");
    }

    for (let li of list) {
      li.classList.remove("active");
    }

    thisSection?.classList.add("active");
    thisList?.classList.add("active");
    if (page2) {
      setIsPage2Active(page2.classList.contains("active"));
    }
  }, [location.hash]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="App">
      <Header />
      <SectionsContainer {...options} className="SectionWrap">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Section className="Section page1">
          <Start />
        </Section>
        <Section className="Section page2">
          <About isActive={isPage2Active} />
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
