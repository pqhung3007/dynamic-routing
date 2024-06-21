import React from 'react'

function BlogDetailPage({ params }: { params: { blogId: string } }) {
  return (
    <div>BlogDetailPage {params.blogId}</div>
  )
}

export default BlogDetailPage