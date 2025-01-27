import { Loader, MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipe } from "../../api";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<TRecipe | null>(null);
  console.log("🚀 ~ Recipe ~ recipe:", recipe);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async (id: string) => {
      try {
        setLoading(true);
        const response = await getRecipe(id);
        setRecipe(response);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetch(id);
    }
  }, [id]);

  if (loading)
    return (
      <div className="grid place-items-center">
        <Loader size={40} className="animate-spin" />
      </div>
    );

  if (!recipe) return <div className="m-auto italic">Recipe not found</div>;
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 relative py-4 gap-5">
      <div className="col-span-full">
        <Link to={`/recipes`} className="flex items-center gap-2">
          <MoveLeft size={16} className="leading-1.5" />
          <span className="text-base">Back to recipes</span>
        </Link>
      </div>

      <div className="col-span-1 md:col-span-2 space-y-4 m-5">
        <h2 className="text-2xl font-bold text-primary underline decoration-white-500">
          Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
          </div>
          <div>
            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
          </div>
          <div>
            <strong>Servings:</strong> {recipe.servings}
          </div>
          <div>
            <strong>Difficulty:</strong> {recipe.difficulty}
          </div>
          <div>
            <strong>Cuisine:</strong> {recipe.cuisine}
          </div>
          <div>
            <strong>Calories:</strong> {recipe.caloriesPerServing} per serving
          </div>
          <div>
            <strong>Tags:</strong> {recipe.tags.join(", ")}
          </div>
          <div>
            <strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount}{" "}
            reviews)
          </div>
          <div>
            <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 space-y-4 m-5">
        <h2 className="text-2xl font-bold text-primary underline decoration-white-500">
          Ingredients
        </h2>
        <div className="grid grid-cols-2 gap-4 border border-transparent p-4">
          {recipe.ingredients.map((ingredient, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 text-base text-white"
            >
              <input type="radio" name="ingredient" value={ingredient} />
              <span>{ingredient}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 space-y-4 m-5 mt-[-30px]">
        <h2 className="text-2xl font-bold text-primary mb-4 underline decoration-white-500">
          Instructions
        </h2>
        {recipe.instructions.map((instruction, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="text-xl font-bold text-secondary">
              {index + 1}.
            </span>
            <span className="text-base text-white">{instruction}</span>
          </div>
        ))}
      </div>

      <div className="relative row-start-2 md:col-start-3">
        <img
          className="rounded-full shadow-[8px_8px_10px_0px_black]"
          src={recipe.image}
          alt={recipe.image}
          height={400}
          width={400}
        />
        <img
          className="rounded-full absolute inset-0 -z-10 blur-[20px] opacity-50"
          src={recipe.image}
          alt={recipe.image}
          height={400}
          width={400}
        />
      </div>
    </section>
  );
};

export default Recipe;
