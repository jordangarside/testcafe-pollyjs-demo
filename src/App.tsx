import * as React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import PokemonList from "./components/PokemonList";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PokemonList />
      </div>
    </ApolloProvider>
  );
};

export default App;
