// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GetData,GetDataDetail,UpdateData } from "@/utils/FetchProducts";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method == 'GET'){
    if (req.query.products && req.query.products.length < 2) {
      const {status,data} = await GetDataDetail("products",req.query.products[0]);
      if(status){
        res.status(200).json({
          status,
          statusCode: 200,
          message: "Success get data products",
          data,
        });
      }else{
        res.status(401).json({
          status,
          statusCode: 401,
          message: "Data products with id "+req.query.products[0]+" not found",
          data: null,
        });
      }
    } else {
      const data = await GetData("products");
      res.status(200).json({
        status: true,
        statusCode: 200,
        message: "Success get data products",
        data: data,
      });
    }
  }else if (req.method == 'PUT' && req.query.products){
    try{
      await UpdateData("products",req.query.products[0],req.body);
      res.status(200).json({
        status: true,
        statusCode: 200,
        message: "Success get data products",
        data: true,
      });
    }catch(err){
      await UpdateData("products",req.query.products[0],req.body);
      res.status(401).json({
        status: false,
        statusCode: 401,
        message: "failed to update data products",
        data: false,
      });
    }
  }else{
    res.status(401).json({
      status: false,
      statusCode: 401,
      message: "Request not found",
      data: false,
    });
  }
}
