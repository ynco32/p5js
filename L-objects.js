function setup() {
  canvasWidth=windowWidth
  canvasHeight=windowHeight
  createCanvas(windowWidth, windowHeight);
  background(255);
}

let t = 0;
let mode = 'RECT'

function draw() {
  randomSeed(0);
  

  fill(0);
  strokeWeight(3);
  fill(179,50,60);
  rect(0, canvasHeight/2, canvasWidth, canvasHeight/2); 
  let x, y;
  let delta = map(mouseX, 20, windowWidth, 10, 100);
  if (mouseX<canvasWidth/2 && mouseY>canvasHeight/2){
    for (y=canvasHeight/2; y<canvasHeight; y+=delta){
      for (x=0; x<canvasWidth/2; x+=delta){
        let r = random(0,1)
        if (r<0.5){
          line(x,y,x+delta, y+delta);
      } else {
          line(x+delta, y, x, y+delta);
        }
      }
    }
    for (y=canvasHeight/2; y<canvasHeight; y+=delta){
      for (x=0; x<canvasWidth/2; x+=delta){
        let r = random(0,1)
        if (r<0.5){
          line(x,y,x+delta, y+delta);
      } else {
          line(x+delta, y, x, y+delta);
        }
      }
    } 
  } else {
      rect(0, canvasHeight/2, canvasWidth, canvasHeight/2);
    }


  
  fill(71, 192, 255);
  rect(0, 0,canvasWidth, canvasHeight/2);
  if (mouseX<canvasWidth/2 && mouseY<canvasHeight/2){
    for (y=0; y<canvasHeight/2; y+=delta){
      for (x=0; x<canvasWidth/2; x+=delta){
        let r1= random(0,1);
        if(r1 < 0.5){
          line(x,y,x+delta, y+delta);
       } else { 
         line(x+delta, y, x, y+delta);
           }
         }
      }
      } else {
      rect(0, 0,canvasWidth, canvasHeight/2)
    }
    

  fill(255,251,122);
  rect(canvasWidth/2, 0, canvasWidth, canvasHeight/2);
  if (mouseX>canvasWidth/2 && mouseY<canvasHeight/2){
    for (x = canvasWidth/2; x <= canvasWidth; x+=delta) {
      for (y = 0; y <= canvasHeight/2; y+=delta) {
        const xAngle = map(mouseX, 0, width,  PI, 8 * PI, true);
        const yAngle = map(mouseY, 0, height,  PI, 8 * PI, true);
        const angle = xAngle * (x / canvasWidth/2) + yAngle * (y / canvasHeight/2);
        const myX = x + 10 * cos(2 * PI * t + angle);
        const myY = y + 10 * sin(2 * PI * t + angle);
      noStroke();
        let c1=random(230,255);
      fill(c1);
      switch (mode) {
        case 'RECT': rect (myX, myY, 20, 20);
        break;
        case 'ELLIPSE': ellipse(myX, myY, 20);
        break;
        }
      }
    }
  } else {
    rect(canvasWidth/2, 0, canvasWidth, canvasHeight/2);
  }
  t = t + 0.01;

  
  
  
  fill(113,255,87);
  noStroke()
  rect(canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2);
  if (mouseX>canvasWidth/2 && mouseY>canvasHeight/2){
    for (y=canvasHeight/2; y<canvasHeight; y+=delta){
      for (x=canvasWidth/2; x<canvasWidth; x+=delta){
        let r2 = random(0,1);
        let c2 = random(230,255);
        fill(c2)
        if (0 <= r2 < 0.25){
          triangle(x, y, x, y+delta, x+delta, y+delta);
       } 
        if (0.25 <= r2 < 0.5) { 
          triangle(x,y, x+delta, y, x+delta, y+delta);
           }
        if ( 0.5 <= r2 < 0.75){
          triangle(x+delta, y, x+delta, y+delta, x, y+delta);
         }
        else {
          triangle(x,y, x, y+delta, x+delta, y);
      }
      }
    }
  }else {
rect(canvasWidth/2, canvasHeight/2, canvasWidth/2, canvasHeight/2);
      }
    
  
  
  
  noStroke();
  fill(67,59,179);
  rect(canvasWidth/2 - 500, canvasHeight/2 - 60 , 1000, 120, 30)
  fill(255);
  textSize(40);
  text("Title of the page", canvasWidth/7*3, canvasHeight/2+15);
  textSize(15);
  text("PhoneNumber",canvasWidth/7*2, canvasHeight/2-10);
  text("010.1234.5678",canvasWidth/7*2, canvasHeight/2+20);
  text("Email Adress",canvasWidth/7*5, canvasHeight/2-10);
  text("xxx@xxx.com",canvasWidth/7*5, canvasHeight/2+20);
  stroke(255);
}

function keyPressed(){
  switch(key){
    case '1': mode = "RECT";
    break;
    case '2' : mode = "ELLIPSE";
    break;
    default: mode = "NONE"
    break;
  }
  print(mode);
}
