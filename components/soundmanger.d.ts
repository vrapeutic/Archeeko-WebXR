import { ComponentWrapper } from '../essential/aframe-wrapper';
interface soundmangerSchema {
}
export declare class soundmanger extends ComponentWrapper<soundmangerSchema> {
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
