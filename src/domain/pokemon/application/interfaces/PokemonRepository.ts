import { Pokemon } from '../../entities/Pokemon';
import { PokemonCriteria } from '../../entities/PokemonCriteria';

export interface PokemonRepository {
    findAll(criteria?: PokemonCriteria): Promise<Pokemon[]>;
}
