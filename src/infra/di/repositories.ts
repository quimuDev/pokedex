import { InMemoryPokemonTypesRepository } from '../PokemonTypes/InMemoryPokemonTypesRepository';

export const repositories = {
    pokemonTypes: new InMemoryPokemonTypesRepository(),
}
