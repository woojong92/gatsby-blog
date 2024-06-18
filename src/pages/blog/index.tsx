import * as React from "react";
import { Link, graphql, navigate } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import queryString, { ParsedQuery } from "query-string";

const CategoryListProps = {
  selectedCategory: "Web",
  categoryList: {
    All: 5,
    Web: 3,
    Mobile: 2,
  },
};

const BlogPage = ({ location: { search }, data }) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== "string" || !parsed.category
      ? "All"
      : parsed.category;

  console.log(parsed);

  return (
    <Layout pageTitle="My Blog Posts">
      <div className="flex py-4 gap-4">
        {Object.entries(CategoryListProps.categoryList).map(([name, count]) => (
          <div className={``} key={name}>
            #{name}({count})
          </div>
        ))}
      </div>
      <div className="space-y-3 py-6">
        {data.allMdx.nodes.map((node) => (
          <article
            className="bg-gray-50 p-4 cursor-pointer"
            key={node.id}
            onClick={() => navigate(`/blog/${node.frontmatter.slug}`)}
          >
            <h2 className="font-semibold text-xl">{node.frontmatter.title}</h2>
            <p className="text-sm">{node.frontmatter.summary}</p>
            <p className="text-xs text-gray-500 mt-2">
              {node.frontmatter.date}
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { published: { eq: "true" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          summary
          tags
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
