import Container from 'components/Container';
import type { Blog } from 'contentlayer/generated';
// import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';

// import ViewCounter from '~/components/ViewCounter';
import { siteconfig } from '~/siteconfig';

export default function SimpleLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – ${siteconfig.profile.name}`}
      description={post.summary}
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
              src={siteconfig.profile.avatar}
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {`${siteconfig.profile.name}`}
            </p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
            {post.readingTime.text}
          </p>
        </div>
        <div className="prose mt-4 w-full dark:prose-dark ">{children}</div>
      </article>
    </Container>
  );
}
