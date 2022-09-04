export declare class SStore {
    private domain;
    private custom_domain;
    private use_remote;
    constructor();
    setDomain(str: string): void;
    getDomain(): string;
    setCustom(str: string): void;
    getCustom(): string;
    useRemote(): void;
    useLocal(): void;
    isRomote(): boolean;
    isLocal(): boolean;
}
declare const _default: SStore;
export default _default;
