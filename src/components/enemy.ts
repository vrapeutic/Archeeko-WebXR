import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';
import {scoretrigger} from './scoretrigger';
  const giftCounter=document.querySelectorAll('.boxs').length ;

interface enemySchema {}

export class enemy extends ComponentWrapper<enemySchema> {
  constructor() {
    super('create-enemy', {});
  }

  init() {
    let lives = document.querySelector('#livesCounter').getAttribute('value');
    let count = -1;
    let timer = parseInt(
      document.getElementById('dstime').getAttribute('value'),
      10
    );
    const ball = this.el;

    // var isCounting=true;
    const ballForce = new CANNON.Vec3(0, 0, 0.5);

    const applyForceOnEnemy = function (e: Event) {
      setTimeout(() => {
        const LocalForce = new CANNON.Vec3(0, 0, 0);

        const worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(
          ballForce
        );
        ball.setAttribute('aabb-collider', 'objects:#CamTrigger');

        (<any>e).detail.body.el.body.applyImpulse(worldVelocity, LocalForce);
        clearInterval(count);
        if (
          document.querySelector('#livesCounter').getAttribute('value') < '2'
        ) {
          ball.addEventListener('collide', e => {
            if (
              (<any>e).target.components['aabb-collider']['intersectedEls'] !=
              null
            ) {
              console.log(
                (<any>e).target.components['aabb-collider']['intersectedEls']
              );
              if (
                (<any>e).target.components['aabb-collider']['intersectedEls'][0]
                  .id != 'CamTrigger'
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
                    'lives: ' +
                    (<any>e).target.components['aabb-collider'][
                      'intersectedEls'
                    ][0].id
                );
  }, 1000);
                document
                  .getElementById(this.el.id)
                  .parentNode.removeChild(document.getElementById(this.el.id));
              }
            
            }
          });
        }
      }, 0);
    };
    ball.addEventListener('body-loaded', applyForceOnEnemy);
 
    setTimeout(() => { 
        if( document.querySelector('#livesCounter').getAttribute('value')>=3){
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