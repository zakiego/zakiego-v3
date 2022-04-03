import Image from 'next/image';
import Link from 'next/link';

import BlogPostCard from '../components/BlogPostCard';
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              Lee Robinson
            </h1>
            <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              Director of Developer Relations at{' '}
              <span className="font-semibold">Vercel</span>
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </p>
          </div>
          <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
            <Image
              alt="Lee Robinson"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full grayscale filter"
            />
          </div>
        </div>
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Featured Posts
        </h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <BlogPostCard
            title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Rust Is The Future of JavaScript Infrastructure"
            slug="rust"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Past, Present, and Future of React State Management"
            slug="react-state-management"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
        <Link href="/blog">
          <a className="mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
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
