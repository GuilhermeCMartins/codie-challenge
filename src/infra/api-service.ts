import { injectable } from "inversify";

const API_URL = "https://pokeapi.co/api/v2";
export interface ICity {
  name: string;
  url: string;
  id: string;
}

export interface IRegion {
  name: string;
  url: string;
  id: string;
  locations: ICity[];
}

export interface IPokemon {
  name: string;
  id: string;
  url: string;
}

export interface ApiResponseArray<T extends object> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export type ApiResponse<T extends object> = T | ApiResponseArray<T>;

export type IPokemons = IPokemon[];

export const DEFAULT_LIMIT = 20;
export const DEFAULT_OFFSET = 0;

@injectable()
export class ApiService {
  async fetchData<T extends object>(
    url: string,
    params: Record<string, string>
  ): Promise<ApiResponse<T>> {
    const response = await fetch(
      `${API_URL}${url}?${this.buildQueryParams(params)}`,
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

    return response.json();
  }

  private buildQueryParams(params: Record<string, string>): string {
    return Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");
  }
}
