import Container from 'components/Container';
import type { Snippet } from 'contentlayer/generated';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';

export default function SnippetLayout({
  children,
  snippet
}: PropsWithChildren<{ snippet: Snippet }>) {
  return (
    <Container
      title={`${snippet.title} - Code Snippet`}
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <div className="mb-8 flex w-full justify-between">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              {snippet.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {snippet.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={snippet.title}
              height={48}
              width={48}
              src={`/logos/${snippet.logo}`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="prose w-full dark:prose-dark">{children}</div>
      </article>
    </Container>
  );
}
