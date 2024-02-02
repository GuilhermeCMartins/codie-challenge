import formatDataToOptions from "../utils/format-data-to-options";
import { Option } from "../utils/general-interfaces";

const URL = "http://localhost:3000/api";

export async function fetchData(endpoint: string): Promise<Option[]> {
  const response = await fetch(`${URL}${endpoint}`);
  const data = await response.json();

  const formattedOptions = formatDataToOptions(data);
  return formattedOptions;
}
