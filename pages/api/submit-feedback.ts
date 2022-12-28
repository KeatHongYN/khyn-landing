/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ApiErrorCode, API_ERROR_CODE_MSG } from "../../config/enum";

type ResponseData = {
    error_code: ApiErrorCode;
    data: any;
    message: string | null;
};

const allowedMethods = ["POST"];

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    try {
        const requestMethod = req.method;
        if (!allowedMethods.includes(requestMethod!)) {
            return res.status(405).send({
                error_code: ApiErrorCode.INVALID_METHOD,
                message: API_ERROR_CODE_MSG[ApiErrorCode.INVALID_METHOD],
                data: null
            });
        }

        return res.status(200).send({
            error_code: ApiErrorCode.SUCCESS,
            message: API_ERROR_CODE_MSG[ApiErrorCode.SUCCESS],
            data: null
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error_code: ApiErrorCode.SERVER_ERROR,
            message: API_ERROR_CODE_MSG[ApiErrorCode.SERVER_ERROR],
            data: null
        });
    }
};

export default handler;
