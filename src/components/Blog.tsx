import { useEffect, useState } from "react";
import { apiPath } from "../../variables";
import { CategoryType } from "../types/blog-page-types";

export default function Blog() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch(apiPath)
      .then((response) => response.json())
      .then((data) => {
        data.map((category: CategoryType) => {
          setCategories((prev) => [...prev, category.name]);
        });
      });
  }, []);

  return (
    <>
      <div id="categories">
        {categories.map((category) => (
          <div key={category} className="blog-category">
            <p>{category}</p>
          </div>
        ))}
      </div>
    </>
  );
}
