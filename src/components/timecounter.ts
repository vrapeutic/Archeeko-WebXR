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
    let timeleft = parseInt(time, 10);
    var countDown = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(countDown);
      }

      document.getElementById('timer').setAttribute('value', '' + timeleft);
      timeleft--;
      console.log(timeleft);

      if (timeleft == 0) {
        window.location.href = '../dist';
      }
    }, 1000);
  }

  pause() {}

  tick() {
    // this.el.setAttribute("position",document.querySelector("#shooter").getAttribute("position"));
    //this.el.setAttribute("rotation",document.querySelector("#shooter").getAttribute("rotation"));
  }

  remove() {}

  destroy() {}
}

new timecounter().register();
