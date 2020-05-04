/** @jsx jsx */
import { jsx, css } from "theme-ui";
import PropTypes from "prop-types";

const Title = ({ children }) => (
  <h1
    css={css`
      text-align: center;
      text-transform: uppercase;
      font-size: 24px;
      font-family: Avenir Next;
      font-weight: 400;
      color: black;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      grid-template-rows: 12px 0;
      grid-gap: 30px;
      &:after,
      :before {
        content: " ";
        display: block;
        border-bottom: 1px solid black;
      }
    `}
  >
    {children}
  </h1>
);

export default Title;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
