
var skills;
angles=[];
value=[];
projectval=[];
var diameter=180;

function preload(){
  skills=loadTable("skills - 12.csv", "loaded");
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

 var lx = (320);
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
  }

beginShape();


for(var i=0; i<value.length; i++) {
    var x=map(value[i], 0, 100 , 0, 140);
    var y=map(i, 0, value.length-1, 20, 380);//y position of progress bar
    print(value[i]);

    //SKILLS TEXT//
    textSize(10);
    noStroke();
    fill(255);
    text(skills.getString(i,0), 20, y-5);

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
  rect(20,y, x+1, 10);//+1 to show a line when value=0,

}

  endShape();


 //DIVIDER LINE
 stroke(255);
line(290, 20, 290, 380);

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
    arc(width/2,height/2.7, diameter, diameter, lastAngle, lastAngle-.02 + radians(angles[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap.
    lastAngle += radians(angles[i]); //each slice starts where the last left off.
    fill(50);
    noStroke();
    ellipse(width/2,height/2.7,150,150);
  }

  beginShape();


for(var i=0; i<value.length; i++) {
    var x=map(projectval[i], 0, 100 , 0, 140);
    var y=map(i, 0, value.length-1, 20, 380);//y position of progress bar
    print(projectval[i]);

    //FINAL PROJECT TEXT//
    textSize(10);
    noStroke();
    textAlign(LEFT);
    fill(150);
    text(skills.getString(i,3), 520, y-5);


  var c=skills.getNum(i,4);
 noFill();
    if(projectval[i] < 100) {
    stroke(0, 200, 255, 255);
  }
  //100%//
  if(projectval[i] == 100) {
    fill(0, 255, 150, 255);
  }

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
  rect(520,y, x+1, 10);//+1 to show a line when value=0,

}

  endShape();


    //FINAL PROJECT//

    stroke(255, 200, 150);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(50);
    text(skills.getString(overall,4), width/2,height/2.4);
    noStroke();
    textSize(10);
    fill(255, 200, 150);
    text("overall eval", width/2,height/2.2);



  // TITLE //
    noFill();
    strokeWeight(.5);
    stroke(255, 200, 150);
    textAlign(CENTER);
    textSize(20);

    text(skills.getString(0,2), width/2,30);




}
