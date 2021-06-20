import { ComponentWrapper } from '../essential/aframe-wrapper';
interface statsSchema {
}
export declare class stats extends ComponentWrapper<statsSchema> {
    constructor();
    init(): void;
    update(): void;
    play(): void;
    pause(): void;
    tick(): void;
    remove(): void;
    destroy(): void;
}
export {};
