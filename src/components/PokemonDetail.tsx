import { Link, useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Box, Button, Container, Grid2 } from "@mui/material";
import PokemonAvatar from "./PokemonAvatar";
import PokemonBasicInfo from "./PokemonBasicInfo";
import PokemonStats from "./PokemonStats";

const PokemonDetail = () => {
  let { pokemonName } = useParams();

  const { pokemon, isLoading } = usePokemon({ pokemonName });

  return (
    <Container>
      <Grid2
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={2}
      >
        {isLoading ? (
          <Box>Loading...</Box>
        ) : pokemon ? (
          <>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <PokemonAvatar pokemon={pokemon} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <PokemonBasicInfo pokemon={pokemon} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <PokemonStats pokemon={pokemon} />
            </Grid2>
          </>
        ) : (
          <Box>Pokemon not found</Box>
        )}
        <Grid2>
          <Button component={Link} to={"/"} variant="contained">
            Go to Pokemon List
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default PokemonDetail;
