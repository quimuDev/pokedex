import { PokemonType } from '@/domain/pokemonType/entities/PokemonType';
import { PokemonStats } from '@/domain/shared/types/PokemonStats';
import { Uuid } from '@/domain/shared/types/Uuid';

export type Pokemon = {
    id: Uuid;
    number: string;
    name: string;
    image: string;
    category: string;
    description: string;
    height: number;
    weight: number;
    abilities: string[];
    types: PokemonType[];
    weaknesses: PokemonType[];
    stats: PokemonStats;
};
