import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';
import {responseTime} from './responseTime';

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
    const time = 0;
    const count = -1;
    let bulletCounter = document
      .querySelector('#bulletCounter')
      .getAttribute('value');
    document.querySelector('#shooter').addEventListener('click', () => {
      const bullet = document.createElement('a-cylinder');
      bullet.setAttribute('scale', {x: 0.9, y: 0.9, z: 0.9});
      bullet.setAttribute('id', 'bullet');
      bullet.setAttribute('class', 'bullets');

      bullet.setAttribute('aabb-collider', 'objects: .boxs');
      const newforce = new CANNON.Vec3(5, 0, 0);
      bullet.setAttribute('dynamic-body', 'mass:0.05');
      if (bulletCounter > 0) {
        if (document.getElementById('bullet') == null) {
          document.getElementById('shooter').appendChild(bullet);
          document.querySelector('#wall').removeAttribute('response-time');
          console.log(document.querySelector('#wall'));
          document.getElementById('tasktime').setAttribute('value', '0');
          bulletCounter--;
          document
            .querySelector('#bulletCounter')
            .setAttribute('value', bulletCounter);
        }
      }
      bullet.addEventListener('body-loaded', e => {
        // console.log('Player has collided with body #' +(<any>e).detail.body.el.id);
        /* console.log((<any>e).detail.body.el.object3D.position.x+"/n"+bullet.object3D.position.x)
     let worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(force);
     console.log((<any>e).detail.body.el.parentElement.id+"my body");
// (<any>e).detail.target.el.getAttribute("dynamic-body").applyImpulse(worldVelocity,local);
       (<any>e).detail.target.el+  // Original entity (playerEl).
    (<any>e).detail.body.el+   // Other entity, which playerEl touched.
      (<any>e).detail.contact+   // Stats about the collision (CANNON.ContactEquation).
     (<any>e).detail.contact.ni // Normal (direction) of the collision (CANNON.Vec3).
  */
        setTimeout(() => {
          const pStart = new CANNON.Vec3(0, 0, 0);
          //  console.log((<any>e).detail.contact.position.x)
          //  pStart.copy((<any>e).detail.contact);
          //   let force = (<any>e).detail.body.el.body.position.vsub(pStart);
          const worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(
            newforce
          );
          (<any>e).detail.body.el.body.applyImpulse(worldVelocity, pStart);
        }, 0);
      });

      setTimeout(() => {
        if (document.getElementById('bullet') != null) {
          document
            .getElementById('bullet')
            .parentNode.removeChild(document.getElementById('bullet'));
          document.querySelector('#wall').removeAttribute('response-time');
          document.getElementById('tasktime').setAttribute('value', '0');
        }
      }, 2000);
      document.getElementById('wall').addEventListener('collide', e => {
        if ((<any>e).detail.body.el.id == 'bullet') {
          console.log('response' + (<any>e).detail.body.el.id);
          //    clearInterval(count);
          // this.data.isCount = false;
          //  this.destroy();
          //delete AFRAME.components['response-time'];
          // isCounting=false;
          // document.querySelector('#shooter').removeAttribute("response-time");
          document
            .querySelector('#wall')
            .setAttribute('response-time', 'enabled:true');

          // console.log(isCounting);
          //delete AFRAME.AComponent['response-time'];
        }
      });

      bullet.addEventListener('hitstart', e => {
        // console.log(' collided with #' +(<any>e).target.components["aabb-collider"]["intersectedEls"][0].id);
        //  var targetElement = (<any>e).target.components["aabb-collider"]["intersectedEls"][0];
        // console.log(targetElement.innerHTML);
        if (
          (<any>e).target.components['aabb-collider']['intersectedEls'][0]
            .className == 'boxs'
        ) {
          const id = document.getElementById(
            (<any>e).target.components['aabb-collider']['intersectedEls'][0].id
          );
          //console.log(":"+id);

          // id.setAttribute("dynamic-body","enabled:false");
          if (id != null) {
            const currentPosition = document
              .getElementById(id.id)
              .getAttribute('position');
            //console.log(currentPosition);
            document
              .getElementById(id.id)
              .setAttribute('dynamic-body', 'mass :0.05');
            document
              .getElementById(id.id)
              .setAttribute('score-trigger', 'enabled:true');

            //this.el.setAttribute("aabb-collider","objects : a-sphere");
            //   document.getElementById("index").setAttribute("position",
            //currentPosition);
            const partical = document.createElement('a-entity');
            partical.setAttribute(
              'spe-particles',
              'texture: ../../images/particles/sparkle.png;color: yellow, red, cyan, black; distribution: sphere; particle-count: 800; '
            );

            partical.setAttribute(
              'spe-particles',
              'randomize-velocity: true;radius: 0.5; velocity-spread: 0.5; drag: 1; max-age: 10;blending: additive;active-multiplier: 1000;  size: 5, 5, 5, 0;'
            );
            //partical.setAttribute("position","1 3 1")
            document.getElementById(id.id).appendChild(partical);
            document
              .querySelector('#wall')
              .setAttribute('response-time', 'enabled:true');
              console.log(document.getElementById("levelTybe").getAttribute('value'));

            if (document.getElementById('level').getAttribute('value') == '3') {
              const ball = document.createElement('a-sphere');
              // ball.setAttribute("geometry","primitive:sphere");
              ball.setAttribute('scale', {x: 0.3, y: 0.3, z: 0.3});
              ball.setAttribute('id', 'enemy');

              ball.setAttribute('position', currentPosition);
              //console.log(ball.getAttribute("position"));

              document.getElementById('TheTree').appendChild(ball);
              ball.setAttribute('create-enemy', 'enabled');

              setTimeout(() => {
                ball.setAttribute('dynamic-body', 'mass:0.05');
                ball.setAttribute('aabb-collider', 'objects:a-box,#CamTrigger');
              }, 5000);
            }
            setTimeout(() => {
              document
                .getElementById(id.id)
                .parentNode.removeChild(document.getElementById(id.id));
            }, 2000);
          }
        } else console.log('goodck');
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
