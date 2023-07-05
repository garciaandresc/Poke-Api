import { useEffect, useState } from "react";

interface Props {
  name: string;
  url: string;
}

export default function PokemonCard(props: Props) {
  const [pokemons, setPokemon] = useState<any>({});
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((response) => {
        setPokemon(response);
      });
  }, [props.url]);
  return (
    <article className="bg-black/10 p-4 flex flex-col justify-center items-center rounded-md hover:bg-orange-200 cursor-pointer">
      <img src={pokemons?.sprites?.front_default} alt={props.name} />
      <h2 className="text-white font-semibold text-lg">{props.name}</h2>
      <div className="rounded-lg border-2 p-1 m-1">
        {pokemons?.types?.type?.name}
      </div>
    </article>
  );
}
