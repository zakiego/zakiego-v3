import ConsCard from 'components/ConsCard';
import ImageWithTheme from 'components/ImageWithTheme';
import Analytics from 'components/metrics/Analytics';
import Gumroad from 'components/metrics/Gumroad';
import Unsplash from 'components/metrics/Unsplash';
import YouTube from 'components/metrics/Youtube';
import ProsCard from 'components/ProsCard';
import Step from 'components/Step';
import Image from 'next/image';
import Link from 'next/link';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
  return (
    <div className="flex rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  Callout,
  Analytics,
  ConsCard,
  Gumroad,
  ProsCard,
  Step,
  Unsplash,
  YouTube
};

export default MDXComponents;
