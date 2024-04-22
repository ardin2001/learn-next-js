// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CreateAccount } from "@/utils/AuthEmailPassword";

export default async function Register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const { status, data } = await CreateAccount(req.body);
    if(status){
        res.status(200).json({
            status,
            statusCode: 200,
            message: "Success create account",
            data: data,
          });
    }
    else{
        res.status(401).json({
            status,
            statusCode: 401,
            message: data,
            data: null,
          });
    }
  } else {
    res.status(401).json({
      status: false,
      statusCode: 401,
      message: "Request auth not found",
      data: false,
    });
  }
}
