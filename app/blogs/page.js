'use client';
import { useState,useEffect } from 'react';
import React from 'react'
import styles from './module.css';
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/blogs'); // Assumes this returns an array
      const json = await res.json();
      setBlogs(json);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-8 bg-gradient-to-r from-gray-300 via-blue-200 to-blue-400 pb-[250px]">
      <BentoGrid className="max-w-4xl mx-auto">
      {blogs.map((blog,i) => (
        <Link href={`/blogpost/post?slug=${blog.slug}`}>
          <BentoGridItem
          key={i}
          title={blog.title}
          description={blog.metadata}
          header=""
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} /> </Link>
      ))}
    </BentoGrid>
      
    </div>
  );
}


export default Blog