import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface responseTimeSchema {}

export class responseTime extends ComponentWrapper<responseTime> {
  constructor() {
    super('response-time', {});
  }

  init() {
      console.log(this.el)
      var count=-1;
    var timer=parseInt(document.getElementById("tasktime").getAttribute("value"),10);
    var isCounting=true;
      var taskTimer=()=>{
          if(isCounting==true){

        count=  window.setInterval(function() {
           timer++;

      document.getElementById("tasktime").setAttribute("value",timer.toString()); 
     }, 1000);}
    } 
     taskTimer();

     document.getElementById("ground").addEventListener('collide', e => {
  if( (<any>e).detail.body.el.id=="bullet"){
      console.log("response"+(<any>e).detail.body.el.id)
   clearInterval(count);
   this.destroy();

 //delete AFRAME.components['response-time']; 
     // isCounting=false;
document.querySelector('#shooter').removeAttribute("response-time");

 // console.log(isCounting);
//delete AFRAME.AComponent['response-time'];
    } })

  }
  
  

  update() {}

  play() {
    
}


  pause() {}

  tick() {
    // this.el.setAttribute("position",document.querySelector("#shooter").getAttribute("position"));
    //this.el.setAttribute("rotation",document.querySelector("#shooter").getAttribute("rotation"));
  }

  remove() {}

  destroy() {}
  task(){
      console.log(this.name)
  }
}

new responseTime().register();
