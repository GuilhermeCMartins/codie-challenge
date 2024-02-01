import React from "react";
import { useInjection } from "../provider/inversify-provider";
import { IProvider } from "../core/inversify/providers";

export const Hello: React.FC = () => {
  const provider = useInjection<IProvider<string>>("nameProvider");

  return <h1>Hello {provider.provide()}!</h1>;
};
