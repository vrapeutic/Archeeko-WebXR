import { ComponentWrapper } from '../essential/aframe-wrapper';
interface inpsSchema {
    index: number;
    counter: number;
}
export declare class inpsCounter extends ComponentWrapper<inpsSchema> {
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
