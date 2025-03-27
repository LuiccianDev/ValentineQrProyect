# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Overview

This project is a QR code generator built using React, TypeScript, and Vite. It allows users to generate QR codes for various inputs and provides a fast and efficient development experience with Vite's hot module replacement (HMR).

### Project Structure

The project follows a standard Vite + React structure:

```
Valentine-qr/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # Reusable React components
│   ├── styles/      # CSS or SCSS files
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Entry point for the React app
│   └── vite-env.d.ts # TypeScript environment definitions
├── .eslintrc.cjs    # ESLint configuration
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── package.json     # Project dependencies and scripts
```

## Steps to Use the Project

1. **Clone the Repository**  
   Clone the project to your local machine:
   ```bash
   git clone <repository-url>
   cd Valentine-qr
   ```

2. **Install Dependencies**  
   Install the required dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**  
   Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173`.

4. **Build for Production**  
   To create a production build, run:
   ```bash
   npm run build
   # or
   yarn build
   ```
   The build output will be in the `dist/` directory.

5. **Preview the Production Build**  
   To preview the production build locally:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

6. **Lint and Format Code**  
   Use the following commands to lint and format the code:
   ```bash
   npm run lint
   npm run format
   ```

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
