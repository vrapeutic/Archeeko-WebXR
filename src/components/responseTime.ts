import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface responseTimeSchema {
  // isCount: boolean;
}

export class responseTime extends ComponentWrapper<responseTimeSchema> {
  constructor() {
    super('response-time', {});
  }

  init() {}

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new responseTime().register();
