import { Uuid } from '@/domain/shared/types/Uuid';

export type PokemonType = {
    id: Uuid;
    name: string;
    color: string;
};
