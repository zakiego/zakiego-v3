import components from 'components/MDXComponents';
import type { Newsletter } from 'contentlayer/generated';
import { allNewsletters } from 'contentlayer/generated';
import NewsletterLayout from 'layouts/newsletter';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function NewsletterPage(newsletter: Newsletter) {
  const Component = useMDXComponent(newsletter.body.code);

  return (
    <NewsletterLayout newsletter={newsletter}>
      <Component components={components as any} />
    </NewsletterLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allNewsletters.map((newsletter) => ({
      params: { slug: newsletter.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const newsletter = allNewsletters.find(
    (newsletter) => newsletter.slug === params.slug
  );

  return { props: newsletter };
}
