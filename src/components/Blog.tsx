import { useEffect, useState } from "react";
import { apiCategoriesPath, apiPostsPath } from "../../variables";
import { CategoryType } from "../types/blog-page-types";
import { Link } from "react-router-dom";
import { PostsType } from "../types/posts-types";

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
    <>
      <div id="categories">
        {categories
          .filter((cat) => cat.name !== "Uncategorized")
          .map((category) => (
            <Link
              key={category.name}
              className="blog-category"
              to={`/blog/category/${category.slug}`}
            >
              <p>{category.name}</p>
            </Link>
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
              <p className="post-title">{post.title.rendered}</p>
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
    </>
  );
}
