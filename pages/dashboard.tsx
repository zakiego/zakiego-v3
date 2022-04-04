import Container from 'components/Container';
import Analytics from 'components/metrics/Analytics';
import GitHub from 'components/metrics/Github';
import Gumroad from 'components/metrics/Gumroad';
import Newsletter from 'components/metrics/Newsletter';
import Unsplash from 'components/metrics/Unsplash';
import YouTube from 'components/metrics/Youtube';
import TopTracks from 'components/TopTracks';
import Link from 'next/link';
import { siteconfig } from '~/siteconfig';

export default function Dashboard() {
  return (
    <Container
      title={`Dashboard – ${siteconfig.profile.name}`}>
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like Unsplash, YouTube, GitHub, and
            more. Want to build your own? Check out my&nbsp;
            <Link href="/blog/fetching-data-with-swr">
              <a className="text-gray-900 underline dark:text-gray-100">
                blog series.
              </a>
            </Link>
          </p>
        </div>
        <div className="flex w-full flex-col">
          <Unsplash />
          <YouTube />
        </div>
        <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <Analytics />
          <GitHub />
        </div>
        <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <Gumroad />
          <Newsletter />
        </div>
        <h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
