function introduction(){
	var home=document.getElementById("home");
	var introduction=document.getElementById("introduction");
	var experiment=document.getElementById("experiment");
	home.style.display="none";
	introduction.style.display="block";
	experiment.style.display="none";
}
function backtohome(){
	var home=document.getElementById("home");
	var introduction=document.getElementById("introduction");
	var experiment=document.getElementById("experiment");
	home.style.display="block";
	introduction.style.display="none";
	experiment.style.display="none";

}
function experiment(){
	var home=document.getElementById("home");
	var introduction=document.getElementById("introduction");
	var experiment=document.getElementById("experiment");
	home.style.display="none";
	introduction.style.display="none";
	experiment.style.display="block";

}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}





var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
  // console.log(slider.value)
}




function display() {
var error=document.getElementById("error");
var bits= document.getElementById("bits").value;
if(bits=='' || bits==null){
  error.innerHTML="<p>Empty Sequence</p>";
  return;
}

for(var i=0;i<bits.length;i++){
  if(bits[i]!='1' && bits[i]!='0'){
    error.innerHTML="<p>Enter valid sequence of 0 and 1</p>";
    return;
  }
}
if(bits.length!=slider.value){
  // alert("Bits in sequence and Number of bits selected are different");
  error.innerHTML="<p>Number of Bits and Bits in sequence are different</p>";
  return;
}
error.innerHTML="";
document.getElementById("chartContainer3").style.height="200px";
document.getElementById("chartContainer2").style.height="200px";
// console.log(bits)
var striparr=[]
for(var i=0;i<=2*bits.length;i+=2){
  striparr.push({
    startValue:i-0.01,
    endValue:i+0.01,                
    color:"#777"      
  })
}
// console.log(striparr)
var clock=[]
for(var i=0;i<bits.length;i++){
  clock.push({y: 1})
  clock.push({y: 0})
}
clock.push({y:0})
// console.log(clock)
var data=[]
for(var i=0;i<bits.length;i++){
  data.push({y: parseInt(bits[i])})
  data.push({y: parseInt(bits[i])})
}
data.push({y: parseInt(bits[bits.length-1])})



var rz=[]
for(var i=0;i<bits.length;i++){
  if(bits[i]=='1'){
      rz.push({y: 1})
      rz.push({y: 0})
    }
  else{
      rz.push({y: -1})
      rz.push({y: 0})

  }
}
rz.push({y: 0})

var nrz=[]
for(var i=0;i<bits.length;i++){
  if(bits[i]=='1'){
      nrz.push({y: 1})
      nrz.push({y: 1})
    }
  else{
      nrz.push({y: -1})
      nrz.push({y: -1})

  }
}
if(bits[bits.length-1]=='0'){
  nrz.push({y: -1})
}
else{
  nrz.push({y: 1})
}





var chart= new CanvasJS.Chart("chartContainer", {
  
  title:{
    text: "Clock Pulse"
  },


  axisX: {
    stripLines: striparr,
    minimum:0,
    // gridThickness: 0,
    // tickLength: 0,
    // lineThickness: 0,
    labelFormatter: function(){
      return " ";
    }
  },
  axisY: {
    minimum:0,
    // gridThickness: 0,
    // tickLength: 0,
    // lineThickness: 0,
    labelFormatter: function(e){
      if(e.value==0)
        return "0";
      return " ";
    }  
   },

  data: [
  {
    lineThickness: 5,
    markerSize: 0,
   type: "stepLine",  
  
   dataPoints: clock
 },



 ]
});
chart.render();
var chart= new CanvasJS.Chart("chartContainer1", {
      
      title:{
        text: "Data"
      },


      axisX: {
        stripLines: striparr,
        minimum:0,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          // console.log(e.value)
          // if(parseInt(e.value)%2==1){
          //   return bits[Math.floor(e/2)];
          // }
          return " ";
    } 
      },
      axisY: {
        
        minimum:0,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          // console.log(e.value)
          if((e.value==1) || e.value==0){
            return e.value
          }
          return " ";
        }
       },

      data: [
      {
        lineThickness: 5,
        markerSize: 0,
       type: "stepLine",  
      
       dataPoints: data
     },



     ]
   });
