import { GetPokemonTypes } from '@/domain/pokemonType/application/useCases/GetPokemonTypes';
import { repositories } from './repositories';

export const useCases = {
    getPokemonTypes: new GetPokemonTypes(repositories.pokemonTypes),
};
