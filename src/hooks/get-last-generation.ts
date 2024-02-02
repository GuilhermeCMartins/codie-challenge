import { useEffect, useState } from "react";
import { romanToDecimal } from "../utils/convert-numbers";

interface Pokemon {
  label: string;
  value: string;
}

const useLatestGenerationPokemons = (pokemons: Pokemon[]) => {
  const [latestGeneration, setLatestGeneration] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const generationPromises = pokemons.map(async (poke) => {
          const response = await fetch(
            `/api/poke/pokemon-generation?pokemonName=${poke.label}`
          );

          return romanToDecimal(await response.json());
        });

        const generationResults = await Promise.all(generationPromises);

        const validResults = generationResults.filter(
          (num) => typeof num === "number" && !isNaN(num)
        );

        if (validResults.length > 0) {
          const maxGeneration = Math.max(...validResults);
          return setLatestGeneration(maxGeneration);
        }

        setLatestGeneration(0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokemons]);

  return latestGeneration;
};

export default useLatestGenerationPokemons;
