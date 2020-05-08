/** @jsx jsx */
import { jsx } from "theme-ui";
import Image from "../components/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DesktopSlider = ({ imageGallery }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
  };
  return (
    <Slider {...settings}>
      {imageGallery.map(({ fluid, alt }, index) => (
        <div
          // sx={{
          //   height: "100%",
          //   width: "400px",
          // }}
          key={index}
        >
          <div
            sx={{
              width: "80px",
              height: "80px",
              div: {
                height: "100%",
              },
            }}
          >
            <Image alt={alt} image={fluid} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DesktopSlider;
