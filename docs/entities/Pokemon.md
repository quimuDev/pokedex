# Pokémon

## Description

Representation of a Pokémon at the application.

## Properties

- id: Unique identifier of the Pokémon.
- number: string,
- name: Name of the Pokémon.
- image: Url of the official artwork image.
- category: "Genus" of the Pokémon.
- description: Description of the Pokémon.
- height: Height of the Pokémon.
- weight: Weight of the Pokémon.
- abilities: Abilities of the Pokémon.
- types: Types of the Pokémon.
- weaknesses: Weaknesses of the Pokémon.
- stats: stats of the Pokémon.

## Pseudocode

```typescript
interface Pokemon {
    id: Uuid;
    number: string;
    name: string;
    image: string;
    category: string;
    description: string;
    height: number;
    weight: number;
    abilities: string;
    types: Type[];
    weaknesses: Type[];
    stats: Stats;
}
```
