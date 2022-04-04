import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import type { Newsletter } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';

import { siteconfig } from '~/siteconfig';

export default function NewsletterLayout({
  children,
  newsletter
}: PropsWithChildren<{ newsletter: Newsletter }>) {
  return (
    <Container
      title={`${newsletter.title} – ${siteconfig.profile.name}`}
      description={newsletter.summary}
      date={new Date(newsletter.publishedAt).toISOString()}
      type="article"
    >
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {newsletter.title}
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
              {format(parseISO(newsletter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-500 md:mt-0">
            {newsletter.readingTime.text}
          </p>
        </div>
        <div className="prose w-full dark:prose-dark">{children}</div>
        <div className="mt-8">
          <Subscribe />
        </div>
      </article>
    </Container>
  );
}
