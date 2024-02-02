import React, { createContext, useContext, ReactNode, useState } from "react";
import { ScheduleInterface } from "../components/form/utils/types";

interface Pokemon {
  label: string;
  value: string;
  index?: number;
}

interface Error {
  message: string;
}

interface PokemonContextType {
  pokemons: Pokemon[];
  schedule?: ScheduleInterface;
  error?: Error;
  addError: (error: Error) => void;
  addPokemon: (pokemon: Pokemon) => void;
  addSchedule: (schedule: ScheduleInterface) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [schedule, setSchedule] = useState<ScheduleInterface | undefined>(
    undefined
  );
  const [error, setError] = useState<Error>();

  const addPokemon = (pokemon: Pokemon) => {
    setPokemons((prevPokemons) => {
      const existingPokemonIndex = prevPokemons.findIndex(
        (item) => item.index === pokemon.index
      );

      if (existingPokemonIndex === -1) return [...prevPokemons, pokemon];

      return prevPokemons.map((item) =>
        item.index === pokemon.index ? { ...item, label: pokemon.label } : item
      );
    });
  };

  const addSchedule = (schedule: ScheduleInterface) => {
    setSchedule(schedule);
  };

  const addError = (error: Error) => {
    setError(error);
  };

  return (
    <PokemonContext.Provider
      value={{ pokemons, addPokemon, addSchedule, schedule, error, addError }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }

  return context;
};
