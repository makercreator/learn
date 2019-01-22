
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
 rect(lx, ly+10, 10, 10);
 noStroke();
 fill(150);
 text("0%", lx+20, ly+20);

  //1 - 50%//
 fill(0, 200, 250, 100);
 rect(lx, ly+30, 10, 10);
 text("1% - 50%", lx+20, ly+40);

  //60%//
 fill(0, 255, 250, 150);
 rect(lx, ly+50, 10, 10);
 text("50% - 80%", lx+20, ly+60);

  //80%//
 fill(0, 255, 240, 255);
 rect(lx, ly+70, 10, 10);
 text("80% - 99%", lx+20, ly+80);

  //100%//
 fill(0, 255, 150, 255);
 rect(lx, ly+90, 10, 10);
 text("100%", lx+20, ly+100);

// DIVIDER LINES //
 stroke(255);
 line(400, 0, 400, 400);
// line(400, 270, 800, 270);
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
   //80-99%//
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
    var y=map(i, 0, value.length-1, 80, 380);//y position of progress bar
    print(value[i]);

    //SKILLS TEXT//
    textSize(10);
    noStroke();
    fill(150);
    text(skills.getString(i,0), 230, y-5);

//PROGRESS BARS//

  var c=skills.getNum(i,1);

    if(value[i] < 100) {
    stroke(0, 200, 255, 255);
  }
  noFill();
  //100%//
  if(value[i] == 100) {
    fill(0, 255, 150, 255);
  }
   //70-90%//
  if ((value[i] > 70) && (value[i] < 100)) {
    stroke(0, 250, 250, 255);
  }
  // 60% //
  if ((value[i] > 50) && (value[i] < 70)) {
    stroke(0, 255, 250, 150);
  }
  // 1 -50% //
  if ((value[i] > 1) && (value[i] < 50)) {
    stroke(0, 200, 250, 100);
  }
  // 0% //
  if(value[i] < 1) {
    stroke(150);
  }

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
    textSize(12);
    noStroke();
    fill(255, 200, 150);
    text("complete", width/7,height/2.2);


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
   //80% - 99%//
  if ((projectval[i] > 70) && (projectval[i] < 100)) {
    fill(0, 250, 250, 255);
  }
  // 50 - 80% //
  if ((projectval[i] > 50) && (projectval[i] < 70)) {
    fill(0, 255, 250, 150);
  }
  // 1 - 50% //
  if ((projectval[i] > 1) && (projectval[i] < 50)) {
    fill(0, 250, 250, 70);
  }
  // 0% //
  if(projectval[i] < 1) {
    fill(150);
  }

  //OVERALL PIECHART//
    arc(width/1.55,height/2.7, diameter, diameter, lastAngle, lastAngle-.02 + radians(angles[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap.
    lastAngle += radians(angles[i]); //each slice starts where the last left off.

  }
  
  beginShape();


for(var i=0; i<value.length; i++) {
    var x=map(projectval[i], 0, 100 , 0, 140);
    var y=map(i, 0, value.length-1, 80, 380);//y position of progress bar
    print(projectval[i]);

    //FINAL PROJECT TEXT//
    textSize(10);
    noStroke();
    textAlign(LEFT);
    fill(150);
    text(skills.getString(i,3), 630, y-5);


  var c=skills.getNum(i,4);

    if(projectval[i] < 100) {
    stroke(0, 200, 255, 255);
  }
  //100%//
  if(projectval[i] == 100) {
    fill(0, 255, 150, 255);
  }
  noFill();
   //80 - 99%//
  if ((projectval[i] > 70) && (projectval[i] <= 99)) {
    stroke(0, 250, 250, 255);
  }
  // 50 - 80% //
  if ((projectval[i] > 50) && (projectval[i] < 70)) {
    stroke(0, 255, 250, 150);
  }
  // 1 - 50% //
  if ((projectval[i] > 1) && (projectval[i] < 50)) {
    stroke(0, 200, 250, 100);
  }
  // 0% //
  if(projectval[i] < 1) {
    stroke(150);
  }

  strokeWeight(.7);
  rect(630,y, x+1, 10);//+1 to show a line when value=0,

}

  endShape();
  
  
  

  //FINAL PROJECT//
    fill(50);
    noStroke();
    ellipse(width/1.55,height/2.7,150,150);
    stroke(255, 200, 150);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(50);
    text(skills.getString(overall,4), width/1.55,height/2.4);
    noStroke();
    textSize(10);
    fill(255, 200, 150);
    text("complete", width/1.55,height/2.2);


   
   /* //CURRENT AVERAGE//
    stroke(255);
    text(skills.getString(1,12), width/1.13,360);
*/
  // TITLE //
    noFill();
    strokeWeight(.5);
    stroke(255, 200, 150);
    textAlign(CENTER);
    textSize(20);
    text(skills.getString(0,5), width/1.33,30);
    text(skills.getString(0,2), width/4,30);

    
  // TERM 1 MARK//
  /*text(skills.getString(0,12), width/1.33,300);
  textSize(10);
  noStroke();
  fill(150);
  textAlign(LEFT);
  text(skills.getString(1,9), width/1.9,330);
  text(skills.getString(2,9), width/1.9,345);
  text(skills.getString(3,9), width/1.9,360);
  text(skills.getString(4,9), width/1.9,375);
  fill(255, 200, 150);
  text(skills.getString(1,10), width/1.35,330);
  text(skills.getString(2,10), width/1.35,345);
  text(skills.getString(3,10), width/1.35,360);
  text(skills.getString(4,10), width/1.35,375);
  */
  
}
