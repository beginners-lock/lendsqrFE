# Lendsqr Frontend Engineer Assessment

Link to Live Preview
[Live Preview of Submission (Chukwu Rophi)](https://rophi-chukwu-lendsqr-fe-test.netlify.app/)

## Project Description

Using React and Sass to replicate a [Figma Design](https://www.figma.com/design/ZKILoCoIoy1IESdBpq3GNC/Lendsqr-Frontend-Engineering-Assessment?node-id=5530-0&node-type=canvas&t=qSXbJG0rT5GTTXwM-0) as part of the requirements of a frontend engineering assessment by Lendsqr.

## How to install Install and Run the Project

- First of all ensure that you have [nodejs](https://nodejs.org/en) installed on your system. You can check this by running `node -v` on your terminal or command prompt. If you don't get any errors you're fine.
- Now pull this project to any folder of your choice using the necessary git commands and run `npm install` to install all the necessary dependencies.
- When that is done run `npm run dev`.

## File Structure

From the project root we have two folders `public` and `/src`.

- The `/public` folder contains all images used and has a '/json' folder which contains the json file with the 500 mock user records used for this project.
- The '/src' folder, further contains 5 folders:
  - The '/utils' folder contains:
    - `contexts.ts` - This file contains and exports all the React Contexts used in this project.
    - `types.ts` - This file contains all the variable (Typescript) type descriptions used in this project.
    - `routes.ts` - This file contains all the routes in the project.
    - `functions.ts` - This file contains all global functions used within the project so that it may be accessed by any component.
  - The `/styles` folder contains all the Sass files for the various pages and components in the project.
  - The `/fonts` folder contains all the external fonts used in this project.
  - The `/pages` folder contains all the pages in this project which are 4 in number: `Signin`, `Users`, `UserDetails`, `Dashboard`
  - The `/components` folder contains all the reusable components in the project



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
