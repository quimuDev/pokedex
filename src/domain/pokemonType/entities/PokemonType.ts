import { Uuid } from '@/domain/shared/entities/Uuid';

export type PokemonType = {
    id: Uuid;
    name: string;
    color: string;
};
