import { Card, CardContent, Grid2, Typography } from "@mui/material";
import { DetailsPokemon } from "../interfaces/pokemon.interface";
import { ThreeP } from "@mui/icons-material";

interface PokemonBasicInfoProps {
  pokemon: DetailsPokemon;
}

const PokemonBasicInfo = ({ pokemon }: PokemonBasicInfoProps) => {
  return (
    <Card>
      <CardContent>
        <Grid2
          container
          sx={{ textTransform: "capitalize" }}
          justifyContent="center"
          textAlign={"center"}
          spacing={2}
        >
          <Grid2 size={6}>
            <Typography variant="subtitle2">Height</Typography>
            <Typography variant="body2">{pokemon.height}</Typography>
          </Grid2>
          <Grid2 size={6}>
            <Typography variant="subtitle2">Weight</Typography>
            <Typography variant="body2">{pokemon.weight}</Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="subtitle2">Types</Typography>
            <Typography variant="body2">
              {pokemon.types.map((t) => {
                return <Typography>{t.type.name}</Typography>;
              })}
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="subtitle2">Abilities</Typography>
            <Typography variant="body2">
              {pokemon.abilities.map((a) => {
                return <Typography>{a.ability.name}</Typography>;
              })}
            </Typography>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default PokemonBasicInfo;
