
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
  createCanvas(800, 400);
  stroke(150);
  noLoop();  // Run once and stop


  var rowCount=skills.getRowCount()-1; // number of rows -1 to ignore last value (overall)
  for(var i=0; i<rowCount; i++) {
  angles[i]=360/rowCount; // number of slices = circumfrance/number of rows
  }


  overall=rowCount; // rowCount is used to determine the last item which contains the overall percentage.
  //print(overall);
  for(var i=0; i<rowCount; i++) {
  value[i]=skills.getNum(i, 1);
  }
}

function draw() {
  background(50);
  noStroke();
  pieChart(diameter, angles);
  //info(320, angles); // For info text
  fill(50);
  ellipse(width/1.5,height/2,250,250);


  //OVERALL PERCENT//
    fill(150);
    textAlign(CENTER);
    textSize(80);
    text(skills.getString(overall,1), width/1.5,225);

  // STUDENT NAME & TITLE //
    textAlign(CENTER);
    fill(200);
    textSize(24);
    text(skills.getString(0,2), width/1.5,30);

 var lx = (710);
 var ly = (250);
 textAlign(LEFT);
 fill(200);
 textSize(12);
 text("LEGEND", lx, ly);

  //0%//
 fill(150);
 rect(lx, ly+10, 10, 10);
 text("0%", lx+20, ly+20);


  //40%//
 fill(0, 200, 250, 100);
 rect(lx, ly+30, 10, 10);
 text("1% - 50%", lx+20, ly+40);

  //60%//
 fill(0, 255, 250, 150);
 rect(lx, ly+50, 10, 10);
 text("50% - 70%", lx+20, ly+60);

  //80%//
 fill(0, 255, 240, 255);
 rect(lx, ly+70, 10, 10);
 text("70% - 90%", lx+20, ly+80);

  //100%//
 fill(0, 255, 150, 255);
 rect(lx, ly+90, 10, 10);
 text("100%", lx+20, ly+100);
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
  if ((value[i] > 50) && (value[i] < 69)) {
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
    arc(width/1.5,height/2, diameter, diameter, lastAngle, lastAngle-.02 + radians(angles[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap.
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
  if ((value[i] > 70) && (value[i] < 100)) {
    fill(0, 250, 250, 255);
  }
  // 60% //
  if ((value[i] > 50) && (value[i] < 69)) {
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
    textSize(10);
    text(skills.getString(i,0), 50, y-5);
    rect(50, y, x+1, 10);//+1 to show a line when value=0


}
  endShape();
}
