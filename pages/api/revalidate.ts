import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path, password } = req.query;

  if (path == undefined || password == undefined) {
    return res.status(401).json({
      message: `Check ur query`
    });
  }

  // Check for secret to confirm this is a valid request
  if (password !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  try {
    await res.unstable_revalidate(`/${path}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
