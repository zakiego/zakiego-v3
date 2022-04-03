import components from 'components/MDXComponents';
import Tweet from 'components/Tweet';
import type { Blog } from 'contentlayer/generated';
import { allBlogs } from 'contentlayer/generated';
import BlogLayout from 'layouts/blog';
import { getTweets } from 'lib/twitter';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({ post, tweets }: { post: Blog; tweets: any[] }) {
  const Component = useMDXComponent(post.body.code);
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const tweets = await getTweets(post.tweetIds);

  return { props: { post, tweets } };
}
