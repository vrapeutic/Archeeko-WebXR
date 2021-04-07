import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface visualDistractorMovenmentSchema {
  readonly color: string;
}

export class visualDistractorMovenment extends ComponentWrapper<visualDistractorMovenmentSchema> {
  constructor() {
    super('distractor', {
      color: {
        type: 'string',
        default: 'colorless',
      },
    });
  }

  init() {
    let newpos,
      random = 0;
    const box = document.querySelectorAll('.bTarget'); //Array of targets
    const distractor = this.el;

    const startDsMovement = function cycle() {
      setTimeout(() => {
        random++;

        newpos = box[random].getAttribute('position'); // restor next target for distractor

        distractor.setAttribute(
          'animation',
          'property:position; to:' + newpos.x + ' 1 ' + newpos.z + ' dur:5000'
        );

        if (random >= box.length - 1) {
          random = 0; // Set it back to `0` when it reaches `4`
        }
        cycle();
      }, 2000);
    };

    startDsMovement();
  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new visualDistractorMovenment().register();
