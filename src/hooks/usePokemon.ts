import { useEffect, useState } from "react";
import { DetailsPokemon } from "../interfaces/pokemon.interface";
import { POKEMON_API_POKEMON_URL } from "../constants";
import { httpClient } from "../api/httpClient";
import { getColorFromUrl } from "../utils/colors";

interface UsePokemonProps {
  pokemonName: string | undefined;
}

const usePokemon = ({ pokemonName }: UsePokemonProps) => {
  const [pokemon, setPokemon] = useState<DetailsPokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchPokemon();
  }, [pokemonName]);

  useEffect(() => {
    if (pokemon) {
      getPokemonColor();
    }
  }, [pokemon]);

  const getPokemonColor = async () => {
    if (pokemon?.sprites?.other["official-artwork"]?.front_default) {
      const color = await getColorFromUrl(
        pokemon.sprites.other["official-artwork"].front_default
      );
      if (color) {
        setPokemon({ ...pokemon, color });
      }
    }
  };

  const fetchPokemon = async () => {
    if (pokemonName) {
      setIsLoading(true);
      const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;

      const result = await httpClient.get<DetailsPokemon>(url);
      if (result?.data) {
        setPokemon(result.data);
      }
      setIsLoading(false);
    }
  };

  return { pokemon, isLoading };
};

export default usePokemon;
