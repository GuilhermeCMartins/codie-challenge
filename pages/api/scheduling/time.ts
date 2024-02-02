import type { NextApiRequest, NextApiResponse } from "next";
import { DefaultResponse } from "../../../src/utils/general-interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<DefaultResponse>>
) {
  const response = [
    "10:00:00",
    "10:30:00",
    "11:00:00",
    "11:30:00",
    "13:00:00",
    "13:30:00",
    "14:00:00",
    "14:30:00",
    "15:00:00",
    "15:30:00",
    "16:00:00",
    "16:30:00",
    "17:00:00",
    "17:30:00",
    "18:00:00",
    "18:30:00",
  ].map((item, index) => {
    return { name: item, id: String(index) };
  });
  res.status(200).json(response);
}
