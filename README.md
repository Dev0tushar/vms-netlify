# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list






**Datatute frontend work with react and typescript**: -

- **Project UI Development**:
  - Developed the UI using React and TypeScript.
  - Styling was implemented using CSS, Bootstrap Grid, and `react-data-table-component` library for tables.
  - For the report page, charts were created using the `react-chartjs-2` library.

- **Form and Validation**:
  - Implemented forms with proper form validation for all fields.
  - Authentication was provided for login and signup forms using the User API for validation.

- **Live View Page**:
  - Live view blocks were created to display live data from the devices.
  - Devices were added via the Add Device form, and their data was displayed on the live view.
  - A FilterBox was provided for filtering devices by location.

- **Playback Screen**:
  - Implemented the functionality to double-tap a block to expand it to full screen. This was completed successfully.

- **API and Libraries**:
  - Integrated APIs using the `axios` library to interact with backend services.
  - Routing was implemented using `react-router-dom`.
  - Used Context API for state management throughout the project.

- **Error Handling**:
 - Implemented proper error handling for API requests using axios to manage failed requests and display user-friendly error messages.

- **Project Commands**:
  - The project can be run using the command `"npm run dev"` as mentioned in the `package.json` file.
  - To install the `node_modules`, the `"npm i"` command should be run.
  - The project will run on `http://localhost:5173/`.
  - All the libraries used are listed in the `package.json` file.

- **Responsiveness**:
  - The entire frontend is fully responsive.
  - Ensured that the UI is mobile-friendly by using media queries in CSS and leveraging Bootstrap’s grid system for responsiveness.

 - **Component Structure**:
  - The project follows a modular component structure, with each functionality divided into reusable React components.
  - This ensures better maintainability and scalability of the frontend.

