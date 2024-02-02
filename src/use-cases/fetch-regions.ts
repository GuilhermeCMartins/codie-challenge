import {
  ApiService,
  DEFAULT_LIMIT,
  IRegion,
  ApiResponseArray,
  ICity,
} from "../infra/api-service";
import { container } from "../infra/inversify.config";
import extractIdFromUrl from "../utils/extract-id-from-url";
import IUsecase from "./iusecase";
import { injectable } from "inversify";

const URL = `/region`;

@injectable()
export default class FetchRegionsUsecase implements IUsecase<IRegion> {
  constructor(private apiService: ApiService) {}

  async execute(limit?: number): Promise<IRegion[]> {
    const limitOrDefault = limit ?? DEFAULT_LIMIT;

    return this.apiService
      .fetchData<IRegion>(URL, {
        limit: String(limit),
      })
      .then((data) => {
        return (data as ApiResponseArray<IRegion>).results.map((region) => ({
          id: extractIdFromUrl(region.url),
          name: region.name,
          url: region.url,
          locations: [],
        }));
      });
  }

  async executeSingle(id: string, limit?: number): Promise<IRegion> {
    const limitOrDefault = limit ?? DEFAULT_LIMIT;

    return this.apiService
      .fetchData<IRegion>(`${URL}/${id}`, {
        limit: String(limit),
      })
      .then((region) => ({
        id: (region as IRegion).id,
        name: (region as IRegion).name,
        url: (region as IRegion).name,
        locations: (region as IRegion).locations,
      }));
  }
}
