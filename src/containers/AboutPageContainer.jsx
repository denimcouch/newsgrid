import React from "react";
import AboutInfo from '../components/AboutInfo'
import AboutAside from '../components/AboutAside'

export default function AboutPageContainer() {
  return (
    <section id="about">
      <div className="container">
        <div className="page-container">
          <AboutInfo/>
          <AboutAside/>
        </div>
      </div>
    </section>
  );
}
