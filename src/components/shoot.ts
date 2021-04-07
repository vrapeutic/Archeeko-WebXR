import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import * as CANNON from 'cannon-es';
import {Sphere} from 'shapes/Sphere';
import {Box} from 'shapes/Box';
import {Vec3} from 'math/Vec3';
import type {Scene, Color} from 'three';
import {components} from 'aframe';
//import type { Body } from 'cannon-es'
//require("../../aframe-physics-system-master/dist/aframe-physics-system");
const scene = document.querySelector('a-scene');
const camera = document.querySelector('[camera]');

// Use an origin point behind the head, not at the head, so
// there's a useful vector between the origin and the projectile.
const attachment = document.querySelector('#attachment');
interface shootSchema {
}

export class shoot extends ComponentWrapper<shootSchema> {
  constructor() {
    super('push', {
      body: {
        default: new CANNON.Body(),
      },
    });
  }

 

  init() {
    document.querySelector('#shooter').addEventListener('click', () => {
      
      const bullet = document.createElement('a-cylinder');
      bullet.setAttribute('scale', {x: 0.9, y: 0.9, z: 0.9});
      bullet.setAttribute('id', 'bullet');
      bullet.setAttribute('class', 'bullets');

      bullet.setAttribute('aabb-collider', 'objects: .boxs');

      
      const newforce = new CANNON.Vec3(2, 0, 0);
      bullet.setAttribute('dynamic-body', 'mass:0.05');
      document.getElementById('shooter').appendChild(bullet);
      const shooter = this.el;
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
          const worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(newforce);
          (<any>e).detail.body.el.body.applyImpulse(worldVelocity, pStart)
        }, 0);
      });
      setTimeout(() => {
        document
          .getElementById('bullet')
          .parentNode.removeChild(document.getElementById('bullet'));
      }, 3000);

      bullet.addEventListener('hitstart', function (e)
    {
      console.log(' collided with #' +(<any>e).target.components["aabb-collider"]["intersectedEls"][0].id);
      var targetElement = (<any>e).target.components["aabb-collider"]["intersectedEls"][0];
      console.log(targetElement.innerHTML);
      if((<any>e).target.components["aabb-collider"]["intersectedEls"][0].className=="boxs"){
        var id = document.getElementById(
          (<any>e).target.components["aabb-collider"]["intersectedEls"][0].id
          );
          console.log(":"+id);

        // id.setAttribute("dynamic-body","enabled:false");

          var currentPosition=document.getElementById(id.id).getAttribute("position");
          console.log(currentPosition);
          document.getElementById(id.id).setAttribute("dynamic-body","mass :0.05");
         //this.el.setAttribute("aabb-collider","objects : a-sphere");
        document.getElementById("index").setAttribute("position",
   document.getElementById(id.id).getAttribute("position"));
        var partical=document.createElement('a-entity');
          partical.setAttribute("spe-particles","texture: ../../images/particles/sparkle.png;color: yellow, red, cyan, black; distribution: sphere; particle-count: 800; ")

          partical.setAttribute("spe-particles","randomize-velocity: true;radius: 0.5; velocity-spread: 0.5; drag: 1; max-age: 10;blending: additive;active-multiplier: 1000;  size: 5, 5, 5, 0;")
          //partical.setAttribute("position","1 3 1")
        document.getElementById(id.id).appendChild(partical);

          var ball=document.createElement('a-sphere');
          ball.setAttribute("scale",{x:.3,y:.3,z:.3})
          ball.setAttribute("id","enemy");

          ball.setAttribute("position",
         currentPosition);
         ball.setAttribute('create-enemy',"enabled");
         console.log(ball.getAttribute("position"));
         ball.setAttribute('aabb-collider', 'objects: #shooter');

         setTimeout(() => {


           document.getElementById(id.id).parentNode.removeChild(document.getElementById(id.id));

         }, 3000);
}
 const ballForce = new CANNON.Vec3(0, 0, 1);
      ball.setAttribute('dynamic-body', 'mass:0.05');

           document.getElementById("TheTree").appendChild(ball);
 
console.log("Shof");
 ball.addEventListener('body-loaded', e => {
  console.log(' shofbody #' +(<any>e).detail.body.el);
 
  setTimeout(() => {
    const newpStart = new CANNON.Vec3(0, 0, 0);
   
    const worldVelocity = (<any>e).detail.body.el.body.quaternion.vmult(
      ballForce
    );
    
    (<any>e).detail.body.el.body.applyImpulse(worldVelocity, newpStart);

  }, 500);
}); 
     
    })
  
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
