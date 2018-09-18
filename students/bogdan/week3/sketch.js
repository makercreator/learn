
//var angles = [];
//var c = [];
var skills;
angles=[];
value=[];
x=[];
y=[];
var diameter=300;
var radius = diameter / 2;


function preload(){
  skills=loadTable("week3.csv", "loaded");
}

function setup() {
  createCanvas(800, 400);
  stroke(150);
  noLoop();  // Run once and stop
 

  var rowCount=skills.getRowCount()-1; // number of rows -1 to ignore last value (overall)
  for(var i=0; i<rowCount; i++) {
  angles[i]=360/rowCount; // number of slices = circumfrance/number of rows
  // textX=width/2; // For info text
  // textY=height/2; // For info text
  }


  overall=rowCount; // rowCount is used to determine the last item which contains the overall percentage.
  //print(overall);
  for(var i=0; i<rowCount; i++) {
  value[i]=skills.getNum(i, 1);

  }
}

function draw() {
  background(100);
  noStroke();
  pieChart(diameter, angles);
  fill(100);
  ellipse(width/4,height/2,250,250);

//OVERALL PERCENT//
  fill(150);
  textAlign(CENTER);
  textSize(80);
  text(skills.getString(overall,1), 200,190);

  

// STUDENT NAME & TITLE //
  textAlign(CENTER);
  fill(200);
  textSize(24);
  text(skills.getString(1,4), 200,260);
  textSize(12);
  text(skills.getString(2,4), 200,235);
  
  
}


function pieChart(diameter, data) {
  var lastAngle = PI+HALF_PI; // start at 12 o'clock
  //change color / slice//
  for (var i = 0; i < data.length; i++) {

 
  //100%//
  if(value[i] == 100) {
    fill(0, 255, 150, 255);
  }
  
  // 0% //
  if(value[i] < 1) {
    fill(150);
  }

  //draw slices//
    arc(width/4, height/2, diameter, diameter, lastAngle, lastAngle-.02 + radians(angles[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap. 
    lastAngle += radians(angles[i]); //each slice starts where the last left off.
  }

beginShape();


for(var i=0; i<value.length; i++) {
  
    var x=map(17, 10, 100 , 0, 140);
    var y=map(i, 0, value.length, 20, 400);//y position of progress bar
    print(value[i]);
  
  var c=skills.getNum(i,1); 
    if(value[i] < 100) {
    stroke(255)  
    fill(0, 200, 255, 255);
  }

  //100%//
  if(value[i] == 100) {
    stroke(0, 255, 150, 255); 
    fill(0, 255, 150, 255);
  }

  // 0% //
  if(value[i] < 1) {
    fill(150);
  }

  rect(400, y, x+1, 12);x
    
    
}
  endShape()
  
  for(var i=0; i<value.length; i++) {

  var y=map(i, 0, value.length, 20, 400);//y position of progress bar descriptors
  textSize(10);
  noStroke();
  fill(255);
  text(skills.getString(i,0), 430, y+10);
  }
}
  
