import { client, urlFor } from '@/sanity/lib/client';
import Image from 'next/image';
import React from 'react'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'

export const revalidate = 60; // Revalidate every 60 seconds

interface FullBlogType {
    currentSlug: string;
    title: string;
    titleImage: string;
    content: PortableTextBlock[];
}

async function GetData(slug: string) {
    const query = `
      *[_type == "blog" && slug.current == '${slug}'] {
          "currentSlug": slug.current,
            title,
            content,
            titleImage
        }[0]`;
  
    const data = await client.fetch(query);
    return data;
  }
  

async function BlogArticle({ params }: { params: { slug: string } }) {
    // console.log("Slug:", params.slug);    // This all just to debug an error and I decided to leave it like that
    const data: FullBlogType = await GetData(params.slug)
    // console.log("Fetched Data:", data);  // This all just to debug an error and I decided to leave it like that
    // console.log(data)    // This all just to debug an error and I decided to leave it like that

  return (
    <div>
        <h1>
            <span className='dark:text-primary text-gray-400 text-base uppercase block text-center font-semibold tracking-wide '>Abubakar Siddique - Blog</span>
            <span className='mt-2 block text-3xl text-center leading-8 tracking-tight font-extrabold sm:text-4xl'>{data.title}</span>
        </h1>
        <Image src={urlFor(data.titleImage).url()} alt='Title Image' width={800} height={400} priority className='rounded-lg mt-8 border border-gray-400 dark:border-primary'/>

        <div className='mt-16 prose prose-lg prose-orange dark:prose-invert prose-li:marker:text-gray-400 dark:prose-li:marker:text-primary'>
            <PortableText value={data.content} />
        </div>
    </div>
  )
}

export default BlogArticle