import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface soundmangerSchema {}

export class soundmanger extends ComponentWrapper<soundmangerSchema> {
  constructor() {
    super('sound-manger', {});
  }
  init() {
    const soundEls = document.querySelectorAll('[sound]');
    soundEls.forEach(soundEl => {
      soundEl['components'].sound.stopSound();
    });
    document
      .getElementById('1' + sessionStorage.getItem('char'))
      .setAttribute(
        'position',
        document
          .getElementById(sessionStorage.getItem('npc'))
          .getAttribute('position')
      );
    document
      .getElementById('1' + sessionStorage.getItem('char'))
      ['components'].sound.playSound();
    document
      .getElementById('1' + sessionStorage.getItem('char'))
      .addEventListener('sound-ended', () => {
        soundEls.forEach(soundEl => {
          soundEl['components'].sound.stopSound();
        });
        document
          .getElementById('2' + sessionStorage.getItem('char'))
          .setAttribute(
            'position',
            document
              .getElementById(sessionStorage.getItem('npc'))
              .getAttribute('position')
          );

        document
          .getElementById('2' + sessionStorage.getItem('char'))
          ['components'].sound.playSound();
      });
    document
      .getElementById('2' + sessionStorage.getItem('char'))
      .addEventListener('sound-ended', () => {
        soundEls.forEach(soundEl => {
          soundEl['components'].sound.stopSound();
        });
        document
          .getElementById('3' + sessionStorage.getItem('char'))
          .setAttribute(
            'position',
            document
              .getElementById(sessionStorage.getItem('npc'))
              .getAttribute('position')
          );

        document
          .getElementById('3' + sessionStorage.getItem('char'))
          ['components'].sound.playSound();
      });
    document
      .getElementById('3' + sessionStorage.getItem('char'))
      .addEventListener('sound-ended', () => {
        soundEls.forEach(soundEl => {
          soundEl['components'].sound.stopSound();
        });
        document
          .getElementById('4' + sessionStorage.getItem('char'))
          .setAttribute(
            'position',
            document
              .getElementById(sessionStorage.getItem('npc'))
              .getAttribute('position')
          );
        document
          .getElementById('4' + sessionStorage.getItem('char'))
          .addEventListener('sound-ended', () => {
            document
              .getElementById('4' + sessionStorage.getItem('char'))
              ['components'].sound.playSound();
          });
        document.querySelector('a-scene').setAttribute('push', 'enable', true);
      });
  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new soundmanger().register();
