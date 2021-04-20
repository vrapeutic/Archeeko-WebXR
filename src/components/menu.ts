import {ComponentWrapper} from '../essential/aframe-wrapper';

//export class menu extends ComponentWrapper<>{}

function set_language(lang: string) {
  sessionStorage.setItem('langauage', lang);

  const data = {
    funcName: 'set_language',
    params: [lang],
  };
}

function set_npc(npc: string) {
  if (sessionStorage.getItem('langauage') == 'A') {
    if (npc == 'male') {
      sessionStorage.setItem('npc', 'H');
      //    alert(sessionStorage.getItem('npc'));
    } else {
      sessionStorage.setItem('npc', 'Re');
      //    alert(sessionStorage.getItem('npc'));
    }
  } else {
    if (npc == 'male') {
      sessionStorage.setItem('npc', 'Ri');
      //alert(sessionStorage.getItem('npc'));
    } else {
      sessionStorage.setItem('npc', 'L');
      // alert(sessionStorage.getItem('npc'));
    }
  }
}
function set_level(level: string) {
  sessionStorage.setItem('level', level);
  //  alert(sessionStorage.getItem('level'));
  const data = {
    funcName: 'set_level',
    params: [level],
  };
  document.getElementById('level').setAttribute('value', level);
}
function set_z(z: string) {
  sessionStorage.setItem('z', z);
  //  alert(sessionStorage.getItem('level'));
  const data = {
    funcName: 'set_z',
    params: [z],
  };
  document.getElementById('TheTree').setAttribute('position', '0 0 ' + z);
}
function set_arrows(arrow: string) {
  sessionStorage.setItem('arrow', arrow);
  //  alert(sessionStorage.getItem('level'));
  const data = {
    funcName: 'set_arrows',
    params: [arrow],
  };
  document.getElementById('bulletCounter').setAttribute('value', arrow);
}
function set_timer(time: string) {
  sessionStorage.setItem('timer', time);
  //  alert(sessionStorage.getItem('level'));
  const data = {
    funcName: 'set_timer',
    params: [time],
  };
  document.getElementById('timer').setAttribute('value', time);
}
function start_game() {
  const gameDiv = document.getElementById('game');
  // window.open('game.html',"_self");

  const data = {
    funcName: 'start_game',
    params: [''],
  };
  const drMenuDiv = document.getElementById('dr-menu');

  drMenuDiv.style.visibility = 'hidden';
  gameDiv.style.visibility = 'visible';
  document.querySelector('a-scene').setAttribute('time-manger', 'enable', true);
  document
    .getElementById('butterflymodel')
    .setAttribute('distractor', 'enable:true');
}
