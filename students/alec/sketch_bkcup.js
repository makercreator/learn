
var skills;

anglesB=[];
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


  var rowCountB=skills.getRowCount(i,5)-1; // number of rows -1 to ignore last value (overall)
  for(var i=0; i<rowCountB; i++) {
  anglesB[i]=360/rowCountB; // number of slices = circumfrance/number of rows
  }

  final=rowCountB; // rowCount is used to determine the last item which contains the overall percentage.
  //print(overall);
  for(var i=0; i<rowCountB; i++) {
  projectval[i]=skills.getNum(i, 4);
  }


}

function draw() {

  background(50);
  drawProject(diameter, anglesB);
  drawLegend();
  drawDivider();
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

// DIVIDER LINES //
 stroke(255);
 line(400, 0, 400, 400);
 line(400, 300, 800, 300);
}
}





//FINAL PROJECT//

function drawProject(diameter, data,) {
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
  if ((projectval[i] > 60) && (projectval[i] < 100)) {
    fill(0, 250, 250, 255);
  }
  // 60% //
  if ((projectval[i] > 40) && (projectval[i] < 60)) {
    fill(0, 255, 250, 150);
  }
  // 40% //
  if ((projectval[i] > 1) && (projectval[i] < 40)) {
    fill(0, 250, 250, 70);
  }
  // 0% //
  if(projectval[i] < 1) {
    fill(150);
  }

  //OVERALL PIECHART//
    arc(width/1.34,height/2.7, diameter, diameter, lastAngle, lastAngle-.02 + radians(anglesB[i])); // divides the pie chart based on how many rows in excell. .02 adds a gap.
    lastAngle += radians(anglesB[i]); //each slice starts where the last left off.


  }

  //FINAL PROJECT//
    fill(50);

    ellipse(width/1.34,height/2.7,150,150);
    stroke(255, 200, 150);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(50);
    text(skills.getString(final,4), width/1.33,height/2.4);

  // TITLE //
    stroke(255, 200, 150);
    strokeWeight(1.5);
    textAlign(CENTER);
    textSize(20);
    text(skills.getString(0,5), width/1.33,30);
}
