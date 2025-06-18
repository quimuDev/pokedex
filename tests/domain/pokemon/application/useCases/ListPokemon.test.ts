import { ListPokemon } from '../../../../../src/domain/pokemon/application/useCases/ListPokemon';
import { Pokemon } from '../../../../../src/domain/pokemon/entities/Pokemon';
import { PokemonRepository } from '../../../../../src/domain/pokemon/application/interfaces/PokemonRepository';

describe('Use Case - ListPokemon', () => {
    test('It should return a list of Pokémon', async () => {
        // Arrange
        const mockPokemonRepository: PokemonRepository = {
            findAll: async (): Promise<Pokemon[]> => [
                {
                    id: '2e0d2f9c-48ab-48fc-9b70-b7e4c42eb982',
                    number: '252',
                    name: 'Treecko',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png',
                    category: 'Wood Gecko',
                    description:
                        'The small hooks on the soles of its feet latch on to walls and ceilings, so it will never fall even while hanging upside down.',
                    height: 1.08,
                    weight: 11.0,
                    abilities: ['overgrow'],
                    types: [
                        {
                            id: '94a3ec32-7fc6-4ef3-9b0e-13d8f4f1bda5',
                            name: 'grass',
                            color: '#77cc55',
                        },
                    ],
                    weaknesses: [
                        {
                            id: 'fa4b58e5-4c1c-4b83-a038-1cd3c649b612',
                            name: 'bug',
                            color: '#aabb23',
                        },
                        {
                            id: '0d6f94b2-6df9-4900-bf12-9f408b1b3462',
                            name: 'fire',
                            color: '#ff4422',
                        },
                        {
                            id: '1f7b948a-67d3-4a6d-b8b0-183bbba55a44',
                            name: 'flying',
                            color: '#8899ff',
                        },
                        {
                            id: 'df4ea38d-5e0f-4ac2-b59e-6f5f7bc0b46f',
                            name: 'ice',
                            color: '#66ccff',
                        },
                        {
                            id: 'cab78d9c-df14-4fd2-953c-ffb4c75cf2b5',
                            name: 'poison',
                            color: '#aa5699',
                        },
                    ],
                    stats: {
                        hp: 45,
                        attack: 60,
                        defense: 40,
                        specialAttack: 70,
                        specialDefense: 50,
                        speed: 45,
                    },
                },
                {
                    id: '2e0d2f9c-48ab-48fc-9b70-b7e4c42eb982',
                    number: '255',
                    name: 'Torchic',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png',
                    category: 'Chick',
                    description:
                        'Torchic feels toasty warm if you hug it. It has a flame sac inside its belly, and the flames burn continuously as long as Torchic has life in it.',
                    height: 1.04,
                    weight: 5.5,
                    abilities: ['blaze'],
                    types: [
                        {
                            id: '0d6f94b2-6df9-4900-bf12-9f408b1b3462',
                            name: 'fire',
                            color: '#ff4422',
                        },
                    ],
                    weaknesses: [
                        {
                            id: '3e5a64c1-4af4-448e-a981-2d978d6cc842',
                            name: 'ground',
                            color: '#cdbb55',
                        },
                        {
                            id: '9b40a89d-755f-4213-9629-c3f5f35e8265',
                            name: 'rock',
                            color: '#bbaa66',
                        },
                        {
                            id: 'fb07f170-1188-47bc-93d0-2679ed785163',
                            name: 'water',
                            color: '#3399fe',
                        },
                    ],
                    stats: {
                        hp: 40,
                        attack: 45,
                        defense: 35,
                        specialAttack: 65,
                        specialDefense: 55,
                        speed: 70,
                    },
                },
            ],
        };
        const useCase = new ListPokemon(mockPokemonRepository);

        // Act
        const result = await useCase.execute();

        // Assert
        expect(result).toHaveLength(2);
    });
});
