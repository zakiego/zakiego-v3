import type { NextApiRequest, NextApiResponse } from 'next';
import { parseString } from 'xml2js';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const source = 'https://blog.zakiego.my.id/feed.xml';
  const dataXML = await fetch(source).then((resp) => resp.text());
  let dataJSON;
  parseString(dataXML, function (err, result) {
    dataJSON = result;
  });

  const result = dataJSON.rss.channel[0].item.map((obj) => {
    return {
      title: obj.title,
      slug: obj.link,
      summary: obj.description || '',
      pubDate: obj.pubDate
    };
  });

  return res.json({ data: result });
}
