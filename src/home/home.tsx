import React from "react";
import { CoverImageComponent } from "./cover_image_section";
import { AboutComponent } from "./about_section";
import { ChooseUsComponent } from "./choose_us_section";
import { BlobSceneSvg, OutlineWave, LayeredWavesSvg } from "../assets/svg";

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
