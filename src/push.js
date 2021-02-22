AFRAME.registerComponent('push', {

    schema: {
        lineColor: {
          type: 'color',
          default: '#E20049'
        },
      },
      
    def:function(){
        console.log("particale");
    },
    createMeshLine:function() {
        var bowLine = document.createElement('a-entity');
        bowLine.id = 'bowLine';
    
        bowLine.setAttribute('meshline', {
          lineWidth: '20',
          path: this.getBowLinePathString(),
          color: this.data.lineColor
        })
    
        this.bow.append(bowLine);
        this.bowLine = bowLine;
        return;
      },
init:function(){
document.querySelector("#shooter").addEventListener("click",()=>{
    //this.el.addEventListener("Collide",
      //  this.el.setAttribute("Visible","true");
      var bullet=document.createElement('a-cylinder');
      bullet.setAttribute("scale",{x:.2,y:.2,z:.2}) 
      bullet.setAttribute("id","bullet");
      bullet.setAttribute("aabb-collider","objects:a-box")
     // bullet.setAttribute("position",
     // document.getElementById("shooter").getAttribute("position"));
     // bullet.setAttribute("rotaion",
     // document.getElementById("shooter").getAttribute("rotation"));
      document.getElementById("shooter").appendChild(bullet);
      console.log(bullet);
      var self=document.getElementById("bullet");
      self.setAttribute("dynamic-body","mass :0.05");
       var force = new CANNON.Vec3(1,0,0)
       var local = new CANNON.Vec3(0, 0, 0)
       var worldVelocity = self.body.quaternion.vmult(force);
       self.body.applyImpulse(worldVelocity, local);
    //   this.createMeshLine();
           console.log(self.body.velocity);  
   
   setTimeout(() => {
    document.getElementById("bullet").parentNode.removeChild(document.getElementById("bullet"));
   
   }, 1000); 
  bullet.addEventListener("hitstart", e => 
    {   console.log(bullet,
    e.target.id,
    "collided ",
 e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
  );
  var id =document.getElementById(e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id));
  console.log(id);
   var currentPosition=document.getElementById(id.id).getAttribute("position");
   document.getElementById(id.id).setAttribute("dynamic-body","mass :0.05");
  //this.el.setAttribute("aabb-collider","objects : a-sphere");
  document.getElementById("index").setAttribute("position",
  currentPosition.x +" "+currentPosition.y+" "+currentPosition.z ); 
 var partical=document.createElement('a-entity');
   partical.setAttribute("spe-particles","texture: ../images/particles/sparkle.png;color: yellow, red, cyan, black; distribution: sphere; particle-count: 800; ")
   
   partical.setAttribute("spe-particles","randomize-velocity: true;radius: 0.5; velocity-spread: 0.5; drag: 1; max-age: 10;blending: additive;active-multiplier: 1000;  size: 5, 5, 5, 0;") 
   //partical.setAttribute("position","1 3 1")
   document.getElementById(id.id).appendChild(partical);
  
  
   var ball=document.createElement('a-sphere');
   ball.setAttribute("scale",{x:.3,y:.3,z:.3}) 
   ball.setAttribute("id","enemy");
   
   ball.setAttribute("position",
   document.getElementById("index").getAttribute("position"));
  document.querySelector("a-scene").appendChild(ball); 
  console.log(ball.getAttribute("position"));
  setTimeout(() => { 
  
  
    document.getElementById(id.id).parentNode.removeChild(document.getElementById(id.id));
  
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
})
    })

}



})