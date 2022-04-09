import getMetaData from 'metadata-scraper';
import { useState } from 'react';

import ReadCard from '~/components/ReadCard';
import ReadLayout from '~/layouts/read';
import { supabase } from '~/utils/supabaseClient';

export default function About({ articles }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = articles.filter((article) =>
    article.fullText.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ReadLayout>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {`Sejak awal 2022, secara tidak sengaja, saya mulai memiliki kebiasaan untuk membaca artikel`}{' '}
        <a href=" https://open.spotify.com/episode/1RPnod8fSdBcuLi3u7XSt0">
          setiap hari
        </a>
        .{' '}
        {`Tak terasa. Hingga hari ini, ada ${articles.length} artikel yang telah dibaca. Untuk menyimpan bacaan tersebut agar tertata dengan rapi, dibuatlah halaman ini.`}
      </p>
      <div className="relative mb-4 w-full">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
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
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          All Articles
        </h3>
        {filteredBlogPosts.map((article) => {
          return (
            <ReadCard
              key={article.url}
              title={article.title}
              description={article.description}
              date={article.date}
              url={article.url}
            />
          );
        })}
      </div>
    </ReadLayout>
  );
}

export async function getStaticProps() {
  type Message = {
    id: number;
    link: string;
    date: string;
  };

  const { data, error } = await supabase
    .from<Message>('what_i_read_today')
    .select('id, link, date')
    .order('id', { ascending: false });
  // .limit(5);

  const articles = await Promise.all(
    data.map(async (article) => {
      return {
        ...(await getMetaData(article.link)),
        ...{
          date: new Date(article.date).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          })
        }
      };
    })
  );

  const fullText = articles.map((article) => {
    return {
      ...article,
      ...{
        fullText: `${article.title} ${article.description} ${article.url} ${article.date}`
      }
    };
  });

  return { props: { articles: JSON.parse(JSON.stringify(fullText)) } };
}
