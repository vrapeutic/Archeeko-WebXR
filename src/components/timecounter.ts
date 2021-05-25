import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface timecounterSchema {}

export class timecounter extends ComponentWrapper<timecounter> {
  constructor() {
    super('time-manger', {});
  }

  init() {}

  update() {}

  play() {
    const time = document.getElementById('timer').getAttribute('value');
    document.getElementById('closedtimer').setAttribute('value', time);

    let timeleft = parseInt(time, 10);
    if (timeleft != 0)
      document.getElementById('levelTybe').setAttribute('value', 'closed');

    var countDown = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(countDown);
      }

      document.getElementById('timer').setAttribute('value', '' + timeleft);
      timeleft--;
      console.log(timeleft);

      if (timeleft == 0) {
        const soundEls = document.querySelectorAll('[sound]');

        soundEls.forEach(soundEl => {
          soundEl['components'].sound.stopSound();
        });
        document
          .getElementById('7' + sessionStorage.getItem('char'))
          .setAttribute(
            'position',
            document
              .getElementById(sessionStorage.getItem('npc'))
              .getAttribute('position')
          );

        document
          .getElementById('7' + sessionStorage.getItem('char'))
          ['components'].sound.playSound();
      }
    }, 1000);
  }

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new timecounter().register();
