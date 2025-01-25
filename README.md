# Recipe Finder App

This project is a Recipe Finder application built with React, TypeScript, and Vite. It allows users to search for recipes, view recipe details, and save their favorite recipes.

## Technologies Used

- React
- TypeScript
- Vite
- ESLint

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/juhinagpure/Recipe-Finder.git
   cd recipe-finder-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5174` to see the application running.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for linting errors.

## ESLint Configuration

This project uses ESLint for code linting. The configuration can be expanded to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

  ```js
  export default tseslint.config({
    languageOptions: {
      // other options...
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  });
  ```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
- Optionally add `...tseslint.configs.stylisticTypeChecked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

  ```js
  // eslint.config.js
  import react from "eslint-plugin-react";

  export default tseslint.config({
    // Set the react version
    settings: { react: { version: "18.3" } },
    plugins: {
      // Add the react plugin
      react,
    },
    rules: {
      // other rules...
      // Enable its recommended rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
    },
  });
  ```

## License

This project is licensed under the MIT License.
