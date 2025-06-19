import { Pokemon } from '../../entities/Pokemon';
import { PokemonCriteria } from '../../entities/PokemonCriteria';
import { PokemonRepository } from '../interfaces/PokemonRepository';

export class ListPokemon {
    private readonly repository: PokemonRepository;

    constructor(repository: PokemonRepository) {
        this.repository = repository;
    }

    execute(criteria?: PokemonCriteria): Promise<Pokemon[]> {
        return this.repository.findAll(criteria);
    }
}
