import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardType {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: string;
}

async function GetData() {
  const query = await client.fetch(`*[_type == 'blog'] | order(_createdAt asc){
  title,
  smallDescription,
    'currentSlug': slug.current,
    titleImage
    }`);


 return query
}

async function Home() {

  const data: BlogCardType[] = await GetData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
      {data.map((post, index) => (
        <Card key={index} className="dark:border-gray-600 border-gray-400 dark:border-primary max-w-[500px] mx-auto">

          <Image src={urlFor(post.titleImage).url()} alt="Title Image" width={500} height={500} className="h-[200px] rounded-t-xl object-cover"/>

          <CardContent className="mt-5 max-w-[500px]">

            <h3 className="text-md font-bold line-clamp-2">{post.title}</h3>

            <p className="mt-2 text-sm font-medium line-clamp-4 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
            
            <Button asChild className="w-full mt-7 bg-gray-400 dark:bg-primary hover:dark:bg-primary/90">
              <Link href={`/blog/${post.currentSlug}`}>Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Home;
