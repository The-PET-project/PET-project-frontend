import React from "react";
import { CoverImageComponent } from "./cover-image-section";
import { AboutComponent } from "./about-section";
import { ChooseUsComponent } from "./choose-us-section";
import { BlobSceneSvg, OutlineWave, LayeredWavesSvg } from "../assets/svg";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <CoverImageComponent />
      <BlobSceneSvg />
      <ChooseUsComponent />
      <OutlineWave />
      <AboutComponent />
      <LayeredWavesSvg />
    </div>
  );
};
