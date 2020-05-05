/** @jsx jsx */
import { jsx } from "theme-ui";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const style = {
  buttonWrapper: {
    backgroundColor: "primary",
    outline: "none",
    border: "1px solid",
    borderColor: "white",
    color: "white",
    height: ["33px", "45px"],
    width: ["33px", "45px"],
    cursor: "pointer",
    ":focus": {
      backgroundColor: "highlight",
    },
    ":active": {
      backgroundColor: "highlight",
    },
  },
  iconStyling: {
    fontSize: [3, 4],
    fontWeight: "heading",
    mt: "5px",
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
