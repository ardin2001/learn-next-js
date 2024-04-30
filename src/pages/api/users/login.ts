// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { LoginUser } from "@/utils/FetchUsers";
import * as argon2 from "argon2";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
};

export default async function User(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const { status, message, data }: any = await LoginUser("users", req.body);
    if (!status) {
      res.status(401).json({
        status,
        statusCode: 401,
        message: "incorrect username",
      });
    } else {
      const hash = await argon2.verify(data[0].password, req.body.password);
      if (hash) {
        res.status(200).json({
          status,
          statusCode: 200,
          message,
        });
      } else {
        res.status(401).json({
          status,
          statusCode: 401,
          message: "incorrect password",
        });
      }
    }
  }
  res.status(401).json({
    status: false,
    statusCode: 401,
    message: "Invalid request users",
  });
}
