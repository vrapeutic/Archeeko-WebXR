import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface ScoreSchema {
  readonly index: number;
}

export class scoretrigger extends ComponentWrapper<ScoreSchema> {
  constructor() {
    super('score-trigger', {
      index: {
        type: 'number',
        default: 0,
      },
    });
  }

  init() {
    setTimeout(() => {
      let score = document.querySelector('#score').getAttribute('value');
      score++;
      document.querySelector('#score').setAttribute('value', score);
    }, 1000);
  }

  update() {
    console.log(this.data.index + this.el.id);
  }

  play() {}

  pause() {}

  tick() {
    // this.el.setAttribute("position",document.querySelector("#shooter").getAttribute("position"));
    //this.el.setAttribute("rotation",document.querySelector("#shooter").getAttribute("rotation"));
  }

  remove() {}

  destroy() {}
}

new scoretrigger().register();
