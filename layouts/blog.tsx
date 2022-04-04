import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import ViewCounter from 'components/ViewCounter';
import type { Blog } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';

import { siteconfig } from '~/siteconfig';

const editUrl = (slug) =>
  `https://github.com/leerob/leerob.io/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – ${siteconfig.profile.name}`}
      description={post.summary}
      image={`https://leerob.io${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt={siteconfig.profile.name}
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {`${siteconfig.profile.name} / `}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
            {post.readingTime.text}
            {` • `}
            <ViewCounter slug={post.slug} />
          </p>
        </div>
        <div className="prose mt-4 w-full max-w-none dark:prose-dark">
          {children}
        </div>
        {/* <div className="mt-8">
          <Subscribe />
        </div> */}
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}
