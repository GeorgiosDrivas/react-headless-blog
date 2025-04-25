import { useEffect, useState } from "react";
import { apiCategoriesPath, apiPostsPath } from "../../variables";
import { CategoryType } from "../types/blog-page-types";
import { PostsType } from "../types/posts-types";
import LinkComponent from "./Link";

type BlogProps = {
  searchQuery: string;
};

export default function Blog({ searchQuery }: BlogProps) {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [articles, setArticles] = useState<PostsType[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      fetch(apiCategoriesPath)
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        });
    };

    const getPosts = async () => {
      fetch(apiPostsPath)
        .then((response) => response.json())
        .then((data) => {
          setArticles(data);
        });
    };

    getCategories();
    getPosts();
  }, []);

  const filteredArticles =
    searchQuery != ""
      ? articles.filter((article) =>
          article.title.rendered.includes(searchQuery)
        )
      : articles;

  return (
    <div className="container">
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
      <div className="posts">
        {filteredArticles.map((article: PostsType) => (
          <div key={article.id} className="single-post">
            <div className="post-img">
              {article._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                  src={article._embedded["wp:featuredmedia"][0].source_url}
                  alt={article.title.rendered}
                />
              )}
            </div>
            <div className="post-details">
              <LinkComponent
                className={"post-title"}
                url={`/post/${article.slug}`}
              >
                <p>{article.title.rendered}</p>
              </LinkComponent>
              <p className="post-date">{article.date.split("T")[0]}</p>
              <div
                className="post-excerpt"
                dangerouslySetInnerHTML={{
                  __html: article.excerpt.rendered.slice(0, 150),
                }}
              />
              <LinkComponent
                url={`/post/${article.slug}`}
                className={"read-more-btn"}
              >
                Read more
              </LinkComponent>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
