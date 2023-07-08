const max_rainDrops = 1500;
const max_dogBones = 300;
let rainDrops = [];
let dogBones =[];
let dogSound;
let locAdress;
let sel;
let img;

class rainDrop {
  constructor(x, y, vx, vy, sz, c) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.sz = sz;
    this.c = c;
    }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > windowWidth)
      this.x = 0;
    if (this.y > windowHeight) 
      this.y = 0;
    if (windowWidth/3 < mouseX && mouseX< windowWidth/10*8)
      if(mouseY>windowHeight/18*7){
        let xdif = abs(this.x - mouseX-10);
        if (xdif < 100 + random(-100, 100)) {
          if ((this.y - mouseY) > random(-100, 100)) {
            this.y = 0;
          } 
        }
      }
                         
  }
  render() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, 1, this.sz);
  }
}


class dogBone {
  constructor(x, y, vx, vy, sz, c) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.sz = sz;
    this.c = c;
    }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x<0 || this.x>windowWidth) 
      this.vx = -this.vx;
    if (this.y<0 || this.y>windowHeight) 
      this.vy = -this.vy;
  }
  render() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, 10, 10);
    ellipse(this.x, this.y+7, 10,10);
    rect(this.x+3, this.y-1, 20, 10);
    ellipse(this.x+20, this.y, 10,10);
    ellipse(this.x+20, this.y+7,10,10);
  }
}


function preload() {
  dogSound = loadSound('Little-dog-barking-sound.mp3');
  img = loadImage('puppy.png');
}


function setup() { 
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(canvasPressed);
  

  adopt=createButton('Adopt');
  adopt.position(windowWidth/10*8 - 100, windowHeight/7*5 + 10);
  adopt.mousePressed(linkPage);
  
  sel=createSelect('location');
  sel.position(windowWidth/10*8 - 100, windowHeight/7*5+30);
  sel.option('Seoul');
  sel.option('Daejeon');
  sel.option('Chungnam');
  sel.option('ChungBuk');
  sel.changed(locationChange);
  
  for (let i = 0; i < max_rainDrops; i++) {
    rainDrops[i] = new rainDrop(
    random(0, windowWidth), //x
    random(0, windowHeight), //y
    random(0, 5), // vx
    random(10, 100), //vy
    random(10, 50), //sz
    color (100, (random(100, 100)), (random(150, 255)))) ; //c
}
  
  for (let i = 0; i < max_dogBones; i++) {
    dogBones[i] = new dogBone(
      random(0, windowWidth),
      random(0, windowHeight),
      random(1, 5),
      random(1, 5),
      random(5, 10),
      color(random(150,255))
      )
}
}


function draw() {
  background(137, 206, 113, 200);
  
  fill(0)
  textSize(32);
  textAlign(CENTER);
  textStyle(BOLD);
  text("DO NOT BUY, ADOPT",windowWidth/2, windowHeight/4);
  fill(55);
  textSize(15);
  textAlign(CENTER);
  textStyle(ITALIC);
  text("Press ENTER and find bones to help puppy", windowWidth/2, windowHeight/4+30);

  fill(157, 150, 255, 100);
  ellipse(windowWidth/2, windowHeight/6*5, windowWidth*1.5, windowHeight/2, 1000);
  
  fill(255, 123, 132);
  triangle(windowWidth/20*13, windowHeight/20*11, windowWidth/20*9, windowHeight/7*5, windowWidth/20*17, windowHeight/7*5);
  
  fill(255, 198, 186);
  rect(windowWidth/10*5, windowHeight/7*5, windowWidth/10*3, windowHeight/7*3);

  fill(60);
  rect(windowWidth/30*17, windowHeight/14*11, windowWidth/30*5, windowHeight/14*5, 60, 60, 0,0);
  
  image(img,windowWidth/30*10, windowHeight/22*17 +10, windowWidth/27*5, windowHeight/22*5);

  
  for (let drop of rainDrops) {
    drop.move();
    drop.render();
}
  
  if (keyIsPressed)
    if (ENTER){ 
      rainDrops = [];
      for (let bone of dogBones){
        bone.move();
        bone.render();
      }
      if (mouseIsPressed) { window.open("https://www.instagram.com/stories/highlights/18082524439161205/");
  }
}
}

function locationChange(){
  let item = sel.value();
}


function linkPage(){
  let item=sel.value();
  if (item == "Seoul") {locAdress = "http://www.saac.kr/?act=board&bbs_code=sub2_1";}
  else if (item == "Daejeon") {locAdress = "https://www.daejeon.go.kr/ani/index.do";}
  else if (item == "Chungnam") {locAdress = "http://dangjinpet.com/";}
  else {locAdress = "https://www.instagram.com/gunsan_animalbaby";}
  window.open(locAdress);
}

function canvasPressed(){
  dogSound.play()
}


            