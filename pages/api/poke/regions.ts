import type { NextApiRequest, NextApiResponse } from "next";
import FetchRegionsUsecase from "../../../src/use-cases/fetch-regions";
import { container } from "../../../src/infra/inversify.config";

class ApiHandler {
  private useCase: FetchRegionsUsecase;
  constructor() {
    this.useCase = container.get(FetchRegionsUsecase);
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
        .json({ error: "Failed to fetch and process data regions", err });
    }
  }
}

const handler = new ApiHandler();
export default handler.handleRequest.bind(handler);
