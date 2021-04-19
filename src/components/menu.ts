/*function set_language(lang){
    sessionStorage.setItem('langauage',lang);
  
      var data = {
        funcName: 'set_language',
        params: [
          lang
        ]
      
    }
  }
  */
  function set_level(level: string){
    sessionStorage.setItem('level',level);  
   //  alert(sessionStorage.getItem('level'));
      var data = {
        funcName: 'set_level',
        params: [
          level
        ]
      }
      document.getElementById('level').setAttribute('value',level);
       var drMenuDiv = document.getElementById('dr-menu');
  
      drMenuDiv.style.visibility = 'hidden';
    }
  
  
  /*function set_growth_time(animationSpeed){
    sessionStorage.setItem('animationSpeed',animationSpeed);
      var data = {
        funcName: 'set_growth_time',
        params: [
          animationSpeed
        ]
      }
    }
  
  
  function set_npc(npc){
    if(sessionStorage.getItem('langauage') =='A') {
      if(npc =='male') {
        sessionStorage.setItem('npc','H');  
    //    alert(sessionStorage.getItem('npc'));
      }
      else {
        sessionStorage.setItem('npc','Re');  
      //    alert(sessionStorage.getItem('npc'));
      }
    }
    else {
      if(npc =='male') {
        sessionStorage.setItem('npc','Ri');  
        //alert(sessionStorage.getItem('npc'));
      }
      else {
        sessionStorage.setItem('npc','L');  
          // alert(sessionStorage.getItem('npc'));
      } 
    }
  
      var data = {
        funcName: 'set_npc',
        params: [
          npc
        ]
          }
  }
  
  function start_game() {
    var gameDiv = document.getElementById('game');
    // window.open('game.html',"_self");
  
      var data = {
        funcName: 'start_game',
        params: []
      }
  
     
    }*/