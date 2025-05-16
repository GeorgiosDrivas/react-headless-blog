import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryType } from "../types/blog-page-types";
import { apiCategoriesPath } from "../../variables";
import LinkComponent from "./Link";

export default function Nav() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      fetch(apiCategoriesPath)
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        });
    };
    getCategories();
  });

  return (
    <nav>
      <div id="nav-wrap">
        <div id="logo-wrap">
          <Link to={"/"}>
            <h1 id="logo">News24</h1>
          </Link>
        </div>
        <div id="categories">
          {categories
            .filter((cat) => cat.name !== "Uncategorized")
            .map((category) => (
              <LinkComponent
                url={`/category/${category.slug}`}
                className={"blog-category"}
                key={category.name}
              >
                <p>{category.name}</p>
              </LinkComponent>
            ))}
        </div>
        {/* <Search /> */}
      </div>
    </nav>
  );
}
