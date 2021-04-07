import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';
import {Sphere} from 'shapes/Sphere';
import {Box} from 'shapes/Box';
import {Vec3} from 'math/Vec3';
import type {Scene, Color} from 'three';
import {Body, BODY_TYPES} from 'objects/Body';
import {components} from 'aframe';
//import type { Body } from 'cannon-es'
//require("../../aframe-physics-system-master/dist/aframe-physics-system");
//let el=this.el;

// Use an origin point behind the head, not at the head, so
// there's a useful vector between the origin and the projectile.
const attachment = document.querySelector('#attachment');
interface enemySchema {
  readonly color: string;
}

export class enemy extends ComponentWrapper<enemySchema> {
  constructor() {
    super('create-enemy', {
     
    });
  }


  init() {
    console.log(this.el.id);


  var el=this.el;
    console.log(el.id);
   
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
