export type Uuid = string;

const uuidGenerator = () => crypto.randomUUID();

export function generateUuid(): Uuid {
    return uuidGenerator();
}
