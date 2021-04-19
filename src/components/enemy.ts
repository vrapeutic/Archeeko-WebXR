import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';
import {scoretrigger} from './scoretrigger';

//import type { Body } from 'cannon-es'
//require("../../aframe-physics-system-master/dist/aframe-physics-system");
//let el=this.el;

// Use an origin point behind the head, not at the head, so
// there's a useful vector between the origin and the projectile.
interface enemySchema {}

export class enemy extends ComponentWrapper<enemySchema> {
  constructor() {
    super('create-enemy', {});
  }

  init() {
    let score = document.querySelector('#counter').getAttribute('value');

    const ball = this.el;
    // ball.setAttribute('aabb-collider', 'objects: #score,a-box;');

    const ballForce = new CANNON.Vec3(0, 0, 1);
    //  ball.setAttribute('dynamic-body', 'mass:0.05');

    ball.addEventListener('body-loaded', e => {
      //console.log(' shofbody #' +(<any>e).detail.body.el);

      setTimeout(() => {
        const newpStart = new CANNON.Vec3(0, 0, 0);

        const worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(
          ballForce
        );
        ball.setAttribute('aabb-collider', 'objects:#CamTrigger');

        (<any>e).detail.body.el.body.applyImpulse(worldVelocity, newpStart);
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
              console.log('curscore' + score);
            } else {
              score++;
              document.querySelector('#counter').setAttribute('value', score);
              console.log(
                score +
                  'score: ' +
                  (<any>e).target.components['aabb-collider'][
                    'intersectedEls'
                  ][0].id
              );
              document
                .getElementById(this.el.id)
                .parentNode.removeChild(document.getElementById(this.el.id));
            }
          } else 'mfesh';
        });
      }, 0);
    });

    setTimeout(() => {}, 8000);
  }

  update() {
    console.log(this.el.id);
  }

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new enemy().register();
