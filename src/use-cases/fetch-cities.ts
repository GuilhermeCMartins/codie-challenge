import {
  ApiService,
  DEFAULT_LIMIT,
  IPokemon,
  ApiResponseArray,
  ICity,
  IRegion,
} from "../infra/api-service";
import { container } from "../infra/inversify.config";
import extractIdFromUrl from "../utils/extract-id-from-url";
import IUsecase from "./iusecase";
import { injectable } from "inversify";

const URL = `/location`;
const URL_SINGLE = `/region`;

@injectable()
export default class FetchCityUsecase implements IUsecase<ICity> {
  constructor(private apiService: ApiService) {}

  async execute(limit?: number): Promise<ICity[]> {
    const limitOrDefault = limit ?? DEFAULT_LIMIT;

    return this.apiService
      .fetchData<ICity>(URL, {
        limit: String(limit),
      })
      .then((data) => {
        return (data as ApiResponseArray<ICity>).results.map((city) => ({
          id: extractIdFromUrl(city.url),
          name: city.name,
          url: city.url,
        }));
      });
  }

  async executeSingle(
    id: string,
    limit?: number | undefined
  ): Promise<ICity[]> {
    const limitOrDefault = limit ?? DEFAULT_LIMIT;

    return this.apiService
      .fetchData<IRegion>(`${URL_SINGLE}/${id}`, {
        limit: String(limit),
      })
      .then((region) =>
        (region as IRegion).locations.map((city) => ({
          name: city.name,
          id: extractIdFromUrl(city.url),
          url: city.url,
        }))
      );
  }
}
