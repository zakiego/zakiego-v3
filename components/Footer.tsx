import NowPlaying from 'components/NowPlaying';
import Link from 'next/link';

import { siteconfig } from '~/siteconfig';

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
  const { footer } = siteconfig;
  return (
    <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      {/* <NowPlaying /> */}
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          {footer.leftMenu.map((menu) => {
            return (
              <Link href={menu.href} key={menu.display}>
                <a className="text-gray-500 transition hover:text-gray-600">
                  {menu.display}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col space-y-4">
          {footer.centerMenu.map((menu) => {
            return (
              <Link href={menu.href} key={menu.display}>
                <a className="text-gray-500 transition hover:text-gray-600">
                  {menu.display}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col space-y-4">
          {footer.rightMenu.map((menu) => {
            return (
              <Link href={menu.href} key={menu.display}>
                <a className="text-gray-500 transition hover:text-gray-600">
                  {menu.display}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
