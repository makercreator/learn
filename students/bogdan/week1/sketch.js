
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
  skills=loadTable("week1.csv", "loaded");
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
 


  // x[i]=skills.getNum(i,2); // For info text
  //y[i]=skills.getNum(i,3); // For info text
  // x[i]=diameter+2, angles; // For info text
  }
}

function draw() {
  background(100);
  noStroke();
  pieChart(diameter, angles);
  //info(320, angles); // For info text
  fill(100);
  ellipse(width/2,height/2,250,250);

//OVERALL PERCENT//
  fill(150);
  textAlign(CENTER);
  textSize(80);
  text(skills.getString(overall,1), 400,225);
  //print(overall);
  

// STUDENT NAME & TITLE //
  textAlign(LEFT);
  fill(200);
  textSize(24);
  text(skills.getString(0,4), 60,40);
  text(skills.getString(1,4), 60,62);
  textSize(12);
  text(skills.getString(2,4), 60,75);
  
  
}




function pieChart(diameter, data) {
  var lastAngle = PI+HALF_PI; // start at 12 o'clock
  //change color / slice//
  for (var i = 0; i < data.length; i++) {

  if(value[i] < 100) {
    fill(0, 200, 255, 255);
  }
  //100%//
  if(value[i] == 100) {
    fill(0, 255, 150, 255);
  }
   //80%//
  if ((value[i] > 60) && (value[i] < 100)) {
    fill(0, 250, 250, 255);
  }
  // 60% //
  if ((value[i] > 40) && (value[i] < 60)) {
    fill(0, 255, 250, 150);
  }
  // 40% //
  if ((value[i] > 1) && (value[i] < 40)) {
    fill(0, 250, 250, 70);
  }
  // 0% //
  if(value[i] < 1) {
    fill(150);
  }

  //draw slices//
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle-.02 + radians(angles[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap. 
    lastAngle += radians(angles[i]); //each slice starts where the last left off.
  }

beginShape();


for(var i=0; i<value.length; i++) {

    var x=map(value[i], 0, 100 , 0, 140);
    var y=map(i, 0, value.length-1, 20, 380);//y position of progress bar
    print(value[i]);
  
  var c=skills.getNum(i,1); 
    if(value[i] < 100) {
    fill(0, 200, 255, 255);
  }
    if(value[i] < 100) {
    fill(0, 200, 255, 255);
  }
  //100%//
  if(value[i] == 100) {
    fill(0, 255, 150, 255);
  }
   //80%//
  if ((value[i] > 60) && (value[i] < 100)) {
    fill(0, 250, 250, 255);
  }
  // 60% //
  if ((value[i] > 40) && (value[i] < 60)) {
    fill(0, 255, 250, 150);
  }
  // 40% //
  if ((value[i] > 1) && (value[i] < 40)) {
    fill(0, 250, 250, 70);
  }
  // 0% //
  if(value[i] < 1) {
    fill(150);
  }
    textSize(9);
    text(skills.getString(i,0), 620, y-2);
    rect(620, y, x+1, 10);//+1 to show a line when value=0
    
    
}
  endShape();
}
  
