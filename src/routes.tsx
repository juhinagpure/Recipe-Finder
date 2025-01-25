import { RouteProps } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import RecipeList from "./pages/Recipes";

export const ROUTES: RouteProps[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipes",
    element: <RecipeList />,
  },
  {
    path: "/recipes/:id",
    element: <Recipe />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];
