import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface responseTimeSchema {
  isCount: boolean;
}

export class responseTime extends ComponentWrapper<responseTimeSchema> {
  constructor() {
    super('response-time', {
      isCount: {
        type: 'boolean',
        default: true,
      },
    });
  }

  init() {
    console.log(this.el);
    let count = -1;
    let timer = parseInt(
      document.getElementById('tasktime').getAttribute('value'),
      10
    );
    // var isCounting=true;
    const taskTimer = () => {
      this.data.isCount = true;
      if (this.data.isCount == true) {
        count = window.setInterval(() => {
          timer++;

          document
            .getElementById('tasktime')
            .setAttribute('value', timer.toString());
        }, 1000);
      }
    };
    taskTimer();

    /*
   document.getElementById('ground').addEventListener('collide', e => {
      if ((<any>e).detail.body.el.id == 'bullet') {
        console.log('response' + (<any>e).detail.body.el.id);
        //    clearInterval(count);
 // this.data.isCount = false;
      //  this.destroy();
taskTimer();
        //delete AFRAME.components['response-time'];
        // isCounting=false;
     // document.querySelector('#shooter').removeAttribute("response-time");

        // console.log(isCounting);
        //delete AFRAME.AComponent['response-time'];
      }
    });
    document.querySelector('#shooter').addEventListener('click', () => {
        clearInterval(count);
      this.data.isCount = false;
    })
    document.getElementById('wall').addEventListener('collide', e => {
      if ((<any>e).detail.body.el.id == 'bullet') {
        console.log('response' + (<any>e).detail.target.el.id);
     //   (<any>e).detail.target.el.removeAttribute("static-body");
     //  this.data.isCount = false;
       //clearInterval(count);
setTimeout(() => {
//    (<any>e).detail.target.el.setAttribute("static-body",'enabled',true);

}, 1000);
        //delete AFRAME.components['response-time'];
        // isCounting=false;
   //  document.querySelector('#shooter').removeAttribute("response-time");
taskTimer();
        // console.log(isCounting);
        //delete AFRAME.AComponent['response-time'];
      }
    });*/
  }

  update() {}

  play() {}

  pause() {}

  tick() {
    // this.el.setAttribute("position",document.querySelector("#shooter").getAttribute("position"));
    //this.el.setAttribute("rotation",document.querySelector("#shooter").getAttribute("rotation"));
  }

  remove() {}

  destroy() {}
}

new responseTime().register();