chart.render();
var chart= new CanvasJS.Chart("chartContainer2", {
      
      title:{
        text: "NRZ"
      },


      axisX: {
        stripLines: striparr,
        minimum:0,

        
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(){
          return " ";
    } 
      },
      axisY: {
        minimum:-2,
        interval: 1,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          if(e.value==0){
            return "0";
          }
          if(e.value==1){
            return "v/2";
          }
          if(e.value==-1){
            return "-v/2"
          }
          return " ";
        }
       },

      data: [
      {
        lineThickness: 5,
        markerSize: 0,
       type: "stepLine",  
      
       dataPoints: nrz
     },



     ]
   });
chart.render();
var chart= new CanvasJS.Chart("chartContainer3", {
      
      title:{
        text: "RZ"
      },


      axisX: {
        stripLines: striparr,
        minimum:0,
        
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(){
          return " ";
    } 
      },
      axisY: {
        minimum:-2,
        interval: 1,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          if(e.value==0){
            return "0";
          }
          if(e.value==1){
            return "v/2";
          }
          if(e.value==-1){
            return "-v/2"
          }
          return " ";
        }
       },

      data: [
      {
        lineThickness: 5,
        markerSize: 0,
       type: "stepLine",  
      
       dataPoints: rz
     },



     ]
   });
chart.render();

}
function nrz() {

  var error=document.getElementById("error");

var bits= document.getElementById("bits").value;
if(bits=='' || bits==null){
  error.innerHTML="<p>Empty Sequence</p>";
  return;
}
for(var i=0;i<bits.length;i++){
  if(bits[i]!='1' && bits[i]!='0'){
    error.innerHTML="<p>Enter valid sequence of 0 and 1</p>";
    return;
  }
}
if(bits=='' || bits==null){
  error.innerHTML="<p>Empty Sequence</p>";
  return;
}
if(bits.length!=slider.value){
  // alert("Bits in sequence and Number of bits selected are different");
  error.innerHTML="<p>Number of Bits and Bits in sequence are different</p>";
  return;
}
error.innerHTML="";
document.getElementById("chartContainer3").innerHTML="";
document.getElementById("chartContainer3").style.height=0;
document.getElementById("chartContainer2").style.height="200px";
var striparr=[]
for(var i=0;i<=2*bits.length;i+=2){
  striparr.push({
    startValue:i-0.01,
    endValue:i+0.01,                
    color:"#777"      
  })
}
// console.log(bits)

var clock=[]
for(var i=0;i<bits.length;i++){
  clock.push({y: 1})
  clock.push({y: 0})
}
clock.push({y:0})
// console.log(clock)
var data=[]
for(var i=0;i<bits.length;i++){
  data.push({y: parseInt(bits[i])})
  data.push({y: parseInt(bits[i])})
}
data.push({y: parseInt(bits[length-1])})



var rz=[]
for(var i=0;i<bits.length;i++){
  rz.push({y: parseInt(bits[i])})
  rz.push({y: 0})
}
rz.push({y: 0})

var nrz=[]
for(var i=0;i<bits.length;i++){
  if(bits[i]=='1'){
      nrz.push({y: 1})
      nrz.push({y: 1})
    }
  else{
      nrz.push({y: -1})
      nrz.push({y: -1})

  }
}
if(bits[bits.length-1]=='0'){
  nrz.push({y: -1})
}
else{
  nrz.push({y: 1})
}




var chart= new CanvasJS.Chart("chartContainer", {
  
  title:{
    text: "Clock Pulse"
  },


  axisX: {
    stripLines: striparr,
    minimum:0,
    // gridThickness: 0,
    // tickLength: 0,
    // lineThickness: 0,
    labelFormatter: function(){
      return " ";
    }
  },
  axisY: {
    minimum:0,
    // gridThickness: 0,
    // tickLength: 0,
    // lineThickness: 0,
    labelFormatter: function(e){
      if(e.value==0)
        return "0";
      return " ";
    }  
   },

  data: [
  {
    lineThickness: 5,
    markerSize: 0,
   type: "stepLine",  
  
   dataPoints: clock
 },



 ]
});
chart.render();
var chart= new CanvasJS.Chart("chartContainer1", {
      
      title:{
        text: "Data"
      },


      axisX: {
        stripLines: striparr,
        minimum:0,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          // console.log(e.value)
          // if(parseInt(e.value)%2==1){
          //   return bits[Math.floor(e/2)];
          // }
          return " ";
    } 
      },
      axisY: {
        minimum:0,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          // console.log(e.value)
          if((e.value==1) || e.value==0){
            return e.value
          }
          return " ";
        }
       },

      data: [
      {
        lineThickness: 5,
        markerSize: 0,
       type: "stepLine",  
      
       dataPoints: data
     },



     ]
   });
