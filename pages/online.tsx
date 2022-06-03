/* eslint-disable react-hooks/rules-of-hooks */
import components from 'components/MDXComponents';
import type { Blog } from 'contentlayer/generated';
import { allOtherPages } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import SimpleLayout from '~/layouts/simple';
import fetcher from '~/lib/fetcher';

export default function Online({ post }: { post: Blog }) {
  const Component = useMDXComponent(post.body.code);
  const { data, error } = useSWR<Data>('/api/online', fetcher, {
    refreshInterval: 1000 * 30
  });

  return (
    <SimpleLayout post={post}>
      <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Status
      </h3>
      <RenderOnline data={data} error={error} />
      <div className="mb-6" />
      <Component components={components as unknown} />
    </SimpleLayout>
  );
}

const MINUTE_MS = 1000;

function RenderOnline({ data, error }: { data: Data; error: boolean }) {
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const [now, setNow] = useState(new Date());

  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, MINUTE_MS);
  }, []);

  return (
    <div className="w-2xl space-y-4">
      {data.data.map((item) => {
        const date = new Date(Date.parse(item.updated_at));
        const dif = Math.round((utc.getTime() - date.getTime()) / 1000);

        return (
          <div
            key={item.device}
            className="border-grey-200 w-full rounded-xl border bg-white p-4 no-underline transition-colors ease-in-out  dark:border-gray-800 dark:bg-gray-900 "
          >
            <div className="text-xl font-semibold capitalize opacity-95">
              {item.device.replace('-', ' ')}
            </div>
            <div className="mt-3">
              <Status second={dif} />
            </div>
            <div className="mdtext-sm mt-0.5 text-xs italic opacity-60">
              Terakhir dilihat {secormin(dif)}
            </div>
            <div className="mt-4 text-sm opacity-90">
              Aplikasi yang berjalan:
            </div>
            <div>
              {splitter(item.status).map((item, id) => {
                return (
                  <li className="text-xs opacity-75 md:text-sm" key={id}>
                    {item.trim()}
                  </li>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function splitter(description: string) {
  const isIncludeSeparator = description.includes(';');
  if (isIncludeSeparator) {
    return description.split(';');
  }

  return [description];
}

function Status({ second }: { second: number }) {
  if (second < 300) {
    return (
      <div className="flex items-center space-x-1 md:space-x-2">
        <div className="rounded-full bg-gray-200 ">
          <div className="m-[1px] h-2 w-2 rounded-full bg-green-400 md:h-3 md:w-3" />
        </div>
        <div className="text-sm font-medium  opacity-90  md:text-base">
          Online
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      <div className="flex items-center justify-center rounded-full bg-gray-200">
        <div className="m-[1px]  h-2 w-2 rounded-full bg-gray-700 md:h-3 md:w-3" />
      </div>
      <div className="text-sm font-medium opacity-70 md:text-base">Offline</div>
    </div>
  );
}

function secormin(second: number) {
  if (second < 60) {
    return second + ' detik yang lalu';
  }

  if (second < 3600) {
    return Math.round(second / 60) + ' menit yang lalu';
  }

  if (second < 86400) {
    return Math.round(second / 60 / 60) + ' jam yang lalu';
  }

  return Math.round(second / 60 / 60 / 24) + ' hari yang lalu';
}

interface Data {
  data: Isalive[];
}

interface Isalive {
  device: string;
  status: string;
  updated_at: string;
}

export async function getStaticProps() {
  const post = allOtherPages.find((page) => page.slug === 'online');

  return { props: { post } };
}
