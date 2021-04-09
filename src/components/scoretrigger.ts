import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface ScoreSchema {
  readonly color: string;
}

export class scoretrigger extends ComponentWrapper<ScoreSchema> {
  constructor() {
    super('score-trigger', {
     
    });
  }

  init() {
    var score=0;
    this.el.addEventListener('hitstart', function (e)
    {
      if((<any>e).target.components["aabb-collider"]["intersectedEls"]!=null){
     console.log(' collided #' +(<any>e).target.components["aabb-collider"]["intersectedEls"][0].id);
    if((<any>e).target.components["aabb-collider"]["intersectedEls"][0].id=="enemy"){
     score++;
      console.log("score1: "+score)
    } 
     
    else console.log("currentscore"+ score);
    }
    else console.log("curscore"+ score);

    });
  }

  update() {
   // console.log(this.data.color);
  }

  play() {}

  pause() {}

  tick() {
   // this.el.setAttribute("position",document.querySelector("#shooter").getAttribute("position"));
    //this.el.setAttribute("rotation",document.querySelector("#shooter").getAttribute("rotation"));

  }

  remove() {}

  destroy() {}
}

new scoretrigger().register();
