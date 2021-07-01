import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import {convertHMS} from '../index';

interface statsSchema {}

export class stats extends ComponentWrapper<statsSchema> {
  constructor() {
    super('stats-time', {});
  }

  init() {
    let startSession = 0;
    const mysession = setInterval(() => {
      startSession++;
      document
        .getElementById('session')
        .setAttribute('value', startSession.toString());

      const timeTaken = convertHMS(
        document.getElementById('session').getAttribute('value')
      );
    }, 1000);
    mysession;
    if (sessionStorage.getItem('char') == null)
      sessionStorage.setItem('char', 'hus');
    document
      .getElementById('8' + sessionStorage.getItem('char'))
      .addEventListener('sound-ended', () => {
        setTimeout(() => {
          location.reload();
        }, 5000);
      });
    document
      .getElementById('7' + sessionStorage.getItem('char'))
      .addEventListener('sound-ended', () => {
        setTimeout(() => {
          location.reload();
        }, 5000);
      });
  }
  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new stats().register();

function EndSession(statString: string) {}
