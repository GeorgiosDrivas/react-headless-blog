import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostsType } from "../types/posts-types";
import { apiPostsPath } from "../../variables";
import LinkComponent from "./Link";
import { BlogProps } from "../types/search-types";

const CategoryPosts = ({ searchQuery }: BlogProps) => {
  const { category } = useParams();
  const [posts, setPosts] = useState<PostsType[]>([]);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        const catRes = await fetch(
          `http://headless-blog.local/wp-json/wp/v2/categories?slug=${category}`
        );
        const catData = await catRes.json();

        if (catData.length === 0) return;

        const categoryId = catData[0].id;
        const postRes = await fetch(`${apiPostsPath}&categories=${categoryId}`);
        const postData = await postRes.json();

        setPosts(postData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategoryPosts();
  }, [category]);

  const filteredPosts = searchQuery
    ? posts.filter((post) => post.title.rendered.includes(searchQuery))
    : posts;

  return (
    <div className="container">
      <LinkComponent className={"back-link"} url={"/"}>
        Back
      </LinkComponent>
      <div className="posts">
        {filteredPosts.map((post: PostsType) => (
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
                url={`/post/${post.slug}`}
                className={"post-title"}
              >
                {post.title.rendered}
              </LinkComponent>
              <div
                className="post-excerpt"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered.slice(0, 150),
                }}
              />
              <LinkComponent
                url={`/post/${post.slug}`}
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
};

export default CategoryPosts;
