import { NextApiRequest, NextApiResponse } from "next";

async function handleRevalidate(req: NextApiRequest, res: NextApiResponse) {
  const event = req.body;
  if (event.model === 'product') {
    const id = event.entry.id;
    await Promise.all([
      res.revalidate('/'),
      res.revalidate(`/products/${id}`),
    ])
  }
  console.log('api/revalidate received:', req.body,)
  res.status(204).end
}

export default handleRevalidate