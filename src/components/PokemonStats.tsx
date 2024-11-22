import {
  Card,
  CardContent,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { DetailsPokemon } from "../interfaces/pokemon.interface";

interface PokemonStatsProps {
  pokemon: DetailsPokemon;
}

const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  return (
    <Card>
      <CardContent>
        <Grid2 container justifyContent="center" spacing={2}>
          <Grid2>
            {pokemon ? (
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {pokemon.stats.map((stat) => {
                      return (
                        <TableCell sx={{ textTransform: "capitalize" }}>
                          {stat.stat.name}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pokemon.stats.map((stat) => {
                    return <TableCell>{stat.base_stat}</TableCell>;
                  })}
                </TableBody>
              </Table>
            ) : null}
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default PokemonStats;
