import Container from 'components/Container';
import type { Blog } from 'contentlayer/generated';
import type { PropsWithChildren } from 'react';

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
        <div className="prose w-full dark:prose-dark">{children}</div>
      </article>
    </Container>
  );
}
