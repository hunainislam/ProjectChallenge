"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import NextButton from "@/components/NextButton";
import { Search, Calendar, Tag } from "lucide-react";
import BlogHero from "@/components/HeroSectionComponent/BlogHero";

// Interface Blog

interface Blog {
  title: string;
  blogimage: string;
  date: string;
  author: string;
  tag: string;
  excerpt: string;
  buttonText: string;
  recentposts: string;
  categories: string;
}

// Interface RecentPost

interface RecentPosts {
  title1: string;
  recentimage: string;
  recentdate: string;
}

// Interface Categories

interface Categories {
  name: string;
  count: string;
}

export default function Blogs() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [recentPosts, setrecentPosts] = useState<RecentPosts[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);

  // Fetch Blog Data For Sanity

  const fetchProductData = async () => {
    const blogQuery = `*[_type == "blog"] {
        title,
        blogimage,
        date,
        author,
        tag,
        excerpt,
        title1,
        recentimage,
        recentdate,
        name,
        count,
        buttonText,
        recentposts,
        categories,
      }
      `;

    const data = await client.fetch(blogQuery);
    const formattedData = data.map((posts: any) => ({
      title: posts.title,
      blogimage: posts.blogimage ? urlFor(posts.blogimage).url() : "",
      date: posts.date,
      author: posts.author,
      tag: posts.tag,
      excerpt: posts.excerpt,
      buttonText: posts.buttonText,
      recentposts: posts.recentposts,
      categories: posts.categories,
    }));
    setPosts(formattedData);
    const RecentPostData = data.map((recentPosts: any) => ({
      title1: recentPosts.title1,
      recentimage: recentPosts.recentimage
        ? urlFor(recentPosts.recentimage).url()
        : "",
      recentdate: recentPosts.recentdate,
    }));
    setrecentPosts(RecentPostData);
    const CategoriesData = data.map((categories: any, index: number) => ({
      name: categories.name,
      count: categories.count,
    }));
    setCategories(CategoriesData);
  };

  fetchProductData();

  return (
    <div className="container mx-auto px-4 lg:px-1 py-12 overflow-hidden">
      <BlogHero />
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Blog Posts Section */}

        <div className="lg:col-span-3 space-y-12">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <Image
                src={post.blogimage}
                alt={post.title}
                width={600}
                height={250}
                className="w-[90%] object-cover"
              />

              <div className="flex items-center text-sm text-gray-500 mt-3 pl-5">
                <Calendar className="mr-2 w-4 h-4" />
                {post.date}
                <Tag className="ml-4 mr-2 w-4 h-4" />
                {post.tag}
              </div>
              <div className="p-3">
                <h2 className="text-2xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="mt-4 text-gray-600 w-[90%] overflow-hidden">
                  {post.excerpt}
                </p>
                <button className="mt-4 text-black font-regular underline text-sm">
                  {/* Read More */}

                  {post.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}

        <aside className="lg:col-span-1 space-y-8">
          {/* Search Section */}

          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute top-2.5 right-3 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Categories Section */}

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {posts.length > 0 && posts[0].categories}
            </h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  <span>{category.name}</span>
                  <span className="text-gray-400">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              {posts.length > 0 && posts[0].recentposts}
            </h3>
            <ul className="space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Image
                    src={post.recentimage}
                    alt={post.title1}
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-gray-800 font-medium text-sm hover:text-blue-500 cursor-pointer">
                      {post.title1}
                    </h4>
                    <p className="text-gray-400 text-xs">{post.recentdate}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <NextButton />
    </div>
  );
}