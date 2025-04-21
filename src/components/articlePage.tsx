import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsType } from "../types/posts-types";
import { apiPostsPath } from "../../variables";
import LinkComponent from "./Link";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostsType>();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`${apiPostsPath}?slug=${slug}&_embed`);
      const data = await response.json();
      setPost(data[0]);
    };

    fetchPost();
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container single-post-page">
      <LinkComponent className={"back-link"} url={"/blog"}>
        Back
      </LinkComponent>
      <h1 className="single-article-title">{post.title.rendered}</h1>
      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <div className="sinlgle-article-image">
          <img
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post.title.rendered}
          />
        </div>
      )}
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
