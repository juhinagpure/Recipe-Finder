import {
  BarChart,
  Clock,
  Flame,
  Globe,
  HandPlatter,
  Loader,
  MoveLeft,
  Star,
  Users,
  Utensils,
} from "lucide-react";
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

      <div className="col-span-1 md:col-span-2 space-y-4 m-5 mt-28">
        <h2 className="text-2xl font-bold text-primary underline decoration-white-500">
          Details
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Clock className="inline-block text-secondary" />
            {recipe.prepTimeMinutes} min
          </div>
          <div>
            <Utensils className="inline-block text-secondary" />
            {recipe.cookTimeMinutes} min
          </div>
          <div>
            <Users className="inline-block text-secondary" />
            {recipe.servings}
          </div>
          <div>
            <BarChart className="inline-block text-secondary" />
            {recipe.difficulty}
          </div>
          <div>
            <Globe className="inline-block text-secondary" />
            {recipe.cuisine}
          </div>
          <div>
            <Flame className="inline-block text-secondary" />
            {recipe.caloriesPerServing} cal/serving
          </div>
          <div>
            <HandPlatter className="inline-block text-secondary" />
            {recipe.mealType.join(", ")}
          </div>
          <div>
            <Star className="inline-block text-secondary" />
            {recipe.rating} ({recipe.reviewCount})
          </div>
        </div>
        <div className="mt-11">
          <h3 className="text-xl font-bold text-primary">Tags</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {recipe.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-transparent text-secondary border border-secondary rounded-lg"
              >
                {tag}
              </span>
            ))}
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

      <div className="col-span-1 md:col-span-2 space-y-4 m-5 ">
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
