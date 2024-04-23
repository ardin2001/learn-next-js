// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GetDataUserById,PostDataUser,UpdateDataUser,LoginUser } from "@/utils/FetchUsers";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
};

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method == "POST") {
    const { status, message } : any = await LoginUser("users", req.body);
    if (status) {
      res.status(200).json({
        status,
        statusCode: 200,
        message,
      });
    } else {
      res.status(401).json({
        status,
        statusCode: 401,
        message,
      });
    }
  }
  res.status(401).json({
    status :false,
    statusCode: 401,
    message:"Invalid request users",
  });
}
