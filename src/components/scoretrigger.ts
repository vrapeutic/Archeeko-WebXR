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
    const soundEls = document.querySelectorAll('[sound]');

    setTimeout(() => {
      let score = document.querySelector('#score').getAttribute('value');
      score++;
      // sessionStorage.setItem('isCount', 'true');

      document.querySelector('#score').setAttribute('value', score);
      if (
        document.querySelector('#score').getAttribute('value') >=
        parseInt(sessionStorage.getItem('gift'), 10)
      ) {
        console.log('scoretrigger');
        setTimeout(() => {
          soundEls.forEach(soundEl => {
            soundEl['components'].sound.stopSound();
          });
          document
            .getElementById('8' + sessionStorage.getItem('char'))
            .setAttribute(
              'position',
              document
                .getElementById(sessionStorage.getItem('npc'))
                .getAttribute('position')
            );

          document
            .getElementById('8' + sessionStorage.getItem('char'))
            ['components'].sound.playSound();
          if (document.getElementById('enemy') != null)
            document
              .getElementById('shooter')
              .parentNode.removeChild(document.getElementById('shooter'));
        }, 6000);
      }
    }, 1000);
  }

  update() {
    console.log(this.data.index + this.el.id);
  }

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new scoretrigger().register();
