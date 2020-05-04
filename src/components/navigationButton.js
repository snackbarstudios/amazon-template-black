/** @jsx jsx */
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import { jsx } from "theme-ui";

const style = {
  buttonWrapper: {
    backgroundColor: "primary",
    border: "1px solid",
    outline: "none",
    borderColor: "white",
    color: "white",
    height: ["33px", "45px", "64px"],
    width: ["33px", "45px", "64px"],
    cursor: "pointer",
    ":focus": {
      backgroundColor: "primary",
    },
    ":active": {
      backgroundColor: "primary",
    },
  },
  iconStyling: {
    fontSize: [3, 4],
    fontWeight: "heading",
  },
};

const NavigationButton = ({ isNext, handleClick }) => {
  return (
    <button onClick={handleClick} sx={style.buttonWrapper}>
      <FontAwesomeIcon
        icon={isNext ? faAngleRight : faAngleLeft}
        sx={style.iconStyling}
      />
    </button>
  );
};

export default NavigationButton;

NavigationButton.defaultProps = {
  isNext: false,
};

NavigationButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isNext: PropTypes.bool,
};
