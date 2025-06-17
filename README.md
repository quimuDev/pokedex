# 📕 Pokedex

## 1. 🎯 Objective

The goal of this project is to build a complete National Pokédex using official data from the PokéAPI. Users will be able to browse all Pokémon, search by name, filter by type, and view detailed information for each Pokémon. The application is built with Clean Architecture principles, features a clean and responsive user interface, and supports multiple languages.

## 2. 🎭 Actors

List of user types who interact with the application:

- **User**: A person who browses the Pokédex to explore, search, or filter Pokémon by different criteria. No authentication is required.

## 3. ⚙️ Use Cases

Below are the main use cases identified for the Pokédex application:

- [CF-001 - List Pokémon](./docs/usecases/CF-001.md)
- [CF-002 - Search Pokémon by name](./docs/usecases/CF-002.md)
- [CF-003 - Filter Pokémon by type](./docs/usecases/CF-003.md)
- [CF-004 - View Pokémon details](./docs/usecases/CF-004.md)

## 4. 📏 Scope of the project

Included in this version:

- List all Pokémon (National Dex)
- Search Pokémon by name
- Filter Pokémon by type
- View detailed information of each Pokémon
- Clean Architecture structure
- Responsive UI for mobile and desktop
- Multilanguage support (English and Spanish)

Excluded (for now):

- Team builder
- User authentication or accounts

## 5. 🧩 Domain Entities

- Pokemon: Represents a Pokémon with its attributes.
- Type: Represents a Pokémon type.

## 6. 📐 Conventions

The following conventions are followed throughout the project:

- Language: TypeScript for type safety and maintainability.
- Styling: SCSS with a utility-first approach, applying BEM conventions in complex components.

File Naming:

- Components and pages: PascalCase
- Hooks and functions: camelCase

Project Structure:

- domain for entities and use cases
- app for UI components and pages
- infra for infrastructure concerns like API calls and translations

Code Formatting:

- ESLint and Prettier to ensure consistent and clean code style.

## 7. 🏗️ Architecture and Technologies

Architecture:

- domain: Contains core domain logic, including entities and use cases.
- app: Responsible for the presentation layer — UI components, pages, and layout logic.
- infra: Handles infrastructure concerns such as API calls, data mappers, and translations.

Technologies:

- Next.js: A React-based framework with built-in routing and server-side rendering.
- TypeScript: Adds type safety to make the code easier to understand and maintain.
- SCSS: An extension of CSS with features like nesting, variables, and better style organization.
- i18next: A library for supporting multiple languages (English and Spanish).
- PokéAPI: The official public API used as the Pokémon data source.
