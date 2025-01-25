// import { Search } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       navigate(`/recipes?q=${query}`);
//     }
//   };

//   return (
//     <header className=" py-4 flex items-center justify-between text-white ">
//       <Link to="/">
//         <img
//           src="/images/logo.svg"
//           alt="Cook & Eat"
//           className="w-24 md:w-auto"
//         />
//       </Link>

//       <div className="relative">
//         <input
//           type="text"
//           className="w-40 md:w-56 search"
//           placeholder="Search for recipe"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={onKeyDown}
//         />
//         <Search
//           size={20}
//           className="absolute right-3 top-1/2 -translate-y-1/2"
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/recipes?q=${query}`);
    }
  };

  const onSearchClick = () => {
    navigate(`/recipes?q=${query}`);
  };

  return (
    <header className="py-4 flex items-center justify-between text-white">
      <Link to="/">
        <img
          src="/images/logo.svg"
          alt="Cook & Eat"
          className="w-24 md:w-auto"
        />
      </Link>

      <div className="relative">
        <input
          type="text"
          className="w-40 md:w-56 search"
          placeholder="Search for recipe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <Search
          size={20}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={onSearchClick}
        />
      </div>
    </header>
  );
};

export default Header;
