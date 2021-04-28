import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';
import THREE = require('three');

//import type { Body } from 'cannon-es'
//require("../../aframe-physics-system-master/dist/aframe-physics-system");

// Use an origin point behind the head, not at the head, so
// there's a useful vector between the origin and the projectile.
interface inpsSchema {
  index: number;
  counter: number;
}

export class inpsCounter extends ComponentWrapper<inpsSchema> {
  constructor() {
    super('inps-counter', {
      index: {
        type: 'number',
        default: 0,
      },
      counter: {
        type: 'number',
        default: 0,
      },
    });
  }

  init() {
    const countDown = setInterval(() => {
      if (this.el.sceneEl.camera) {
        const cam = this.el.sceneEl.camera;
        const frustum = new THREE.Frustum();
        frustum.setFromProjectionMatrix(
          new THREE.Matrix4().multiplyMatrices(
            cam.projectionMatrix,
            cam.matrixWorldInverse
          )
        );
        // var position=document.getElementById("targetone").getAttribute("position")
        const fairyPosition = new THREE.Vector3(-1.78878, 0, -3.6332);

        console.log(this.data.index);

        if (!frustum.containsPoint(fairyPosition)) {
          this.data.index++;
          //inpusCount=0;

          document
            .querySelector('#inps')
            .setAttribute('value', this.data.index);
        }
      }
    }, 1000);
    countDown;
  }

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new inpsCounter().register();
