
import React from 'react'
import { Blog, getBlogs } from '../service/getBlogs';
import { cacheLife } from 'next/cache';

const Blogs = async() => {
  // 'use cache';
  // cacheLife("hours")

   const blogs = await getBlogs();
  console.log(blogs)
  return (
    <div>
      <h1>create next app page.</h1>
      {blogs.map((blog: Blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Blogs
