import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';
import THREE = require('three');

interface inpsSchema {
  index: number;
  counter: number;
}

export class inpsCounter extends ComponentWrapper<inpsSchema> {
  constructor() {
    super('inps-counter', {
      index: {
        type: 'number',
        default: 0,
      },
      counter: {
        type: 'number',
        default: 0,
      },
    });
  }

  init() {
    const countDown = setInterval(() => {}, 1000);
    countDown;
  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new inpsCounter().register();
