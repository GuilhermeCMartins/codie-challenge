import type { NextApiRequest, NextApiResponse } from "next";
import { inject } from "inversify";
import FetchPokemonsUsecase from "../../../src/use-cases/fetch-poke";
import { container } from "../../../src/infra/inversify.config";

class ApiHandler {
  private useCase: FetchPokemonsUsecase;
  constructor() {
    this.useCase = container.get(FetchPokemonsUsecase);
  }

  async handleRequest(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    try {
      const { id } = req.query;

      if (!id) {
        const data = await this.useCase.execute();
        res.status(200).json(data);
        return;
      }

      const data = await this.useCase.executeSingle(id as string);

      res.status(200).json(data);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to fetch and process data pokemons", err });
    }
  }
}

const handler = new ApiHandler();
export default handler.handleRequest.bind(handler);
