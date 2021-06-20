import { ComponentWrapper } from '../essential/aframe-wrapper';
interface visualDistractorMovenmentSchema {
    readonly color: string;
}
export declare class visualDistractorMovenment extends ComponentWrapper<visualDistractorMovenmentSchema> {
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
