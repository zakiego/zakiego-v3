import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import ReadCard from '~/components/ReadCard';
import ReadLayout from '~/layouts/read';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.fullText.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ReadLayout
      title="Blog"
      summary="Menulis untuk meninggalkan jejak. Sampai suatu hari ada yang berkata, Zaki telah mati. Namun tulisannya tetap abadi."
    >
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {`Menulis untuk meninggalkan jejak. Sampai suatu hari ada yang berkata, Zaki telah mati. Namun tulisannya tetap abadi.`}
      </p>
      <div className="relative mb-4 w-full">
        <input
          aria-label="Search posts"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search posts"
          className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 ">
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}

        {filteredBlogPosts.map((post) => (
          // <BlogPost key={post.title} {...post} />
          <ReadCard
            key={post.title}
            title={post.title}
            description={post.summary}
            date={post.pubDate}
            url={post.slug}
            caption={'Ditulis pada '}
          />
        ))}
      </div>
    </ReadLayout>
  );
}

export async function getStaticProps() {
  const posts = (
    await fetch('https://blog-zakiego-xml-to-json.zakiego.workers.dev').then(
      (resp) => resp.json()
    )
  ).data;

  return {
    props: { posts }
  };
}
