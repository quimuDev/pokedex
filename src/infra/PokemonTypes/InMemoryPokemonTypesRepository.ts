import { PokemonTypesRepository } from '@/domain/pokemonType/application/interfaces/PokemonTypesRepository';
import { PokemonType } from '@/domain/pokemonType/entities/PokemonType';

const DEFAULT_MEMORY: Record<string, PokemonType> = {
    bug: {
        id: 'fa4b58e5-4c1c-4b83-a038-1cd3c649b612',
        name: 'bug',
        color: '#a8b720',
    },
    dark: {
        id: '1fd31054-7a3b-411c-8a7c-d1529d67e2dd',
        name: 'dark',
        color: '#705848',
    },
    dragon: {
        id: '2694e624-0b02-4d54-bbec-5c6ecd4a2929',
        name: 'dragon',
        color: '#7038f8',
    },
    electric: {
        id: '57e3c028-d9db-470d-84b0-d630b0b311fb',
        name: 'electric',
        color: '#f9cf30',
    },
    fairy: {
        id: '39bdc49b-9fc1-4211-a1ee-7fffe808bf2d',
        name: 'fairy',
        color: '#f0b6bc',
    },
    fighting: {
        id: 'b94b11cd-ef2f-44e4-a1ab-f82b730e0687',
        name: 'fighting',
        color: '#c03028',
    },
    fire: {
        id: '0d6f94b2-6df9-4900-bf12-9f408b1b3462',
        name: 'fire',
        color: '#f08030',
    },
    flying: {
        id: '1f7b948a-67d3-4a6d-b8b0-183bbba55a44',
        name: 'flying',
        color: '#a890f0',
    },
    ghost: {
        id: '6741b399-fd19-453b-a631-c48be8c0575d',
        name: 'ghost',
        color: '#705898',
    },
    grass: {
        id: '94a3ec32-7fc6-4ef3-9b0e-13d8f4f1bda5',
        name: 'grass',
        color: '#78c84f',
    },
    ground: {
        id: '3e5a64c1-4af4-448e-a981-2d978d6cc842',
        name: 'ground',
        color: '#e0c068',
    },
    ice: {
        id: 'df4ea38d-5e0f-4ac2-b59e-6f5f7bc0b46f',
        name: 'ice',
        color: '#98d8d8',
    },
    normal: {
        id: '6081b8b8-3caa-4a5d-81fd-588dc61abd45',
        name: 'normal',
        color: '#a8a878',
    },
    poison: {
        id: 'cab78d9c-df14-4fd2-953c-ffb4c75cf2b5',
        name: 'poison',
        color: '#9f40a0',
    },
    psychic: {
        id: 'ad9dee3d-3228-488f-a0f9-78903e7bae57',
        name: 'psychic',
        color: '#f85888',
    },
    rock: {
        id: '9b40a89d-755f-4213-9629-c3f5f35e8265',
        name: 'rock',
        color: '#b8a039',
    },
    steel: {
        id: '52d77358-3c2b-43d6-853c-df4e7e25ee0a',
        name: 'steel',
        color: '#b8b8d0',
    },
    water: {
        id: 'fb07f170-1188-47bc-93d0-2679ed785163',
        name: 'water',
        color: '#6790f0',
    },
};

export class InMemoryPokemonTypesRepository implements PokemonTypesRepository {
    private memory: Record<string, PokemonType>;

    constructor(memory: Record<string, PokemonType> = DEFAULT_MEMORY) {
        this.memory = memory;
    }

    findAll(): Promise<PokemonType[]> {
        return Promise.resolve(Object.values(this.memory));
    }
}
