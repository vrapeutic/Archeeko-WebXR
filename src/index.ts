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
import {selectnpc} from './components/Selectnpc';
export {selectnpc};
import {soundmanger} from './components/soundmanger';
export {soundmanger};
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
