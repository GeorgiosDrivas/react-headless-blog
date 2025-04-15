import { useEffect, useState } from "react";
import { apiPath } from "../../variables";
import { CategoryType } from "../types/blog-page-types";
import { Link } from "react-router-dom";

export default function Blog() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetch(apiPath)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      <div id="categories">
        {categories.map((category) => (
          <Link
            key={category.name}
            className="blog-category"
            to={`/blog/category/${category.slug}`}
          >
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
