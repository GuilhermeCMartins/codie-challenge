import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).send({ status: "god" });
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
