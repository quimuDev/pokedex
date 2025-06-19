import { GetPokemonTypes } from '../../../../../src/domain/pokemonType/application/useCases/GetPokemonTypes';
import { InMemoryPokemonTypesRepository } from '../../../../../src/infra/PokemonTypes/InMemoryPokemonTypesRepository';

describe('Use Case - GetPokemonTypes', () => {
    test('It should return a list of Pokémon types', async () => {
        const mockRepository = new InMemoryPokemonTypesRepository();

        const useCase = new GetPokemonTypes(mockRepository);

        const pokemonTypes = await useCase.execute();

        expect(pokemonTypes).toHaveLength(18);
    });
});
