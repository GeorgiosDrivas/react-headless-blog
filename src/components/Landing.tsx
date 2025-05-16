import { useEffect, useState } from "react";
import { apiPostsPath } from "../../variables";
import { PostsType } from "../types/posts-types";
import LinkComponent from "./Link";
import { useSearchContext } from "../searchContext";

export default function Landing() {
  const [articles, setArticles] = useState<PostsType[]>([]);
  const { searchQuery } = useSearchContext();
  const loading = articles.length === 0;

  useEffect(() => {
    const getPosts = async () => {
      fetch(apiPostsPath)
        .then((response) => response.json())
        .then((data) => {
          setArticles(data);
        });
    };

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
      <div className="posts">
        {loading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          filteredArticles.map((article: PostsType) => (
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
          ))
        )}
      </div>
    </div>
  );
}
