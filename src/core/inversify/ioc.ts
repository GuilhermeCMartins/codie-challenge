import { Container } from "inversify";
import { IProvider, NameProvider } from "./providers";

export const container = new Container({ autoBindInjectable: false });
container.bind<IProvider<string>>("nameProvider").to(NameProvider);
