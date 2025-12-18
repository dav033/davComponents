export declare function createPatch<T extends Record<string, any>>(current: T, updates: Partial<T>, normalizers?: Partial<Record<keyof T, (val: any) => any>>): Partial<T>;
export declare function hasChanges<T>(patch: Partial<T>): boolean;
export declare function trimStringFields<T extends Record<string, any>>(obj: T): T;
export declare function removeNullish<T extends Record<string, any>>(obj: T): Partial<T>;
