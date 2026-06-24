//mport React, { use, useState } from 'react'
import {Blog} from '../../types/blog'  ;
const getBlogs : () => Promise<Blog[]> = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const blogs = await res.json();
  return blogs;
}
export default async function page() {
   const blogs: Blog[] = await getBlogs();

  return (
    <div className='flex flex-col gap-3'>
      {blogs.map((blog) => (
        <div key={blog.id} className='border p-4 rounded'>
          <h2 className='text-xl font-bold'>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  )
}
