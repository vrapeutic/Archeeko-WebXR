/*
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
Tar=score/document.querySelectorAll('.boxs').length;
var lostLives=parseInt(document.getElementById("counter").getAttribute("value"),10);
var bullets=parseInt(document.getElementById("bulletCounter").getAttribute("value"),10);
AimingScore=score/bullets;
var inps=parseInt(document.getElementById("inps").getAttribute("value"),10);
var startSession=0;
var session=parseInt(document.getElementById("session").getAttribute("value"),10);
var mysession=setInterval(function()  {


 document.getElementById("session").setAttribute("value", startSession.toString());

 startSession++;

}, 1000);
mysession;
  // console.log(this.el.id)//"1PASH9A5579282 "

timeTaken=convertHMS(document.getElementById("session").getAttribute("value"));
console.log("timeTaken"+timeTaken);
AAS=(session-inps)/score;
if (AAS != 0)
{
omissionScore = Tas /Math.pow(10,-5);
}
TFD = AAS - Tas;
if (document.getElementById("level").getAttribute("value")==1)
{
  Ds = 0;
}
else
{
  Ds = (1 - (TFD / Tas));
}
if(document.getElementById("level").getAttribute("value")==2 || document.getElementById("level").getAttribute("value")==1)
{
responseTime= AAS;
}
else if (document.getElementById("level").getAttribute("value")==3)
{
responseTime=(document.getElementById("tasktime").getAttribute("value")/document.getElementById("taskcounter").getAttribute("value")+
document.getElementById("dstime").getAttribute("value")/document.getElementById("dscounter").getAttribute("value"))/2;
}

if (document.getElementById("levelTybe").getAttribute("value")!="Open")
{
   levelType = "Closed";
  Tir=timeTaken/document.getElementById("counter").getAttribute("value");

}
else
{
  levelType = "Opend";
  Tir= timeTaken/tpicalTime;
}
if (Tar == 0)
{
implusivityScore = 1;}
else
{
 implusivityScore =(1*(-Tar))*((Math.log10(Tir)-1)+Math.pow(10,-5));
}*/
