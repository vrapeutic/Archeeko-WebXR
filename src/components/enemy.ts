import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';
import {scoretrigger} from './scoretrigger';
const giftCounter = document.querySelectorAll('.boxs').length;

interface enemySchema {}

export class enemy extends ComponentWrapper<enemySchema> {
  constructor() {
    super('create-enemy', {});
  }

  init() {
    let lives = document.querySelector('#livesCounter').getAttribute('value');
    const count = -1;
    const timer = parseInt(
      document.getElementById('dstime').getAttribute('value'),
      10
    );
    const ball = this.el;
    const angle = document.querySelector('#cam').getAttribute('rotation');
    const y = 0.1 * Math.sin((angle.y * Math.PI) / 180);
    const pos = ball.getAttribute('position');
    //pos.z += x;
   ball.getAttribute('aabb-collider');
    const ballForce = new CANNON.Vec3(0, 0, 1.4);

    // var isCounting=true;
    //pos.z += x;
    //pos.x = y;
    // pos.y = document.querySelector('#cam').getAttribute('position').y;
    setTimeout(() => {
     ball.setAttribute(
      "animation","property:position; to:"+
          y +
          ' ' +(document.querySelector('#cam').getAttribute('position').y+0.8)+
          ' ' +
          pos.z +
          '; dur:4000;'
      );

    }, 1000);

    const applyForceOnEnemy = function (e: Event) {
      setTimeout(() => {
        const LocalForce = new CANNON.Vec3(0, 0, 0);

        const worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(
          ballForce
        );
 
        (<any>e).detail.body.el.body.applyImpulse(worldVelocity, LocalForce);

        //ball.setAttribute("position",camPosition.)
        clearInterval(count);
        if (
          document.querySelector('#livesCounter').getAttribute('value') < '6'
        ) {
          ball.addEventListener('hitstart', e => {
            console.log(lives+'curlives' + (<any>e).target.components["aabb-collider"]["intersectedEls"][0].id);

           
              
              if (
                (<any>e).target.components["aabb-collider"]["intersectedEls"][0].id != 'CamTrigger'
              ) {
                console.log('curlives' + lives);
              } else {
                setTimeout(() => {
                  lives++;
                  document
                    .querySelector('#livesCounter')
                    .setAttribute('value', lives);
                  console.log(
                    lives +
                      'lives: ' 
                  );
                }, 1000);
                document
                  .getElementById(this.el.id)
                  .parentNode.removeChild(document.getElementById(this.el.id));
              }

          });
        }
      }, 0);
    };
    ball.addEventListener('body-loaded', applyForceOnEnemy);

    setTimeout(() => {
      if (
        document.querySelector('#livesCounter').getAttribute('value') >= '3'
      ) {
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
      document
        .getElementById(this.el.id)
        .parentNode.removeChild(document.getElementById(this.el.id));
    }, 8000);
  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new enemy().register();
