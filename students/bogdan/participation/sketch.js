
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
  skills=loadTable("skills - overall.csv", "loaded");
}

function setup() {
  createCanvas(800, 550);
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
  value[i]=skills.getNum(i, 7);

  }
}

function draw() {
  background(50);
  noStroke();
  pieChart(diameter, angles);
  fill(50);
  ellipse(width/1.5,height/2.5,250,250);

//OVERALL PERCENT//
  stroke(255, 200, 150);
  textAlign(CENTER);
  textSize(80);
  text(skills.getString(overall,7), width/1.5,250);



// STUDENT NAME & TITLE //
  textAlign(CENTER);
  //fill(0, 255, 150, 255);
  textSize(24);
  text(skills.getString(0,8), width/1.5,30);

  // FEEDBACK //
    textAlign(LEFT);
    noStroke();
    fill(255, 200, 150);
    textSize(12);
    fill(200);
    text(skills.getString(0,14), 35,410);
    text(skills.getString(1,14), 35,430);
    text(skills.getString(2,14), 35,450);
    text(skills.getString(3,14), 35,470);
    text(skills.getString(4,14), 35,490);
    text(skills.getString(5,14), 35,510);
    text(skills.getString(6,14), 35,530);
    text(skills.getString(7,14), 35,550);
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
  if ((value[i] > 70) && (value[i] < 100)) {
    fill(0, 250, 250, 255);
  }
  // 60% //
  if ((value[i] > 50) && (value[i] < 70)) {
    fill(0, 255, 250, 150);
  }
  // 40% //
  if ((value[i] > 1) && (value[i] < 50)) {
    fill(0, 250, 250, 70);
  }
  // 0% //
  if(value[i] < 1) {
    fill(150);
  }


  //draw slices//
    arc(width/1.5, height/2.5, diameter, diameter, lastAngle, lastAngle-.02 + radians(angles[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap.
    lastAngle += radians(angles[i]); //each slice starts where the last left off.
  }

beginShape();


for(var i=0; i<value.length; i++) {

    var x=map(17, 10, 100 , 0, 140);
    var y=map(i, 0, value.length, 20, 400);//y position of progress bar
    print(value[i]);

  var c=skills.getNum(i,1);
    if(value[i] < 100) {
    //stroke(255)
    fill(0, 200, 255, 255);
  }

  //100%//
    if(value[i] < 100) {
    fill(0, 200, 255, 255);
  }
  //100%//
  if(value[i] == 100) {
    fill(0, 255, 150, 255);
  }
   //80%//
  if ((value[i] > 70) && (value[i] < 100)) {
    fill(0, 250, 250, 255);
  }
  // 60% //
  if ((value[i] > 50) && (value[i] < 70)) {
    fill(0, 255, 250, 150);
  }
  // 40% //
  if ((value[i] > 1) && (value[i] < 50)) {
    fill(0, 250, 250, 70);
  }
  // 0% //
  if(value[i] < 1) {
    fill(150);
  }

  rect(50, y, x+1, 12);x

}
  endShape()

  for(var i=0; i<value.length; i++) {
  var y=map(i, 0, value.length, 20, 400);//y position of progress bar descriptors
  textSize(10);
  text(skills.getString(i,6), 80, y+10);
  }
}
