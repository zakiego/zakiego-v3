import type { Newsletter } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function NewsletterLink({
  slug,
  publishedAt
}: Pick<Newsletter, 'publishedAt' | 'slug'>) {
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>
        <a>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</a>
      </Link>
    </li>
  );
}
