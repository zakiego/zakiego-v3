import getMetaData from 'metadata-scraper';
import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '~/utils/supabaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type Message = {
    id: number;
    link: string;
    date: string;
  };

  const { data, error } = await supabase
    .from<Message>('what_i_read_today')
    .select('id, link, date')
    .order('id', { ascending: false });
  // .limit(5);

  const articles = await Promise.all(
    data.map(async (article) => {
      return {
        ...(await getMetaData(article.link)),
        ...{
          date: new Date(article.date).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          })
        }
      };
    })
  );

  // const fullText = articles.map((article) => {
  //   return {
  //     ...article,
  //     ...{
  //       fullText: `${article.title} ${article.description} ${article.url} ${article.date}`
  //     }
  //   };
  // });

  return res.json(articles);
}
