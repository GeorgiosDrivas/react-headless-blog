import { useEffect, useState } from "react";
import { apiCategoriesPath, apiPostsPath } from "../../variables";
import { CategoryType } from "../types/blog-page-types";
import { PostsType } from "../types/posts-types";
import LinkComponent from "./Link";

export default function Blog() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [posts, setPosts] = useState<PostsType[]>([]);

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
          console.log(data);
          setPosts(data);
        });
    };

    getCategories();
    getPosts();
  }, []);

  return (
    <div className="container">
      <div id="categories">
        {categories
          .filter((cat) => cat.name !== "Uncategorized")
          .map((category) => (
            <LinkComponent
              url={`/blog/category/${category.slug}`}
              className={"blog-category"}
              key={category.name}
            >
              <p>{category.name}</p>
            </LinkComponent>
          ))}
      </div>
      <div className="posts">
        {posts.map((post: PostsType) => (
          <div key={post.id} className="single-post">
            <div className="post-img">
              {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                />
              )}
            </div>
            <div className="post-details">
              <LinkComponent
                className={"post-title"}
                url={`/blog/post/${post.slug}`}
              >
                <p>{post.title.rendered}</p>
              </LinkComponent>
              <p className="post-date">{post.date.split("T")[0]}</p>
              <div
                className="post-excerpt"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered.slice(0, 150),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
