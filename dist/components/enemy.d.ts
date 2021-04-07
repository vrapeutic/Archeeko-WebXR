import { ComponentWrapper } from '../essential/aframe-wrapper';
interface enemySchema {
    readonly color: string;
}
export declare class enemy extends ComponentWrapper<enemySchema> {
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
