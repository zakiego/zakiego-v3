import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '~/utils/supabaseClient';

export default async function OnlineAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase
    .from('isalive')
    .select()
    .order('device', { ascending: true });

  if (error) return res.json({ error });
  return res.json({ data });
}
