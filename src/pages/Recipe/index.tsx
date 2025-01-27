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
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative py-4 gap-5">
      <div className="col-span-full">
        <Link to={`/recipes`} className="flex items-center gap-2">
          <MoveLeft size={16} className="leading-1.5" />
          <span className="text-base">Back to recipes</span>
        </Link>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4 m-5 ">
        <h2 className="text-xl md:text-3xl font-bold text-primary">
          {recipe.name}
        </h2>
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
        <div className="grid grid-cols-2  md:grid-cols-3 gap-3 text-sm md:text-base">
          <div>
            <Clock size={14} className="inline-block text-secondary mr-2" />
            {recipe.prepTimeMinutes} min
          </div>
          <div>
            <Utensils size={14} className="inline-block text-secondary mr-2" />
            {recipe.cookTimeMinutes} min
          </div>
          <div>
            <Users size={14} className="inline-block text-secondary mr-2" />
            {recipe.servings}
          </div>
          <div>
            <BarChart size={14} className="inline-block text-secondary mr-2" />
            {recipe.difficulty}
          </div>
          <div>
            <Globe size={14} className="inline-block text-secondary mr-2" />
            {recipe.cuisine}
          </div>
          <div>
            <Flame size={14} className="inline-block text-secondary mr-2" />
            {recipe.caloriesPerServing} cal/serving
          </div>
          <div>
            <HandPlatter
              size={14}
              className="inline-block text-secondary mr-2"
            />
            {recipe.mealType.join(", ")}
          </div>
          <div>
            <Star size={14} className="inline-block text-secondary mr-2" />
            {recipe.rating} ({recipe.reviewCount})
          </div>
        </div>
        <div className="my-4 mt-11">
          <h2 className=" text-lg md:text-3xl font-medium text-primary mb-2">
            Ingredients
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 list-disc">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-sm md:text-base text-white"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-11">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4 ">
            <h2 className="text-lg md:text-3xl font-semibold text-primary mb-4">
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
        </div>
      </div>

      <div className="relative row-start-2 md:col-start-3 lg:col-start-3">
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
