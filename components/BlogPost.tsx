import type { Blog } from 'contentlayer/generated';
import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import Link from 'next/link';
import useSWR from 'swr';

export default function BlogPost({
  title,
  summary,
  slug
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
              {title}
            </h4>
            <p className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
}
