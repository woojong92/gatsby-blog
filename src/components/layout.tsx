import React, { ReactElement, useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

interface LayoutProps {
  pageTitle: string;
  children: ReactElement;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const [open, setOpen] = useState<boolean>(false);
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
    <main>
      <header className="fixed top-0 inset-x-0 w-full z-50 bg-white">
        <div className="flex justify-between items-center shadow-md h-14 px-5 ">
          <div className="text-xl text-gray-600 font-bold">
            <Link to={"/"}>{data.site.siteMetadata.title}</Link>
          </div>

          <nav className="-mr-2">
            <ul className="flex">
              <li className="px-4 py-2 bg">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="px-4 py-2">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-2xl mt-14 -z-50">{children}</div>

      {/* <footer className="mt-auto px-[50px]">
        Thank You for Visiting My Blog, Have a Good Day 😆
        <br />© 2021 Developer Hyun, Powered By Gatsby.
      </footer> */}
    </main>
  );
};

export default Layout;
