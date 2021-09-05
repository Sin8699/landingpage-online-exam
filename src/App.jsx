import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

let idInterval = null;

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    idInterval = setInterval(() => {
      const submit = document.getElementById("doorbell-submit-button");
      if (!submit) return;

      submit.addEventListener("click", () => {
        const email = document.getElementById("doorbell-email").value;
        const content = document.getElementById("doorbell-feedback").value;
        fetch("https://wiflyhomework.com/exam-api/v1/form-contract", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // senderName: email,
            email: email,
            // role: "none",
            description: content,
          }),
        });
      });

      clearInterval(idInterval);
      idInterval = null;
    }, 1000);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
