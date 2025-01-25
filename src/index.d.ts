type TRecipesResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

type TRecipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: IDifficulty;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

type IDifficulty = "Easy" | "Medium";
