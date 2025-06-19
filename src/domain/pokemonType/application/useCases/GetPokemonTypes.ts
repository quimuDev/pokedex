import { PokemonType } from '../../entities/PokemonType';
import { PokemonTypesRepository } from '../interfaces/PokemonTypesRepository';

export class GetPokemonTypes {
    private readonly repository: PokemonTypesRepository;

    constructor(repository: PokemonTypesRepository) {
        this.repository = repository;
    }

    execute(): Promise<PokemonType[]> {
        return this.repository.findAll();
    }
}
