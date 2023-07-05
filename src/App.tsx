import { useEffect, useState } from "react";
import PokemonCard from "./Components/pokemonCard";

function App() {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=21")
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.results);
      });
  }, []);

  return (
    <main className="w-screen min-h-screen bg-gradient-to-r from-orange-200 to-red-600 flex flex-col gap-10 p-10">
      <header className="w-screen flex justify-center pt-10">
        <div className="flex flex-col justify-center text-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="pokeapi"
          />
          <h1 className="text-lg font-semibold p-4">Pokémon</h1>
        </div>
      </header>
      <section className="grid grid-cols-7 gap-4">
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.url}
              name={pokemon.name}
              url={pokemon.url}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
