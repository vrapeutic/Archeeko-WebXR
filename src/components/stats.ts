import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';
import {convertHMS} from '../index';

interface statsSchema {}

export class stats extends ComponentWrapper<statsSchema> {
  constructor() {
    super('stats-time', {});
  }

  init() {
    const start_session_time = new Date().toLocaleString();
    const Tas = 20;
    const tpicalTime = 40;
    let implusivityScore;
    let omissionScore: number;
    let Ds:number;
    let responseTime:number;
    let levelType:string;
    let Tir=0,
      end_session_time:string,
      AAS=0,
      TFD=0,
      timeTaken: string,
      Tar=0,
      AimingScore=0;
      var statString:string;
      var ClosedTime= 
        document.getElementById('closedtimer').getAttribute('value');
    const issent = false;
    const score = parseInt(
      document.getElementById('score').getAttribute('value'),
      10
    );
    const lostLives = parseInt(
      document.getElementById('counter').getAttribute('value'),
      10
    );
  
    const inps = parseInt(
      document.getElementById('inps').getAttribute('value'),
      10
    );
    const session = parseInt(
      document.getElementById('session').getAttribute('value'),
      10
    );
    let startSession = 0;
    const mysession = setInterval(() => {
      startSession++;
      document
        .getElementById('session')
        .setAttribute('value', startSession.toString());

      timeTaken = convertHMS(
        document.getElementById('session').getAttribute('value')
      );
    }, 1000);
    mysession;
    // console.log(this.el.id)//"1PASH9A5579282 "
   
    let attentionSpan: number;

    const calculate = function () {
       var response = parseInt(
      document.getElementById('tasktime').getAttribute('value'),
      10
    ); 
     AimingScore =  parseInt(
      document.getElementById('score').getAttribute('value'),
      10
    ) / parseInt(
      document.getElementById('bulletCounter').getAttribute('value'),
      10
    );
      Tar =  parseInt(
        document.getElementById('score').getAttribute('value'),
        10
    ) / document.querySelectorAll('.boxs').length;
      responseTime = (parseInt(
        document.getElementById('tasktime').getAttribute('value'),
        10
      ) /
      parseInt(
        document.getElementById('session').getAttribute('value'),
        10
    ));
      AAS =(parseInt(
        document.getElementById('tasktime').getAttribute('value'),
        10
      ) /
      parseInt(
        document.getElementById('score').getAttribute('value'),
        10
    )) ;
      attentionSpan =   parseInt(
        document.getElementById('session').getAttribute('value'),
        10
    ) -   parseInt(
      document.getElementById('inps').getAttribute('value'),
      10
  );
      if (AAS != 0) {
        omissionScore = Tas / (AAS + Math.pow(10, -5));
      }
      TFD = AAS - Tas;
      if (document.getElementById('level').getAttribute('value') == '1') {
        Ds = 0;
      } else {
        Ds = 1 - TFD / Tas;
      }
      if (
        document.getElementById('level').getAttribute('value') == '2' ||
        document.getElementById('level').getAttribute('value') == '1'
      ) {
        responseTime = AAS;
      } else if (
        document.getElementById('level').getAttribute('value') == '3'
      ) {
        responseTime =
         ( (parseInt(
            document.getElementById('tasktime').getAttribute('value'),
            10
          ) /
          parseInt(
            document.getElementById('score').getAttribute('value'),
            10
        )) +(
            parseInt(
              document.getElementById('dstime').getAttribute('value'),
              10
            ) /
            parseInt(
              document.getElementById('score').getAttribute('value'),
              10
          )) )/
          2;
      }

      if (
        document.getElementById("levelTybe").getAttribute("value") != "open"
      ) {
       console.log(document.getElementById("closedtimer").getAttribute("value")+"hello"+sessionStorage.getItem('timer'))
     levelType ="closed";
        Tir = parseInt( 
          document.getElementById('session').getAttribute('value'),
          10) / parseInt(document.getElementById('closedtimer').getAttribute('value'),10)
         } 
          else {
         levelType = "open";
        Tir =
        parseInt(
          document.getElementById('session').getAttribute('value'),
          10 )
        /tpicalTime
        ;
      }
      if (Tar == 0 || AimingScore == 0) {
        implusivityScore = 1;
      } else {
        implusivityScore = (1*(-Tar))*((Math.log10(Tir)-1)+Math.pow(10,-5));
      }  
      end_session_time=new Date().toLocaleString();
     statString="Tas:"+Tas+" responese "+ response+" duration "+document.getElementById('closedtimer').getAttribute('value')+
    " levelType: "+levelType+" end : "+end_session_time+" AAS "+AAS+" aminingscore"+AimingScore
    + " response "+responseTime+" Start"+start_session_time+" Ds "+Ds+" timeTaken "+timeTaken+" tar" +Tar
    +" Tir"+Tir+" omission "+omissionScore+" imps "+implusivityScore+" attention"+attentionSpan;
 
    };
   
    document.getElementById('counter').addEventListener("click",e=>{
       if(document.querySelector('a-scene').getAttribute('time-manger')!=null)
console.log(document.getElementById('closedtimer').getAttribute("value"));
calculate() 
 
    var statsTex = document.createElement("a-text");
    statsTex.setAttribute("position", "-2 1 -2");
    statsTex.setAttribute("value", statString);
    document.querySelector("a-camera").appendChild(statsTex);
    console.log(statsTex);
  setTimeout(() => {
      window.location.href="../dist";
  
   }, 10000);
    })
  
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

new stats().register();
