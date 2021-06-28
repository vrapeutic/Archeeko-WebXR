import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import {convertHMS} from '../index';

interface statsSchema {}

export class stats extends ComponentWrapper<statsSchema> {
  constructor() {
    super('stats-time', {});
  }

  init() {
    
  }
  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new stats().register();

function EndSession( statString: string) {
}

