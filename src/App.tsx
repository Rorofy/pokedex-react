import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import PokemonDetail from "./components/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon/:pokemonName",
    element: <PokemonDetail />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
