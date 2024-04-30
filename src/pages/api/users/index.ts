// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GetDataUserById,PostDataUser,UpdateDataUser } from "@/utils/FetchUsers";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
  data: any;
};

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method == "POST") {
    req.body.role = "member"
    req.body.email_verified = false
    const { status, data } : any = await PostDataUser("users", req.body,'credentials');
    if (status) {
      res.status(200).json({
        status,
        statusCode: 200,
        message: "Success create data users",
        data:data,
      });
    } else {
      res.status(401).json({
        status,
        statusCode: 401,
        message: "User data is available",
        data: null,
      });
    }
  }
  res.status(401).json({
    status :false,
    statusCode: 401,
    message:"Invalid request users",
    data: null,
  });
}
