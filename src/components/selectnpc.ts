
    import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import {convertHMS} from '../index';

interface selectnpcSchema {}

export class selectnpc extends ComponentWrapper<selectnpcSchema> {
  constructor() {
    super('npc', {});
  }

  init() {
    console.log("npc"+sessionStorage.getItem('npc'))

  }
  update() {}

  play() { 
    console.log("npc"+sessionStorage.getItem('npc'))
  if(  document
    .getElementById(sessionStorage.getItem('npc'))!=null){
      document
      const npc = document.createElement('a-gltf-model');
      npc.setAttribute('position', {x: 2, y: 0, z: -3});
      npc.setAttribute('id', 'npc'+sessionStorage.getItem('npc'));
      npc.setAttribute('src', '#'+sessionStorage.getItem('npc'));
      document.querySelector('a-scene').appendChild(npc);
    }
    if( sessionStorage.getItem('char')==null){
        sessionStorage.setItem('char','hus');
      }

 

    
   else if(sessionStorage.getItem('npc')==null){
  sessionStorage.setItem('npc','male')
  const npc = document.createElement('a-gltf-model');
  npc.setAttribute('position', {x: 2, y: 0, z: -3});
  npc.setAttribute('id', 'npc'+sessionStorage.getItem('npc'));
  npc.setAttribute('src', '#'+sessionStorage.getItem('npc'));
  document.querySelector('a-scene').appendChild(npc);

}
   }
  pause() {}

  tick() {
    // this.el.setAttribute("position",document.querySelector("#shooter").getAttribute("position"));
    //this.el.setAttribute("rotation",document.querySelector("#shooter").getAttribute("rotation"));
  }

  remove() {}

  destroy() {}
}

new selectnpc().register();
