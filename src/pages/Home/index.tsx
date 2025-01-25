import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard.tsx";
import primaryRecipe from "./primary-recipe.json";
import secondaryRecipe from "./secondary-recipe.json";

const Home = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 items-center text-white py-4">
      <div className="col-span-2 flex flex-col justify-center">
        <p className="text-3xl font-medium mb-10">
          Discover delicious recipes tailored to your taste buds! <br />
          From quick snacks to gourmet meals, <br />
          find inspiration for every occasion.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-x-[18px] gap-y-[22px]">
          <Link to={`/recipes/${primaryRecipe.id}`} className="row-span-2">
            <RecipeCard
              {...(primaryRecipe as TRecipe)}
              className="row-span-2"
            />
          </Link>
          <Link
            to={`/recipes/${secondaryRecipe.id}`}
            className="bg-card-horizontal flex items-center p-3"
          >
            <div className="relative me-4">
              <img
                className="rounded-full shadow-[4px_4px_8px_0px_black]"
                src={secondaryRecipe.image}
                alt={secondaryRecipe.name}
                height={100}
                width={100}
              />
              <img
                className="rounded-full absolute inset-0 -z-10 blur-[20px] opacity-50"
                src={secondaryRecipe.image}
                alt={secondaryRecipe.name}
              />
            </div>

            <div className="flex flex-col">
              <p className="font-medium lowercase text-lg mb-2">
                {secondaryRecipe.name}
              </p>
              <div className="flex gap-2">
                {secondaryRecipe.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#d9d9d9]/15 px-2 py-1 text-xs whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
          <Link
            to="/recipes"
            className="bg-card-horizontal flex items-center gap-4 cursor-pointer p-3"
          >
            <span className="rounded-full bg-[#d9d9d9]/15 size-16 grid place-items-center">
              <MoveRight size={32} />
            </span>
            <span className="text-xl font-medium ">View all recipes</span>
          </Link>
        </div>
      </div>

      <div className="absolute top-0 right-0 bottom-0 -z-10">
        <img
          src="/images/image.png"
          alt="Cook & Eat"
          className="h-full w-auto"
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#000000]/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Home;
