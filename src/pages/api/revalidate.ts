// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  revalidated: boolean;
};
export default async function Revalidate(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.token !== '123') {
    return res.status(401).json({ message: "Invalid token" ,revalidated: false});
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate("/products/isr");
    return res.status(401).json({ message: "Successfull revalidated",revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({ message: "Error revalidated" ,revalidated: false});
  }
}
