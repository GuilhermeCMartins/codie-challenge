import { useEffect, useState } from "react";

interface Info {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  results: Info[];
}

interface Option {
  value: string;
  label: string;
}

const useAllPokeOptions = (endpoint: string) => {
  const [options, setOptions] = useState<Option[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(`${endpoint}`);
        const data: PokemonResponse = await response.json();

        if (data.results) {
          const mappedOptions = data.results.map((opt: Info) => ({
            value: opt.name,
            label: opt.name,
          }));

          setOptions(mappedOptions);
        }
      } catch (error) {
        console.error("Error fetching options:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [endpoint]);

  return { options, loading };
};

export default useAllPokeOptions;
