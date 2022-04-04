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

  const data = dataJSON.rss.channel[0].item.map((obj) => {
    return {
      title: obj.title[0],
      slug: obj.link[0],
      summary: obj.description ? obj.description[0] : '',
      pubDate: obj.pubDate[0]
    };
  });

  return res.json({ data });
  // return res.json({ data })
}
