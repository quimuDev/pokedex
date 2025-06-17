# Pokémon

## Description
Representation of a Pokémon at the application.

## Properties
* id: Identifier of the Pokémon.
* name: Name of the Pokémon.
* image: Url of the official artwork image.
* category: "Genus" of the Pokémon.
* height: Height of the Pokémon.
* weight: Weight of the Pokémon.
* abilities: Abilities of the Pokémon.
* types: Types of the Pokémon.
* weaknesses: Weaknesses of the Pokémon.
* description: Description of the Pokémon.

## Pseudocode
```typescript
type Pokemon {
    id: number,
    name: string,
    image: string,
    category: string,
    height: number,
    weight: number,
    abilities: string,
    types: Type[],
    weaknesses: Type[],
    description: string
}
```