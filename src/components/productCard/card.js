/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Fragment } from "react";
import DesktopSlider from "./desktopSlider";
import MobileSlider from "./mobileSlider";

const Card = ({ section }) => {
  return (
    <Fragment>
      {section.map(
        (
          {
            heading,
            price,
            descriptionNode,
            specificationTitle,
            specificationListNode,
            externalButtonText,
            externalButtonLink,
            imageGallery,
          },
          index
        ) => (
          <Fragment key={index}>
            <DesktopSlider
              heading={heading}
              price={price}
              description={descriptionNode}
              specificationTitle={specificationTitle}
              specificationListNode={specificationListNode}
              externalButtonText={externalButtonText}
              externalButtonLink={externalButtonLink}
              descriptionNode={descriptionNode}
              imageGallery={imageGallery}
            />
            <MobileSlider
              key={index}
              heading={heading}
              price={price}
              description={descriptionNode}
              specificationTitle={specificationTitle}
              specificationListNode={specificationListNode}
              externalButtonText={externalButtonText}
              externalButtonLink={externalButtonLink}
              descriptionNode={descriptionNode}
              imageGallery={imageGallery}
            />
          </Fragment>
        )
      )}
    </Fragment>
  );
};

export default Card;

Card.propTypes = {
  section: PropTypes.array.isRequired,
};
