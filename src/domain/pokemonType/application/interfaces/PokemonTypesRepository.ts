import { PokemonType } from '../../entities/PokemonType';

export interface PokemonTypesRepository {
    findAll(): Promise<PokemonType[]>;
}
