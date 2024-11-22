import { Grid2 } from "@mui/material";
import { ListPokemon } from "../interfaces/pokemon.interface";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <Grid2 container spacing={2}>
      {pokemons.length > 0
        ? pokemons.map((p) => {
            return (
              <Grid2 size={4}>
                <PokemonCard key={p.name} pokemon={p} />
              </Grid2>
            );
          })
        : null}
    </Grid2>
  );
};

export default PokemonList;
