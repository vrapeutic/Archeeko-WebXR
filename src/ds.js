
console.log("hello");
AFRAME.registerComponent("ds", {
  
    init: function()
    {
  
      var newpos, random=0;
      var box = document.querySelectorAll(".bTarget");//Array of targets
  //    var ds = document.getElementById("Ds");// distractor element
      var ds =this.el
     // console.log(box + " this " + ds+document.getElementById("level").getAttribute("value"));
  
     // level 2

   // console.log(document.getElementById("level").getAttribute("value"))
     let startDsMovement= function cycle(index) 
      {
  
        setTimeout(function() 
        {
    // ds.setAttribute("position", { x: ds.getAttribute("position").x, y:ds.getAttribute("position").y, z:ds.getAttribute("position").z });
   
    random++;  
    
     newpos=box[random].getAttribute("position");// restor next target for distractor
     
    ds.setAttribute("animation","property:position; to:"+newpos.x+" 1 "+newpos.z+" dur:5000"); 
    
   // ds.setAttribute("position",{x:newpos.x,y:newpos.y,z:newpos.z})  ;
    
   // console.log(random+" here "+box[random].getAttribute("position").x+"ds "+ds.getAttribute("position").x+" "+box.length)
    
         //`cycle()` 
         // index++; // Increment the index
    
         // random++;
        //  console.log(random);
          
          if (random >= box.length-1) 
          {
               
               random = 0; // Set it back to `0` when it reaches `4`
            }
           // console.log("i'm here 2")
  
            cycle(random);
      //cycle(++index % 3);
      
        },2000);
    }
      
    startDsMovement( box.length);

    }})