import { useState } from 'react';

import ReadCard from '~/components/ReadCard';
import ReadLayout from '~/layouts/read';

export default function Podcast({ data }: { data: any }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = data.filter((post) =>
    post.fullText.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ReadLayout
      title="Podcast"
      summary="Tempat aman bagi seorang introvert untuk belajar berbicara. Mengizinkan diri untuk melakukan kesalahan tanpa ada penghakiman."
    >
      <p className="mb-4 text-gray-600 dark:text-gray-400">{`Tempat aman bagi seorang introvert untuk belajar berbicara.
      Mengizinkan diri untuk melakukan kesalahan tanpa ada penghakiman. Sejauh ini telah ada ${data.length} episode yang dibuat.`}</p>
      <div className="relative mb-4 w-full">
        <input
          aria-label="Search posts"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search podcasts"
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
        {/* <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          All Posts
        </h3> */}

        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No podcasts found.
          </p>
        )}

        {filteredBlogPosts.map((episode) => {
          return (
            <ReadCard
              key={episode.name}
              title={episode.name}
              description={episode.description}
              date={episode.date}
              url={episode.url}
              caption={'Dipublish pada '}
            />
          );
        })}
      </div>
    </ReadLayout>
  );
}

export async function getStaticProps() {
  const { data } = await fetch(
    'https://spotify-prasastipagi-episodes.zakiego.workers.dev/'
  ).then((resp) => resp.json());

  const newData = data.items.map((episode) => {
    const date = new Date(episode.release_date).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return {
      name: episode.name,
      description: episode.description,
      date: date,
      url: episode.external_urls.spotify,
      fullText: `${episode.name} ${episode.description} ${date} `
    };
  });

  return { props: { data: newData } };
}
