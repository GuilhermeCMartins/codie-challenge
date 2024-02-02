import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pokemonName } = req.query;

  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: gql`
        query GetPokemonGeneration($pokemonName: String!) {
          pokemon: pokemon_v2_pokemonspecies(
            where: { name: { _eq: $pokemonName } }
          ) {
            name
            generation: pokemon_v2_generation {
              name
            }
          }
        }
      `,
      variables: { pokemonName },
    });

    res
      .status(200)
      .json(data.pokemon[0].generation.name.replace("generation-", ""));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data pokemons-generation" });
  }
}
