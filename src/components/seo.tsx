import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface SeoProps {
  title: string;
}
const Seo = ({ title }: SeoProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}{" "}
    </title>
  );
};

export default Seo;