chart.render();
var chart= new CanvasJS.Chart("chartContainer2", {
      
      title:{
        text: "NRZ"
      },


      axisX: {
        stripLines: striparr,
        minimum:0,
        
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(){
          return " ";
    } 
      },
      axisY: {
        minimum:-2,
        interval: 1,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          if(e.value==0){
            return "0";
          }
          if(e.value==1){
            return "v/2";
          }
          if(e.value==-1){
            return "-v/2"
          }
          return " ";
        }
       },

      data: [
      {
        lineThickness: 5,
        markerSize: 0,
       type: "stepLine",  
      
       dataPoints: nrz
     },



     ]
   });
chart.render();
}
function rz() {
  var error=document.getElementById("error");

  
var bits= document.getElementById("bits").value;
if(bits=='' || bits==null){
  error.innerHTML="<p>Empty Sequence</p>";
  return;
}
for(var i=0;i<bits.length;i++){
  if(bits[i]!='1' && bits[i]!='0'){
    error.innerHTML="<p>Enter valid sequence of 0 and 1</p>";
    return;
  }
}
if(bits.length!=slider.value){
  // alert("Bits in sequence and Number of bits selected are different");
  error.innerHTML="<p>Number of Bits and Bits in sequence are different</p>";
  return;
}
error.innerHTML="";
document.getElementById("chartContainer2").style.height=0;
  document.getElementById("chartContainer3").style.height="200px";
  document.getElementById("chartContainer2").innerHTML="";
var striparr=[]
for(var i=0;i<=2*bits.length;i+=2){
  striparr.push({
    startValue:i-0.01,
    endValue:i+0.01,                
    color:"#777"      
  })
}
// console.log(bits)

var clock=[]
for(var i=0;i<bits.length;i++){
  clock.push({y: 1})
  clock.push({y: 0})
}
clock.push({y:0})
// console.log(clock)
var data=[]
for(var i=0;i<bits.length;i++){
  data.push({y: parseInt(bits[i])})
  data.push({y: parseInt(bits[i])})
}
data.push({y: parseInt(bits[length-1])})



var rz=[]
for(var i=0;i<bits.length;i++){
  if(bits[i]=='1'){
      rz.push({y: 1})
      rz.push({y: 0})
    }
  else{
      rz.push({y: -1})
      rz.push({y: 0})

  }
}
rz.push({y: 0})



var chart= new CanvasJS.Chart("chartContainer", {
  
  title:{
    text: "Clock Pulse"
  },


  axisX: {
    stripLines: striparr,
    minimum:0,
    // gridThickness: 0,
    // tickLength: 0,
    // lineThickness: 0,
    labelFormatter: function(){
      return " ";
    }
  },
  axisY: {
    minimum:0,
    // gridThickness: 0,
    // tickLength: 0,
    // lineThickness: 0,
    labelFormatter: function(e){
      if(e.value==0)
        return "0";
      return " ";
    }  
   },

  data: [
  {
    lineThickness: 5,
    markerSize: 0,
   type: "stepLine",  
  
   dataPoints: clock
 },



 ]
});
chart.render();
var chart= new CanvasJS.Chart("chartContainer1", {
      
      title:{
        text: "Data"
      },


      axisX: {
        stripLines: striparr,
        minimum:0,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          // console.log(e.value)
          // if(parseInt(e.value)%2==1){
          //   return bits[Math.floor(e/2)];
          // }
          return " ";
    } 
      },
      axisY: {
        minimum:0,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          // console.log(e.value)
          if((e.value==1) || e.value==0){
            return e.value
          }
          return " ";
        }
       },

      data: [
      {
        lineThickness: 5,
        markerSize: 0,
       type: "stepLine",  
      
       dataPoints: data
     },



     ]
   });
chart.render();
var chart= new CanvasJS.Chart("chartContainer3", {
      
      title:{
        text: "RZ"
      },


      axisX: {
        stripLines: striparr,
        minimum:0,
        
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(){
          return " ";
    } 
      },
      axisY: {
        minimum:-2,
        interval: 1,
        // gridThickness: 0,
        // tickLength: 0,
        // lineThickness: 0,
        labelFormatter: function(e){
          if(e.value==0){
            return "0";
          }
          if(e.value==1){
            return "v/2";
          }
          if(e.value==-1){
            return "-v/2";
          }
          return " ";
        }
       },

      data: [
      {
        lineThickness: 5,
        markerSize: 0,
       type: "stepLine",  
      
       dataPoints: rz
     },



     ]
   });
chart.render();

}
