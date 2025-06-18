import { Uuid } from '@/domain/shared/types/Uuid';

export type PokemonCriteria = {
    name?: string;
    typeId: Uuid;
};
