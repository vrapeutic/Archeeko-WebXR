import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';

//import type { Body } from 'cannon-es'
//require("../../aframe-physics-system-master/dist/aframe-physics-system");

// Use an origin point behind the head, not at the head, so
// there's a useful vector between the origin and the projectile.
interface shootSchema {
  readonly score: number;
}

export class shoot extends ComponentWrapper<shootSchema> {
  constructor() {
    super('push', {});
  }

  init() {
    const soundEls = document.querySelectorAll('[sound]');
    let bulletCounter = parseInt(document
      .querySelector('#bulletCounter')
      .getAttribute('value'),10);
    const randomBulletCounter = document
      .querySelector('#bulletCounter')
      .getAttribute('value');

    const newforce = new CANNON.Vec3(0, 0, 2);
    const bullet = document.getElementById('bullet');

    document.getElementById('onHand').addEventListener('click', () => {
console.log("click");
      const currentBullet = document.createElement('a-gltf-model');
      currentBullet.setAttribute('src', '#bullet1');
      currentBullet.setAttribute('id', 'bullet');
      currentBullet.setAttribute('class', 'bullets');
      currentBullet.setAttribute(
        'animation-mixer',
        'enabled:true;loop:false;repetitions:0;clampWhenFinshed:true'
      );
      currentBullet.setAttribute('aabb-collider', 'objects: .boxs');

      setTimeout(() => {
        currentBullet.setAttribute('dynamic-body', 'mass:0.05');
      }, 2000);

      document.getElementById('shooter').removeAttribute('animation-mixer');

      if (bulletCounter > 0) {
        if (
          document.getElementById('bullet') == null &&
          document.getElementById('enemy') == null
        ) {
          currentBullet.setAttribute('scale','2 2 2');
          document.getElementById('shooter').appendChild(currentBullet);
          sessionStorage.setItem('isCount','false');

          //isCount=false;

          console.log(document.querySelector('#bullet'));
          //document.getElementById('tasktime').setAttribute('value', '0');
          bulletCounter--;
          document
            .querySelector('#bulletCounter')
            .setAttribute('value', bulletCounter.toString());
        }
      } else  {
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
          if (document.getElementById('enemy') != null)
          document
            .getElementById('enemy')
            .parentNode.removeChild(document.getElementById('enemy'));
        document
          .getElementById('shooter')
          .parentNode.removeChild(document.getElementById('shooter'));
      }
      currentBullet.addEventListener('body-loaded', e => {
        ShootArrow(e, newforce, randomBulletCounter, bulletCounter, soundEls);
      });

      setTimeout(() => {
        if (document.getElementById('bullet') != null) {
          document
            .getElementById('bullet')
            .parentNode.removeChild(document.getElementById('bullet'));
        }    

        //document.querySelector('#shooter').removeAttribute('animation-mixer');
      }, 5000);
      document.getElementById('wall').addEventListener('collide', e => {
      });
      document.getElementById('ground').addEventListener('collide', e => {
      });
      currentBullet.addEventListener('hitstart', e => {
        giftHit(e, soundEls);
      });
    });
  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new shoot().register();


function LoadArrow(bullet: any, bulletCounter: any, soundEls: NodeList) {
  return bulletCounter;
}

function giftHit(e: Event, soundEls: NodeList) {
  if (
    (<any>e).target.components['aabb-collider']['intersectedEls'][0]
      .className == 'boxs'
  ) {
    const giftId = document.getElementById(
      (<any>e).target.components['aabb-collider']['intersectedEls'][0].id
    );

    if (giftId != null) {
      const currentPosition = document
        .getElementById(giftId.id)
        .getAttribute('position');
      //console.log(currentPosition);
      document
        .getElementById(giftId.id)
        .setAttribute('dynamic-body', 'mass :0.05');
      document
        .getElementById(giftId.id)
        .setAttribute('score-trigger', 'enabled:true');

        var partical = document.createElement('a-entity');
        partical.setAttribute("gltf-model", "#particals");

        partical.setAttribute("animation-mixer", "enabled:true");
      //partical.setAttribute("position","1 3 1")
      document.getElementById(giftId.id).appendChild(partical);

       sessionStorage.setItem('isCount','true');
      //window.isCount=true;
      console.log(document.getElementById('levelTybe').getAttribute('value'));
      setTimeout(() => {
        soundEls.forEach(soundEl => {
          soundEl['components'].sound.stopSound();
        });
        document
          .getElementById('6' + sessionStorage.getItem('char'))
          .setAttribute(
            'position',
            document
              .getElementById(sessionStorage.getItem('npc'))
              .getAttribute('position')
          );

        document
          .getElementById('6' + sessionStorage.getItem('char'))
          ['components'].sound.playSound();
      }, 200);
      if (document.getElementById('level').getAttribute('value') == '3') {
        const ball = document.createElement('a-gltf-model');
        ball.setAttribute('src', '#ballEnemy');
        ball.setAttribute('id', 'enemy');
        ball.setAttribute('position', currentPosition);
        

        document.getElementById('TheTree').appendChild(ball);
        setTimeout(() => {
          soundEls.forEach(soundEl => {
            soundEl['components'].sound.stopSound();
          });
          document
            .getElementById('9' + sessionStorage.getItem('char'))
            .setAttribute(
              'position',
              document
                .getElementById(sessionStorage.getItem('npc'))
                .getAttribute('position')
            );

          document
            .getElementById('9' + sessionStorage.getItem('char'))
            ['components'].sound.playSound();
        }, 2500);

        ball.setAttribute('create-enemy', 'enabled');

        setTimeout(() => {
          ball.setAttribute('dynamic-body', 'mass:0.05');
          ball.setAttribute('aabb-collider', 'objects:a-box,#CamTrigger');
        }, 5000);
      }
      setTimeout(() => {
        document
          .getElementById(giftId.id)
          .parentNode.removeChild(document.getElementById(giftId.id));
      }, 2000);
    }
  } 
  else if (
    (<any>e).target.components['aabb-collider']['intersectedEls'][1]
      .className == 'boxs'
  ) {
    const giftId = document.getElementById(
      (<any>e).target.components['aabb-collider']['intersectedEls'][1].id
    );

    if (giftId != null) {
      const currentPosition = document
        .getElementById(giftId.id)
        .getAttribute('position');
      //console.log(currentPosition);
      document
        .getElementById(giftId.id)
        .setAttribute('dynamic-body', 'mass :0.05');
      document
        .getElementById(giftId.id)
        .setAttribute('score-trigger', 'enabled:true');

        var partical = document.createElement('a-entity');
        partical.setAttribute("gltf-model", "#particals");

        partical.setAttribute("animation-mixer", "enabled:true");
      //partical.setAttribute("position","1 3 1")
      document.getElementById(giftId.id).appendChild(partical);

       sessionStorage.setItem('isCount','true');
      //window.isCount=true;
      console.log(document.getElementById('levelTybe').getAttribute('value'));
      setTimeout(() => {
        soundEls.forEach(soundEl => {
          soundEl['components'].sound.stopSound();
        });
        document
          .getElementById('6' + sessionStorage.getItem('char'))
          .setAttribute(
            'position',
            document
              .getElementById(sessionStorage.getItem('npc'))
              .getAttribute('position')
          );

        document
          .getElementById('6' + sessionStorage.getItem('char'))
          ['components'].sound.playSound();
      }, 200);
      if (document.getElementById('level').getAttribute('value') == '3') {
        const ball = document.createElement('a-gltf-model');
        ball.setAttribute('src', '#ballEnemy');
        ball.setAttribute('id', 'enemy');
        ball.setAttribute('position', currentPosition);
        

        document.getElementById('TheTree').appendChild(ball);
        setTimeout(() => {
          soundEls.forEach(soundEl => {
            soundEl['components'].sound.stopSound();
          });
          document
            .getElementById('9' + sessionStorage.getItem('char'))
            .setAttribute(
              'position',
              document
                .getElementById(sessionStorage.getItem('npc'))
                .getAttribute('position')
            );

          document
            .getElementById('9' + sessionStorage.getItem('char'))
            ['components'].sound.playSound();
        }, 2500);

        ball.setAttribute('create-enemy', 'enabled');

        setTimeout(() => {
          ball.setAttribute('dynamic-body', 'mass:0.05');
          ball.setAttribute('aabb-collider', 'objects:a-box,#CamTrigger');
        }, 5000);
      }
      setTimeout(() => {
        document
          .getElementById(giftId.id)
          .parentNode.removeChild(document.getElementById(giftId.id));
      }, 2000);
    }
  }
}

function ShootArrow(
  e: Event,
  newforce: CANNON.Vec3,
  randomBulletCounter: any,
  bulletCounter: any,
  soundEls: NodeList
) {
  setTimeout(() => {
    const localForce = new CANNON.Vec3(0, 0, 0);

    const worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(
      newforce
    );
    console.log(randomBulletCounter / 4);
    document
      .querySelector('#shooter')
      .setAttribute(
        'animation-mixer',
        'enabled:true;loop:false;repetitions:0;clampWhenFinshed:true'
      );

    (<any>e).detail.body.el.body.applyImpulse(worldVelocity, localForce);

    if (
      bulletCounter <= 3 ||
      bulletCounter == Math.floor(randomBulletCounter / 2) ||
      bulletCounter == Math.floor(randomBulletCounter / 4)
    ) {
      soundEls.forEach(soundEl => {
        soundEl['components'].sound.stopSound();
      });
      document
        .getElementById('5' + sessionStorage.getItem('char'))
        .setAttribute(
          'position',
          document
            .getElementById(sessionStorage.getItem('npc'))
            .getAttribute('position')
        );

      document
        .getElementById('5' + sessionStorage.getItem('char'))
        ['components'].sound.playSound();
    }
  }, 0);
}
