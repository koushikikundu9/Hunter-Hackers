"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Post = () => {
  function createMarkup(c) {
  return {__html: c};
}
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    if (!slug) return; // Wait for slug to be available

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/getblogs?slug=${slug}`);
        const json = await res.json();
        setBlogs(json);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    fetchData();
  }, [slug]); // Depend on slug

  if (!blogs) return <p>Loading...</p>;

  return (
    <div className="bg-gradient-to-r from-gray-300 via-blue-200 to-blue-400">
      <h1>{blogs.title}</h1>
      <hr />
      {<div dangerouslySetInnerHTML={createMarkup(blogs.content)}></div>}
      
    </div>
  );
};

export default Post;
