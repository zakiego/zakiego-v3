import NowPlaying from 'components/NowPlaying';
import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      {/* <NowPlaying /> */}
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 transition hover:text-gray-600">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 transition hover:text-gray-600">
              About
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 transition hover:text-gray-600">
              Newsletter
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 transition hover:text-gray-600">Uses</a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-500 transition hover:text-gray-600">
              Guestbook
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-500 transition hover:text-gray-600">
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-gray-500 transition hover:text-gray-600">
              Tweets
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
