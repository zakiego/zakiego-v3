import { writeFileSync } from 'fs';
import RSS from 'rss';

import { allBlogs } from '../.contentlayer/generated/index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'M. Zakiyuddin Munziri',
    site_url: 'https://zakiego.my.id',
    feed_url: 'https://zakiego.my.id/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://zakiego.my.id/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
