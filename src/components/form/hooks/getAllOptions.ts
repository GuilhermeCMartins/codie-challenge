import { useEffect, useState } from "react";

const useApiOptions = (endpoint: string) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(`${endpoint}`);

        const data = await response.json();

        if (data) {
          const mappedOptions = data.map((value: string) => ({
            value,
            label: value,
          }));

          setOptions(mappedOptions);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [endpoint]);

  return { options, loading };
};

export default useApiOptions;
