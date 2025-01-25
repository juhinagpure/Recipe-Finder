import { Loader, MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getRecipes } from "../../api";
import RecipeCard from "../../components/RecipeCard.tsx";

const RecipeList = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const [recipes, setRecipes] = useState<TRecipe[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await getRecipes(q);
        setRecipes(response.recipes);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [q]);

  if (loading)
    return (
      <div className="grid place-items-center">
        <Loader size={40} className="animate-spin" />
      </div>
    );

  if (!recipes.length)
    return (
      <section className="grid py-4">
        <div className="col-span-full mb-4">
          <Link to={`/`} className="flex items-center gap-2">
            <MoveLeft size={16} className="leading-1.5" />
            <span className="text-base">Back to home</span>
          </Link>
        </div>
        <div className="col-span-full italic text-center">No recipes found</div>
      </section>
    );

  return (
    <section className="grid grid-cols-4 gap-4 py-4">
      <div className="col-span-full mb-4">
        <Link to={`/`} className="flex items-center gap-2">
          <MoveLeft size={16} className="leading-1.5" />
          <span className="text-base">Back to home</span>
        </Link>
      </div>
      {recipes.map((recipe) => (
        <Link
          to={`/recipes/${recipe.id}`}
          key={recipe.id}
          className="col-span-4 md:col-span-2 lg:col-span-1"
        >
          <RecipeCard key={recipe.id} {...recipe} />
        </Link>
      ))}
    </section>
  );
};

export default RecipeList;
