import { ComponentWrapper } from '../essential/aframe-wrapper';
interface responseTimeSchema {
    isCount: boolean;
}
export declare class responseTime extends ComponentWrapper<responseTimeSchema> {
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
