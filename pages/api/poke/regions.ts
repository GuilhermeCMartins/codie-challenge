import type { NextApiRequest, NextApiResponse } from "next";

interface RegionResponse {
  name: string;
  url: string;
}

interface ResponsePayload {
  count: number;
  results: RegionResponse[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/region?limit=100000&offset=0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from external API");
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data", err: err });
  }
}
