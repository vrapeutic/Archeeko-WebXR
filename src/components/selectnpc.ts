import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import {convertHMS} from '../index';

interface selectnpcSchema {}

export class selectnpc extends ComponentWrapper<selectnpcSchema> {
  constructor() {
    super('npc', {});
  }

  update() {
    console.log('npc' + sessionStorage.getItem('npc'));
  }
  play() {}

  init() {
    if (sessionStorage.getItem('char') == null) {
      sessionStorage.setItem('char', 'hus');
    }
    console.log('npc' + sessionStorage.getItem('npc'));
    if (sessionStorage.getItem('npc') != null) {
      CurrentNpc();
    } else if (sessionStorage.getItem('npc') == null) {
      sessionStorage.setItem('npc', 'male');
      CurrentNpc();
    }
  }
  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new selectnpc().register();
function CurrentNpc() {
  document
    .getElementById('npc')
    .parentNode.removeChild(document.getElementById('npc'));
  const npc = document.createElement('a-gltf-model');
  npc.setAttribute('position', "7 0 2");
  npc.setAttribute('id', 'npc' + sessionStorage.getItem('npc'));
  npc.setAttribute('src', '#' + sessionStorage.getItem('npc'));
  document.querySelector('#targetTree').appendChild(npc);
}
