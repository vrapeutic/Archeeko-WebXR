import {visualDistractorMovenment} from './components/visualDistractorMovenment';
export {visualDistractorMovenment};
import {shoot} from './components/shoot';
export {shoot};
import {enemy} from './components/enemy';
export {enemy};
import {scoretrigger} from './components/scoretrigger';
export {scoretrigger};
import {timecounter} from './components/timecounter';
export {timecounter};
import {inpsCounter} from './components/inpsCounter';
export {inpsCounter};
import {responseTime} from './components/responseTime';
export {responseTime};
import {stats} from './components/stats';
export {stats};
export function convertHMS(value: string) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = 0 + hours;
  }
  if (minutes < 10) {
    minutes = 0 + minutes;
  }
  if (seconds < 10) {
    seconds = 0 + seconds;
  }
  return hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
}
export function set_language(lang: string) {
  sessionStorage.setItem('langauage', lang);

  const data = {
    funcName: 'set_language',
    params: [lang],
  };
}

export function set_npc(npc: string) {
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
export function set_level(level: string) {
  sessionStorage.setItem('level', level);
  //  alert(sessionStorage.getItem('level'));
  const data = {
    funcName: 'set_level',
    params: [level],
  };
  document.getElementById('level').setAttribute('value', level);
}
export function set_z(z: string) {
  sessionStorage.setItem('z', z);
  //  alert(sessionStorage.getItem('level'));
  const data = {
    funcName: 'set_z',
    params: [z],
  };
  document.getElementById('TheTree').setAttribute('position', '0 0 ' + z);
}
export function set_arrows(arrow: string) {
  sessionStorage.setItem('arrow', arrow);
  //  alert(sessionStorage.getItem('level'));
  const data = {
    funcName: 'set_arrows',
    params: [arrow],
  };
  document.getElementById('bulletCounter').setAttribute('value', arrow);
}
export function set_timer(time: string) {
  sessionStorage.setItem('timer', time);
  //  alert(sessionStorage.getItem('level'));
  const data = {
    funcName: 'set_timer',
    params: [time],
  };
  document.getElementById('timer').setAttribute('value', time);
//console.log(time);
//console.log(  document.getElementById('session').getAttribute('value')
if(parseInt(sessionStorage.getItem('timer'))!=0)
{
  document.getElementById("levelTybe").setAttribute("value","closed");

}

}
export function start_game() {
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
