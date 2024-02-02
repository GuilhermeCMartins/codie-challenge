interface Option {
  label: string;
  value: string;
}

interface OptionObject {
  name: string;
  id: string;
}

export default function formatDataToOptions(
  options: OptionObject[] | OptionObject
): Option[] {
  if (!options) return [];

  if (!Array.isArray(options))
    return [
      {
        label: options.name,
        value: options.id,
      },
    ];

  return options.map((item) => {
    return { label: item.name, value: item.id };
  });
}
