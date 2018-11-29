
var skills;
angles=[];
value=[];
projectval=[];
var diameter=180;

function preload(){
  skills=loadTable("skills - overall.csv", "loaded");
}

function setup() {
  createCanvas(800, 400);
  stroke(150);
  noLoop();  // Run once and stop


  var rowCount=skills.getRowCount(i,5)-1; // number of rows -1 to ignore last value (overall)
  for(var i=0; i<rowCount; i++) {
  angles[i]=360/rowCount; // number of slices = circumfrance/number of rows
  }

  overall=rowCount; // rowCount is used to determine the last item which contains the overall percentage.
  //print(overall);
  for(var i=0; i<rowCount; i++) {
  value[i]=skills.getNum(i, 1);
  }

  for(var i=0; i<rowCount; i++) {
  projectval[i]=skills.getNum(i, 4);

  }
}

function draw() {

  background(50);
  pieChart(diameter, angles);
  drawProject(diameter, angles);
  drawLegend();
  fill(50);
  noStroke();

//LEGEND//
function drawLegend() {

 var lx = (20);
 var ly = (280);
 textAlign(LEFT);
 fill(200);
 textSize(12);
 noStroke();
 text("LEGEND", lx, ly);

  //0%//
 stroke(150);
 fill(50);
 rect(lx, ly+90, 10, 10);
 noStroke();
 fill(150);
 text("0%", lx+20, ly+100);

  //40%//
 fill(0, 200, 250, 100);
 rect(lx, ly+70, 10, 10);
 text("1% - 50%", lx+20, ly+80);

  //60%//
 fill(0, 255, 250, 150);
 rect(lx, ly+50, 10, 10);
 text("50% - 70%", lx+20, ly+60);

  //80%//
 fill(0, 255, 240, 255);
 rect(lx, ly+30, 10, 10);
 text("70% - 90%", lx+20, ly+40);

  //100%//
 fill(0, 255, 150, 255);
 rect(lx, ly+10, 10, 10);
 text("100%", lx+20, ly+20);

// DIVIDER LINES //
 stroke(255);
 line(400, 0, 400, 400);
 line(400, 270, 800, 270);
 //CURRENT ASSIGNMENT//
 //stroke(255);
 //line(210, 205, 380, 205);
}
}

//SKILLS//

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


  //OVERALL PIECHART//
  noStroke();
    arc(width/7,height/2.7, diameter, diameter, lastAngle, lastAngle-.02 + radians(angles[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap.
    lastAngle += radians(angles[i]); //each slice starts where the last left off.


  }

beginShape();


for(var i=0; i<value.length; i++) {
    var x=map(value[i], 0, 100 , 0, 140);
    var y=map(i, 0, value.length-1, 80, 300);//y position of progress bar
    print(value[i]);

    //SKILLS TEXT//
    textSize(10);
    noStroke();
    fill(150);
    text(skills.getString(i,0), 230, y-5);


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
  if ((value[i] > 50) && (value[i] < 70)) {
    fill(0, 255, 250, 150);
  }
  // 40% //
  if ((value[i] > 1) && (value[i] < 50)) {
    fill(0, 200, 250, 100);
  }
  // 0% //
  if(value[i] < 1) {
    fill(150);
  }

  noFill();
  stroke(255, 200, 150);
  strokeWeight(.7);
  rect(230,y, x+1, 10);//+1 to show a line when value=0,

}

  endShape();

  //OVERALL PERCENT//
    fill(50);
    noStroke();
    ellipse(width/7,height/2.7,150,150);
    stroke(255, 200, 150);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(50);
    text(skills.getString(overall,1), width/7,height/2.4);
  

  // TITLE //
    stroke(255, 200, 150);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(20);
    text(skills.getString(0,2), width/4,30);

}

//FINAL PROJECT//

function drawProject(diameter, data) {
  noStroke();
  var lastAngle = PI+HALF_PI; // start at 12 o'clock
  //change color / slice//
  for (var i = 0; i < data.length; i++) {

  if(projectval[i] < 100) {
    fill(0, 200, 255, 255);
  }
  //100%//
  if(projectval[i] == 100) {
    fill(0, 255, 150, 255);
  }
   //80%//
  if ((projectval[i] > 70) && (projectval[i] < 100)) {
    fill(0, 250, 250, 255);
  }
  // 60% //
  if ((projectval[i] > 50) && (projectval[i] < 70)) {
    fill(0, 255, 250, 150);
  }
  // 40% //
  if ((projectval[i] > 1) && (projectval[i] < 50)) {
    fill(0, 250, 250, 70);
  }
  // 0% //
  if(projectval[i] < 1) {
    fill(150);
  }

  //OVERALL PIECHART//
    arc(width/1.34,height/2.7, diameter, diameter, lastAngle, lastAngle-.02 + radians(angles[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap.
    lastAngle += radians(angles[i]); //each slice starts where the last left off.

  }

  //FINAL PROJECT//
    fill(50);
    ellipse(width/1.34,height/2.7,150,150);
    stroke(255, 200, 150);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(50);
    text(skills.getString(overall,4), width/1.33,height/2.4);
   

  // TITLE //
    stroke(255, 200, 150);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(20);
    text(skills.getString(0,5), width/1.33,30);
  
  //PARTICIPATION / TEACHER's SCALE //
 // textAlign(LEFT);
 //  text(skills.getString(3,9), width/1.83,320);
  // text(skills.getString(4,9), width/1.83,360);
  
  //PERCENTAGES
 // stroke(255);
  //text(skills.getString(3,11), width/1.2,320);
  //text("/ 20", width/1.15,320);
  //text(skills.getString(4,11), width/1.2,360);
  //text("/ 10", width/1.15,360);
  
    textSize(12);
    noStroke();
    fill(150);
    textAlign(CENTER);
    text("of tasks completed", width/7,height/2.2);
    //text("30% of your mark", width/1.34,height/2.2);
   // text("20% of your mark", width/1.65,335);
    //text("10% of your mark", width/1.65,375);
    
  /* TERM 1 MARK
    text(skills.getString(2,12), width/1.54,300);
    text(skills.getString(3,12), width/1.2,300);
    text(skills.getString(0,12), width/1.53,330);
    text(skills.getString(1,12), width/1.2,330);
*/
  textSize(10);
  noStroke();
  fill(150);
  textAlign(LEFT);
   
  //NOTES//
 // text(skills.getString(1,15), width/1.83,350);
  //CATEGORIES

  //text(skills.getString(0,12), width/1.5,365);
 // text(skills.getString(1,11), width/1.2,380);


  //text(skills.getString(4,10), width/1.35,375);
 
  
}
