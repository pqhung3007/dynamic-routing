import React from 'react'

function ProductPage() {
  const blogs = [
    { id: '1', title: 'Blog 1' },
    { id: '2', title: 'Blog 2' },
    { id: '3', title: 'Blog 3' },
  ]

  return (
    <>
      <div>ProductPage</div>
      {blogs.map((blog, item) => (
        <div key={item}>
          <a href={`/blogs/${blog.id}`}>{blog.title}</a>
        </div>
      ))}
    </>
  )
}

export default ProductPage