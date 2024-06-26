export type Settings = {
    ghost_public_key: string;
    ghost_private_key: string;
    testing: boolean;
};

export interface SettingsCache {
    get<KeyType extends keyof Settings>(key: KeyType): Settings[KeyType];
}
