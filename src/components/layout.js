/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import { Fragment } from "react";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <div sx={{ minHeight: "100vh" }}>{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
