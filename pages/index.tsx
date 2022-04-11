import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { siteconfig } from '~/siteconfig';

import BlogPostCard from '../components/BlogPostCard';
import Container from '../components/Container';
// import Subscribe from '../components/Subscribe';
// import VideoCard from '../components/VideoCard';

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <Link href="/about" passHref>
              <h1 className="mb-1 cursor-pointer text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                {siteconfig.profile.aka}
              </h1>
            </Link>
            <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              {'// '}
              {siteconfig.profile.name}
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              {siteconfig.profile.shortDescription}{' '}
              <span className="italic">Warga</span> Kalimantan Selatan,
              Indonesia.
            </p>
          </div>
          <div className="relative mb-8 mr-auto w-[140px] sm:mb-0 sm:w-[200px]">
            <Image
              alt={siteconfig.profile.name}
              height={200}
              width={200}
              unoptimized={true}
              src="/avatar.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Featured Posts
        </h3>
        <div className="flex flex-col gap-6 md:flex-row">
          {posts.map((post, id) => {
            return (
              <BlogPostCard
                key={post.title}
                title={post.title}
                slug={post.slug}
                gradient={gradient[id]}
              />
            );
          })}
        </div>
        <Link href="/blog">
          <a className="mt-8 flex h-6 items-center rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="ml-1 h-6 w-6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await fetch(
    'https://blog-zakiego-xml-to-json.zakiego.workers.dev'
  )
    .then((resp) => resp.json())
    .then(({ data }) => data.slice(0, 3));

  return {
    props: { posts }
  };
}

const gradient = [
  'from-[#D8B4FE] to-[#818CF8]',
  'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
  'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'
];
