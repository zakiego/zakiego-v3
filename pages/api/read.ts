import getMetaData from 'metadata-scraper';
import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '~/utils/supabaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await fetch('https://v3.zakiego.my.id/api/read').then(
    (resp) => resp.json()
  );

  return res.json({ version: 1, data });
}
