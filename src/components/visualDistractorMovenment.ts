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
    let nextPosition,
      randomPosition = 0;
    const box = document.querySelectorAll('.bTarget'); //Array of targets
    const distractor = this.el;

    const startDsMovement = function cycle() {
      setTimeout(() => {
        randomPosition++;

        nextPosition = box[randomPosition].getAttribute('position'); // restor next target for distractor

        distractor.setAttribute(
          'animation',
          'property:position; to:' +
            nextPosition.x +
            ' 3 ' +
            nextPosition.z +
            '; delay:2000;dur:5000'
        );

        if (randomPosition > box.length - 1) {
          randomPosition = 0; // Set it back to `0` when it reaches `4`
        }
        cycle();
      }, 2000);
    };
    if (document.getElementById('level').getAttribute('value') != '1')
      startDsMovement();
    else
      document
        .getElementById('butterflymodel')
        .parentNode.removeChild(document.getElementById('butterflymodel'));
  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new visualDistractorMovenment().register();
