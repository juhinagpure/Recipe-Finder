import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRecipes = async (query = "") => {
  const response = await apiInstance.get<TRecipesResponse>(
    `/recipes/search?q=${query}`
  );
  return response.data;
};

export const getRecipe = async (id: string) => {
  const response = await apiInstance.get<TRecipe>(`/recipes/${id}`);
  return response.data;
};
