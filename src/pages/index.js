/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/section/heroSection";
import { useStaticQuery, graphql } from "gatsby";
import IngressSection from "../components/section/ingressSection";
import { createMarkup } from "../utils/functions";
import PageSection from "../components/section/pageSection";

import SingleProductGallery from "../components/section/singleProductGallery";
import ProductGallery from "../components/section/productGallery";

const IndexPage = () => {
  const { datoCmsLandingPage } = useStaticQuery(
    graphql`
      query {
        datoCmsLandingPage {
          ingressNode {
            childMarkdownRemark {
              html
            }
          }
          landinpageSection {
            id
            blockDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            buttonLink {
              ... on DatoCmsProductsPage {
                id
                title
                slug
              }
              ... on DatoCmsContactPage {
                id
                title
                slug
              }
              ... on DatoCmsAboutPage {
                id
                title
                slug
              }
            }
            externalBtnLink
            externalButtonLinkText
            blockTitle
            blockImage {
              alt
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
          productSectionTitle
          productGallery {
            id
            productDescrriptionNode {
              childMarkdownRemark {
                html
              }
            }
            productTitle
            productImage {
              alt
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `
  );

  const {
    landinpageSection,
    ingressNode,
    productGallery,
    productSectionTitle,
  } = datoCmsLandingPage;

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <main>
        <section sx={{ my: [6, null, 8] }}>
          <IngressSection
            dangerouslySetInnerHTML={createMarkup(
              ingressNode.childMarkdownRemark.html
            )}
          >
            <div
              dangerouslySetInnerHTML={createMarkup(
                ingressNode.childMarkdownRemark.html
              )}
            />
          </IngressSection>
          {landinpageSection.map((node) => {
            return <PageSection key={node.id} section={node} />;
          })}
          <section>
            {productGallery.length > 1 ? (
              <ProductGallery
                products={productGallery}
                title={productSectionTitle}
              />
            ) : (
              <SingleProductGallery
                products={productGallery}
                title={productSectionTitle}
              />
            )}
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
