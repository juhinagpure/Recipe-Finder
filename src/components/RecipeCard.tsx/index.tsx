import clsx from "clsx";

const RecipeCard = ({
  name,
  image,
  tags,
  className,
}: TRecipe & { className?: string }) => {
  return (
    <div
      className={clsx(
        "bg-card-vertical text-white grid justify-center text-center p-3 py-5",
        className
      )}
    >
      <div className="relative mb-4 grid place-items-center">
        <img
          className="rounded-full shadow-[8px_8px_10px_0px_black]"
          src={image}
          alt={name}
          height={175}
          width={175}
        />
        <img
          className="rounded-full absolute -z-10 blur-[20px] opacity-50"
          src={image}
          alt={name}
          height={175}
          width={175}
        />
      </div>
      <p className="font-medium lowercase text-lg mb-2">{name}</p>
      <div className="flex justify-center gap-2">
        {tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#d9d9d9]/15 px-2 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
