import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import PokemonDescription from "./PokemonDescription";

const GET_POKEMONS = gql`
  query {
    pokemons(first: 10) {
      name
    }
  }
`;

const PokemonList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  if (error) {
    throw error;
  }
  if (loading) {
    return null;
  }
  return (
    <div>
      {data.pokemons.map((pokemon: any) => (
        <div style={{ padding: "10px 0" }}>
          {pokemon.name}
          <div key={`pokemon-${pokemon.name}`}>
            <PokemonDescription name={pokemon.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
