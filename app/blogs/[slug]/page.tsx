import DislikeButton from '@/app/ui/DislikeButton';
import React from 'react'

const BlogsSlugPage = async ({ params }: { params: { slug: string } }) => {

  const { slug } = await params;
  return (
    <div>
      <h1>Blogs Slug Page: {slug} </h1>

      <DislikeButton blogSlug={slug} />
    </div>
  )
}

export default BlogsSlugPage
