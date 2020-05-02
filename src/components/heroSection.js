/** @jsx jsx */
import { jsx } from "theme-ui";
import OutlineButton from "./outlineButton";
import PrimaryButton from "./primaryButton";

const HeroSection = () => {
  return (
    <div sx={{ display: "flex" }}>
      <div sx={{ flex: "1" }}>
        <p>section</p>
        <OutlineButton text="View products" href="/products/" />
        <PrimaryButton text="View products" href="/products/" />
      </div>
      <div sx={{ flex: "1" }}>image</div>
    </div>
  );
};

export default HeroSection;
