import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import { convertHMS } from "../index";

interface statsSchema {}

export class stats extends ComponentWrapper<statsSchema> {
  constructor() {
    super('stats-time', {});
  }

  init() {
 var start_session_time=new Date().toLocaleString();
var tpicalTime;
var Tas=7.5;
var implusivityScore ;
var omissionScore;
var Ds;
var responseTime;
var levelType;
var Tir,end_session_time,AAS,TFD,timeTaken,Tar,AimingScore;  
var issent=false;
var score=parseInt(document.getElementById("score").getAttribute("value"),10);
var lostLives=parseInt(document.getElementById("counter").getAttribute("value"),10);
var bullets=parseInt(document.getElementById("bulletCounter").getAttribute("value"),10);
AimingScore=score/bullets;
var inps=parseInt(document.getElementById("inps").getAttribute("value"),10);
var session=parseInt(document.getElementById("session").getAttribute("value"),10);
var startSession=0;
var mysession=setInterval(function()  {
 
 startSession++;
 document.getElementById("session").setAttribute("value", startSession.toString()); 


timeTaken=convertHMS(document.getElementById("session").getAttribute("value"));
}, 1000);
mysession;
  // console.log(this.el.id)//"1PASH9A5579282 "
var response=parseInt(document.getElementById("tasktime").getAttribute("value"),10);

let calculate=function(){
Tar=score/document.querySelectorAll('.boxs').length;

AAS=response/score;
if (AAS != 0)
{ 
omissionScore = Tas /Math.pow(10,-5);
}
TFD = AAS - Tas;
if (document.getElementById("level").getAttribute("value")=="1")
{
  Ds = 0;
}
else
{
  Ds = (1 - (TFD / Tas));
}
if(document.getElementById("level").getAttribute("value")=="2" || document.getElementById("level").getAttribute("value")=="1")
{
responseTime= AAS;
}
else if (document.getElementById("level").getAttribute("value")=="3")
{
//responseTime=(document.getElementById("tasktime").getAttribute("value")/document.getElementById("taskcounter").getAttribute("value")+
//document.getElementById("dstime").getAttribute("value")/document.getElementById("dscounter").getAttribute("value"))/2;
}

if (document.getElementById("levelTybe").getAttribute("value")!="Open")
{
   levelType = "Closed"; 
 // Tir=timeTaken/document.getElementById("counter").getAttribute("value");

}
else
{
  levelType = "Opend";   
 // Tir= timeTaken/tpicalTime;
} 
if (Tar == 0)
{
implusivityScore = 1;}
else
{
 //implusivityScore =(1*(-Tar))*((Math.log10(parseInt(Tir,10))-1)+Math.pow(10,-5));
}
  }
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
}

new stats().register();
