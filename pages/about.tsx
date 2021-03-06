import components from 'components/MDXComponents';
import type { Blog } from 'contentlayer/generated';
import { allOtherPages } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import SimpleLayout from '~/layouts/simple';

export default function About({ post }: { post: Blog }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <SimpleLayout post={post}>
      <Component components={components as any} />
    </SimpleLayout>
  );
}

export async function getStaticProps() {
  const post = allOtherPages.find((page) => page.slug === 'about');

  return { props: { post } };
}
