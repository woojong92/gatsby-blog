import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {/*  {data.mdx.frontmatter.date} */}

      <div
        className="prose
  prose-h1:font-bold prose-h1:text-xl
  prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
  p-4"
      >
        {children}
        <slot />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
