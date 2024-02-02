import type { NextApiRequest, NextApiResponse } from "next";

interface DefaultResponse {
  message?: string;
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DefaultResponse>
) {
  const { method } = req;

  const isSuccessful = Math.random() < 0.5;

  if (method === "POST") {
    if (isSuccessful) {
      res.status(201).json({ message: "Agendamento criado com sucesso!" });
    } else {
      res
        .status(400)
        .json({ message: "Erro ao criar agendamento. Tente mais tarde!" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
