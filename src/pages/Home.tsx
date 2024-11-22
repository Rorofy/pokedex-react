import { Button, Container, Grid2 } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemonHook";
import { IndexedType } from "../interfaces/pokemon.interface";

const Home = () => {
  const {
    pokemons,
    fetchNextpage,
    hasMorePokemon,
    pokemonTypes,
    selectedType,
    setSelectedType,
    setPokemons,
  } = usePokemons();

  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  };

  return (
    <Container>
      <Grid2 container spacing={2} mt={1}>
        <Grid2
          container
          size={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {pokemonTypes.map((type) => {
            return (
              <Button
                variant="contained"
                sx={{
                  "&.MuiButton-contained": {
                    background: type.color,
                  },
                  m: 1,
                }}
                onClick={() => handleSelectType(type)}
              >
                {type.name}
              </Button>
            );
          })}
          <Button
            variant="contained"
            sx={{ m: 1 }}
            onClick={() => handleSelectType(null)}
          >
            ALL
          </Button>
        </Grid2>
        <Grid2
          container
          size={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <PokemonList pokemons={pokemons}></PokemonList>
          {hasMorePokemon ? (
            <Button
              sx={{ marginTop: "20px" }}
              variant="contained"
              onClick={fetchNextpage}
            >
              Load more Pokemon
            </Button>
          ) : null}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Home;
