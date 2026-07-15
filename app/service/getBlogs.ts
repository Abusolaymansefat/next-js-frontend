import { revalidateTag } from "next/cache";
import { cacheLife } from "next/cache";

export interface Blog {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const getBlogs = async (): Promise<Blog[]> => {
    'use cache';

    cacheLife("hours"); // 24 hours

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24, // 24 hours
            tags: ["posts"]
        }
    })
    const postData = await posts.json();
    console.log(postData)

    return postData;
}

const renewBlogsCache = () => {
    // revalidateTag("posts", "max" );
    revalidateTag("posts")
}