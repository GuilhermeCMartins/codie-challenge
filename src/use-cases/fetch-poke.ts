import {
  ApiService,
  DEFAULT_LIMIT,
  IPokemon,
  ApiResponseArray,
} from "../infra/api-service";
import { container } from "../infra/inversify.config";
import extractIdFromUrl from "../utils/extract-id-from-url";
import IUsecase from "./iusecase";
import { injectable } from "inversify";

const URL = `/pokemon`;

@injectable()
export default class FetchPokemonsUsecase implements IUsecase<IPokemon> {
  constructor(private apiService: ApiService) {}

  async execute(limit?: number): Promise<IPokemon[]> {
    const limitOrDefault = limit ?? DEFAULT_LIMIT;

    return this.apiService
      .fetchData<IPokemon>(URL, {
        limit: String(limit),
      })
      .then((data) => {
        return (data as ApiResponseArray<IPokemon>).results.map((pokemon) => ({
          id: extractIdFromUrl(pokemon.url),
          name: pokemon.name,
          url: pokemon.url,
        }));
      });
  }

  async executeSingle(
    id: string,
    limit?: number | undefined
  ): Promise<IPokemon> {
    const limitOrDefault = limit ?? DEFAULT_LIMIT;

    return this.apiService
      .fetchData<IPokemon>(`${URL}/${id}`, {
        limit: String(limit),
      })
      .then((poke) => ({
        id: (poke as IPokemon).id,
        name: (poke as IPokemon).name,
        url: (poke as IPokemon).name,
      }));
  }
}
