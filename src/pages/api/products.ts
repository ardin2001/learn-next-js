// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import GetData from "@/utils/getData";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
  data: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await GetData('products');
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: "Success get data products",
    data: data,
  });
}
