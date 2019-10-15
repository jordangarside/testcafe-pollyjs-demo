import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_POKEMON = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      number
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      weaknesses
    }
  }
`;

const PokemonDescription: React.FC<{ name: string }> = ({ name }) => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name }
  });
  if (error) {
    throw error;
  }
  if (loading) {
    return null;
  }
  const { pokemon } = data;
  return (
    <div>
      {pokemon.number}
      {pokemon.weaknesses}
    </div>
  );
};

export default PokemonDescription;
