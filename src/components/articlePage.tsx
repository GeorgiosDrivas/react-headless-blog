import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsType } from "../types/posts-types";
import { apiPostsPath } from "../../variables";

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
      <h1>{post.title.rendered}</h1>
      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <img
          src={post._embedded["wp:featuredmedia"][0].source_url}
          alt={post.title.rendered}
        />
      )}
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
