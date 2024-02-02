import { Container } from "inversify";
import { ApiService } from "./api-service";
import FetchPokemonsUsecase from "../use-cases/fetch-poke";
import FetchRegionsUsecase from "../use-cases/fetch-regions";
import FetchCityUsecase from "../use-cases/fetch-cities";

const container = new Container();

container.bind<ApiService>(ApiService).toSelf();
container.bind<FetchRegionsUsecase>(FetchRegionsUsecase).toSelf();
container.bind<FetchPokemonsUsecase>(FetchPokemonsUsecase).toSelf();
container.bind<FetchCityUsecase>(FetchCityUsecase).toSelf();

export { container };
