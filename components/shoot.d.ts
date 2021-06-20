import { ComponentWrapper } from '../essential/aframe-wrapper';
interface shootSchema {
    readonly score: number;
}
export declare class shoot extends ComponentWrapper<shootSchema> {
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
