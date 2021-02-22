var position;
AFRAME.registerComponent('gift', {



    


    init: function() 
    {

console.log(this.el);

         let giftManger = () => 
    {

  
       var currentPosition=this.el.getAttribute("position");
       this.el.setAttribute("dynamic-body","mass :0.05");
      //this.el.setAttribute("aabb-collider","objects : a-sphere");
      document.getElementById("index").setAttribute("position",
      currentPosition.x +" "+currentPosition.y+" "+currentPosition.z ); 
     var partical=document.createElement('a-entity');
       partical.setAttribute("spe-particles","texture: ../images/particles/sparkle.png;color: yellow, red, cyan, black; distribution: sphere; particle-count: 800; ")
       
       partical.setAttribute("spe-particles","randomize-velocity: true;radius: 0.5; velocity-spread: 0.5; drag: 1; max-age: 10;blending: additive;active-multiplier: 1000;  size: 5, 5, 5, 0;") 
       //partical.setAttribute("position","1 3 1")
     this.el.appendChild(partical);

      
       var ball=document.createElement('a-sphere');
       ball.setAttribute("scale",{x:.3,y:.3,z:.3}) 
       ball.setAttribute("id","enemy");
       
       ball.setAttribute("position",
       document.getElementById("index").getAttribute("position"));
      document.querySelector("a-scene").appendChild(ball); 
      console.log(ball.getAttribute("position"));
   

      setTimeout(() => { 
      
      
        document.getElementById(this.el.id).parentNode.removeChild(this.el.id);
      
      }, 3000); 
     setTimeout(() => {
      if(document.getElementById("enemy")!=null)
      {   var self=document.getElementById("enemy");
         self.setAttribute("dynamic-body","mass :0.05");
          var force = new CANNON.Vec3(0, 0, 0.7)
          var local = new CANNON.Vec3(0, 0, 0)
          var worldVelocity = self.body.quaternion.vmult(force);
          self.body.applyImpulse(worldVelocity, local);
              console.log(self.body.velocity);  
      
      setTimeout(() => {
          self.parentNode.removeChild(self);
      
      }, 2000);
      }
       
      }, 3000);
}  
        this.el.addEventListener("hitstart", e => 
        {  
             console.log(document.getElementById("bullet"),
        e.target.id,
        "collided ",
     e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
      );
   if (
        e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("bullet") 
        
      )
  { 
      giftManger();

   } })
    this.el.addEventListener('child-attached', function(evt){
     
        this.el.removeEventListener("hitstart", e => 
        {  
             
  giftManger();

    }) 
    })
      }
    
      
})


