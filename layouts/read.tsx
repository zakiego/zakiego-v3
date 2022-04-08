import Container from 'components/Container';
// import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import type { ReactNode } from 'react';
import React from 'react';

// import ViewCounter from '~/components/ViewCounter';
import { siteconfig } from '~/siteconfig';

export default function ReadLayout({ children }: { children: ReactNode }) {
  const meta = {
    title: 'What I Read Today',
    summary: ''
  };
  return (
    <Container
      title={`${meta.title} – ${siteconfig.profile.name}`}
      description={meta.summary}
    >
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {meta.title}
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
              {`${siteconfig.profile.name}`}
            </p>
          </div>
        </div>
        <div className="prose mt-4 w-full dark:prose-dark ">{children}</div>
      </article>
    </Container>
  );
}
