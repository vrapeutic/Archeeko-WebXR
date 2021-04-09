import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';

//import type { Body } from 'cannon-es'
//require("../../aframe-physics-system-master/dist/aframe-physics-system");
//let el=this.el;

// Use an origin point behind the head, not at the head, so
// there's a useful vector between the origin and the projectile.
interface enemySchema {
  readonly color: string;
}

export class enemy extends ComponentWrapper<enemySchema> {
  constructor() {
    super('create-enemy', {
     
    });
  }


  init() {

  var ball=this.el;
    ball.setAttribute('aabb-collider', 'objects: #shooter');

    const ballForce = new CANNON.Vec3(0, 0, 1);
  //  ball.setAttribute('dynamic-body', 'mass:0.05');


ball.addEventListener('body-loaded', e => {
//console.log(' shofbody #' +(<any>e).detail.body.el);

setTimeout(() => {
  const newpStart = new CANNON.Vec3(0, 0, 0);
 
  const worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(
    ballForce
  );
  
  (<any>e).detail.body.el.body.applyImpulse(worldVelocity, newpStart);

}, 0);
}); 


  setTimeout(() => {
  document
    .getElementById(this.el.id)
    .parentNode.removeChild(document.getElementById(this.el.id));
}, 5000);


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
