import { ComponentWrapper } from '../essential/aframe-wrapper';
interface ScoreSchema {
    readonly index: number;
}
export declare class scoretrigger extends ComponentWrapper<ScoreSchema> {
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