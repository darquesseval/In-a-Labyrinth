let tryAgainX;
let tryAgainY;
let tryAgainWidth;
let tryAgainHeight
let sniglet;
let sound;
let soundLose;
let soundWin;
let soundDoor1;
let soundDoor2

let world1;
let world1Background
let xworld1 = -100;
let yworld1 = -870;
let bottomworld1 = -3360;
let topworld1 = -170;
let rightworld1 = -3280;
let leftworld1 = -100;

let mushrooms;
let mushroomssheet;
let mushroomsgrit;
let mushroomsanimation = [];

let npcsheet;
let npcsadsheet;
let npcgrit;
let npcanimation = [];
let npcsadanimation = [];
let npcsad;


let v = 8;
let npcvNoBounce = 5;

let xverticalnpc1 = 2912;
let yverticalnpc1 = 1566;
let verticalnpc1;
let vverticalnpc1 = npcvNoBounce;

let xverticalnpc2 = 2808;
let yverticalnpc2 = 2030;
let verticalnpc2;
let vverticalnpc2 = npcvNoBounce;

let xverticalnpc3 = 288;
let yverticalnpc3 = 622;
let verticalnpc3;
let vverticalnpc3 = npcvNoBounce;

let xverticalnpc4 = 1392;
let yverticalnpc4 = 446;
let verticalnpc4;
let vverticalnpc4 = npcvNoBounce;

let xhorizontalnpc1 = 1528;
let yhorizontalnpc1 = 2597;
let horizontalnpc1;
let vhorizontalnpc1 = npcvNoBounce;

let xhorizontalnpc2 = 1704;
let yhorizontalnpc2 = 1760;
let horizontalnpc2;
let vhorizontalnpc2 = npcvNoBounce;

let xhorizontalnpc3 = 1120;
let yhorizontalnpc3 = 1934;
let horizontalnpc3;
let vhorizontalnpc3 = npcvNoBounce;

let xhorizontalnpc4 = 2112;
let yhorizontalnpc4 = 2597;
let horizontalnpc4;
let vhorizontalnpc4 = npcvNoBounce;

let xhorizontalnpc5 = 2240;
let yhorizontalnpc5 = 622;
let horizontalnpc5;
let vhorizontalnpc5 = npcvNoBounce;

let doorKey;
let doorKeysheet;
let xdoorKey = 3000;
let ydoorKey = 3060;

let door;
let doorsheet;
let xdoor = 2360;
let ydoor = 2063;

let herosheet;
let herogrit;
let heroanimation = [];
let hero;
let hynofloat = 320;
let hy = hynofloat;
let hx = 60;
let floatup = true;
let float = 0;

let gameOver = false;
let gotKey = false;
let doorOpened = false;
let stepOne = false;
let findKeyWarning = false;
let start = true;

function preload() {
  sound = loadSound('zz_Sound/Duck_Music.mp3')
  soundLose = loadSound('zz_Sound/Bad.flac');
  soundWin = loadSound('zz_Sound/Win.flac');
  soundDoor1 = loadSound('zz_Sound/door.wav');
  soundDoor2 = loadSound('zz_Sound/door_squeak.wav')
  sniglet = loadFont('zz_Fonts/Sniglet-Regular.ttf');
  world1 = loadImage('zz_Objekte/World1.png');
  world1Background = loadImage('zz_Objekte/World1_background.png')
  //mushrooms
  mushroomssheet = loadImage('zz_Objekte/mushrooms.png');
  mushroomsgrit = loadJSON('zz_Objekte/mushrooms_grit.json')
  //keyguard1
  npcgrit = loadJSON('zz_Objekte/keyguard1_grit.json');
  npcsheet = loadImage('zz_Objekte/keyguard1.png');
  npcsadsheet = loadImage('zz_Objekte/keyguard1_sad.png');
  //hero
  herogrit = loadJSON('zz_Objekte/hero_grit.json');
  herosheet = loadImage('zz_Objekte/hero.png');
  //key
  doorKeysheet = loadImage('zz_Objekte/key.png');
  //door
  doorsheet = loadImage('zz_Objekte/door.png');
}


function setup() {
  let cnv = createCanvas(900, 700);
  cnv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2)
  frameRate(40);
  ellipseMode(CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
  textFont(sniglet);

  tryAgainX = width * 0.5;
  tryAgainY = height * 0.65;
  tryAgainWidth = 300;
  tryAgainHeight = 80;

  hero = new Character(hero, herosheet, herogrit, heroanimation);
  hero.animate();

  doorKey = new Character(doorKey, doorKeysheet);

  door = new Character(door, doorsheet);

  mushrooms = new Character(mushrooms, mushroomssheet, mushroomsgrit, mushroomsanimation);
  mushrooms.animate();

  verticalnpc1 = new Character(verticalnpc1, npcsheet, npcgrit, npcanimation);
  verticalnpc1.animate();

  verticalnpc2 = new Character(verticalnpc2, npcsheet, npcgrit, npcanimation);
  verticalnpc2.animate();

  verticalnpc3 = new Character(verticalnpc3, npcsheet, npcgrit, npcanimation);
  verticalnpc3.animate();

  verticalnpc4 = new Character(verticalnpc4, npcsheet, npcgrit, npcanimation);
  verticalnpc4.animate();

  horizontalnpc1 = new Character(horizontalnpc1, npcsheet, npcgrit, npcanimation);
  horizontalnpc1.animate();

  horizontalnpc2 = new Character(horizontalnpc2, npcsheet, npcgrit, npcanimation);
  horizontalnpc2.animate();

  horizontalnpc3 = new Character(horizontalnpc3, npcsheet, npcgrit, npcanimation);
  horizontalnpc3.animate();

  horizontalnpc4 = new Character(horizontalnpc4, npcsheet, npcgrit, npcanimation);
  horizontalnpc4.animate();

  horizontalnpc5 = new Character(horizontalnpc5, npcsheet, npcgrit, npcanimation);
  horizontalnpc5.animate();

  npcsad = new Character(npcsad, npcsadsheet, npcgrit, npcsadanimation);
  npcsad.animate();
}

function draw() {
  background(255);

  //background
  image(world1, xworld1, yworld1);
  image(world1Background, xworld1, yworld1);
  mushrooms.draw(xworld1, yworld1, 'with');


  //door
  door.draw(xdoor + xworld1, ydoor + yworld1, 'without');

  //hero
  hero.draw(hx, hy, 'with');

  //hero float
  hy += sin(float) * 3;
  if (floatup == true) {
    float += v
    if (float >= 50) {
      floatup = false;
    }
  } else {
    float -= v
    if (float <= -50) {
      floatup = true;
    }
  }

  //navigation
  hero.touchingColor(hynofloat);

  if (hero.blockright == false) {
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      if (hx <= width / 2 - hero.width / 2) {
        hx += v;
      } else if (xworld1 <= rightworld1 + width + 100 && hx >= width / 2 - hero.width / 2) {
        hx += v;
      } else {
        xworld1 -= v;
      }
    }
  }

  if (hero.blockleft == false) {
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      if (hx <= width / 2 - hero.width / 2 && xworld1 >= leftworld1) {
        hx -= v;
      } else if (hx >= width / 2 - hero.width / 2) {
        hx -= v;
      } else {
        xworld1 += v;
      }
    }
  }

  if (hero.blocktop == false) {
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
      if (hy >= height / 2 - hero.height / 2) {
        hy -= v;
        hynofloat -= v;
      } else if (yworld1 > topworld1 && hy <= height / 2 - hero.height / 2) {
        hy -= v;
        hynofloat -= v;
      } else {
        yworld1 += v;
      }
    }
  }
  if (hero.blockbottom == false) {
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      if (hy <= height / 2 - hero.height / 2) {
        hy += v;
        hynofloat += v;
      } else if (yworld1 < bottomworld1 + height + 50 && hy >= height / 2 - hero.height / 2) {
        hy += v;
        hynofloat += v;
      } else {
        yworld1 -= v;
      }
    }
  }

  //verticalnpc1
  verticalnpc1.draw(xverticalnpc1 + xworld1, yverticalnpc1 + yworld1, 'with')
  verticalnpc1.touchingColor(verticalnpc1.y);
  yverticalnpc1 += vverticalnpc1;

  //verticalnpc1 bounce
  if (verticalnpc1.blockbottom == true) {
    vverticalnpc1 = npcvNoBounce * -1;
  }
  if (verticalnpc1.blocktop == true) {
    vverticalnpc1 = npcvNoBounce;
  }

  //verticalnpc2
  verticalnpc2.draw(xverticalnpc2 + xworld1, yverticalnpc2 + yworld1, 'with')
  verticalnpc2.touchingColor(verticalnpc2.y);
  yverticalnpc2 += vverticalnpc2;

  //verticalnpc2 bounce
  if (verticalnpc2.blockbottom == true) {
    vverticalnpc2 = npcvNoBounce * -1;
  }
  if (verticalnpc2.blocktop == true) {
    vverticalnpc2 = npcvNoBounce;
  }

  //verticalnpc3
  verticalnpc3.draw(xverticalnpc3 + xworld1, yverticalnpc3 + yworld1, 'with')
  verticalnpc3.touchingColor(verticalnpc3.y);
  yverticalnpc3 += vverticalnpc3;

  //verticalnpc3 bounce
  if (verticalnpc3.blockbottom == true) {
    vverticalnpc3 = npcvNoBounce * -1;
  }
  if (verticalnpc3.blocktop == true) {
    vverticalnpc3 = npcvNoBounce;
  }

  //verticalnpc4
  verticalnpc4.draw(xverticalnpc4 + xworld1, yverticalnpc4 + yworld1, 'with')
  verticalnpc4.touchingColor(verticalnpc4.y);
  yverticalnpc4 += vverticalnpc4;

  //verticalnpc4 bounce
  if (verticalnpc4.blockbottom == true) {
    vverticalnpc4 = npcvNoBounce * -1;
  }
  if (verticalnpc4.blocktop == true) {
    vverticalnpc4 = npcvNoBounce;
  }

  //horizontalnpc1
  horizontalnpc1.draw(xhorizontalnpc1 + xworld1, yhorizontalnpc1 + yworld1, 'with');
  horizontalnpc1.touchingColor(horizontalnpc1.y);
  xhorizontalnpc1 += vhorizontalnpc1;

  //horizontalnpc1 bounce
  if (horizontalnpc1.blockright == true) {
    vhorizontalnpc1 = npcvNoBounce * -1;
  }
  if (horizontalnpc1.blockleft == true) {
    vhorizontalnpc1 = npcvNoBounce;
  }

  //horizontalnpc2
  horizontalnpc2.draw(xhorizontalnpc2 + xworld1, yhorizontalnpc2 + yworld1, 'with');
  horizontalnpc2.touchingColor(horizontalnpc2.y);
  xhorizontalnpc2 += vhorizontalnpc2;

  //horizontalnpc2 bounce
  if (horizontalnpc2.blockright == true) {
    vhorizontalnpc2 = npcvNoBounce * -1;
  }
  if (horizontalnpc2.blockleft == true) {
    vhorizontalnpc2 = npcvNoBounce;
  }

  //horizontalnpc3
  horizontalnpc3.draw(xhorizontalnpc3 + xworld1, yhorizontalnpc3 + yworld1, 'with');
  horizontalnpc3.touchingColor(horizontalnpc3.y);
  xhorizontalnpc3 += vhorizontalnpc3;

  //horizontalnpc3 bounce
  if (horizontalnpc3.blockright == true) {
    vhorizontalnpc3 = npcvNoBounce * -1;
  }
  if (horizontalnpc3.blockleft == true) {
    vhorizontalnpc3 = npcvNoBounce;
  }

  //horizontalnpc4
  horizontalnpc4.draw(xhorizontalnpc4 + xworld1, yhorizontalnpc4 + yworld1, 'with');
  horizontalnpc4.touchingColor(horizontalnpc4.y);
  xhorizontalnpc4 += vhorizontalnpc4;

  //horizontalnpc4 bounce
  if (horizontalnpc4.blockright == true) {
    vhorizontalnpc4 = npcvNoBounce * -1;
  }
  if (horizontalnpc4.blockleft == true) {
    vhorizontalnpc4 = npcvNoBounce;
  }

  //horizontalnpc5
  horizontalnpc5.draw(xhorizontalnpc5 + xworld1, yhorizontalnpc5 + yworld1, 'with');
  horizontalnpc5.touchingColor(horizontalnpc5.y);
  xhorizontalnpc5 += vhorizontalnpc5;

  //horizontalnpc4 bounce
  if (horizontalnpc5.blockright == true) {
    vhorizontalnpc5 = npcvNoBounce * -1;
  }
  if (horizontalnpc5.blockleft == true) {
    vhorizontalnpc5 = npcvNoBounce;
  }

  //hero glow
  push();
  let red = 70;
  let green = 0;
  let blue = 80;
  let a = 100;
  let b = 400;
  let d = 3000;
  let c = (d - b - 2 * a) / 2;
  stroke(red, green, blue, 40)
  strokeWeight(a);
  noFill();
  ellipse(hero.x + hero.width / 2, hero.y + hero.height / 2, b);
  stroke(red, green, blue, 100)
  ellipse(hero.x + hero.width / 2, hero.y + hero.height / 2, a + b);
  stroke(red, green, blue, 200)
  ellipse(hero.x + hero.width / 2, hero.y + hero.height / 2, b + 2 * a);
  stroke(0);
  strokeWeight(c);
  ellipse(hero.x + hero.width / 2, hero.y + hero.height / 2, d - c);
  pop();

  if (stepOne == false) {
    //key glow
    let xkeyGlow = xdoorKey + xworld1 + doorKey.width / 2;
    let ykeyGlow = ydoorKey + yworld1 + doorKey.height / 4;
    noStroke();
    fill(255, 220, 150, 30);
    ellipse(xkeyGlow, ykeyGlow, 200);
    fill(255, 220, 150, 50);
    ellipse(xkeyGlow, ykeyGlow, 120);
    //key
    doorKey.draw(xdoorKey + xworld1, ydoorKey + yworld1, 'without');

    //key float
    ydoorKey += sin(float) * 3;
  }

  //events
  if (start == true) {
    info("Try to escape.\nThere might be a door\nsomewhere.", "Start", -45)
    noLoop();
  }

  //NPCs
  if (hero.collision(verticalnpc1) |
    hero.collision(verticalnpc2) |
    hero.collision(verticalnpc3) |
    hero.collision(verticalnpc4) |
    hero.collision(horizontalnpc1) |
    hero.collision(horizontalnpc2) |
    hero.collision(horizontalnpc3) |
    hero.collision(horizontalnpc4) |
    hero.collision(horizontalnpc5)) {
    gameOver = true;
  }

  //mushrooms
  if (hero.hittop == true | hero.hitbottom == true | hero.hitleft == true | hero.hitright == true) {
    gameOver = true;
  }

  if (gameOver == true) {
    info("Game Over", "Try again", 0);
    noLoop();
  }

  if (hero.collision(door) && gotKey == true) {
    doorOpened = true;
    info("Congratulations!\nYou made it!", "Restart Game", -25)
    noLoop();
  } else if (hero.collision(door) && gotKey == false && findKeyWarning == false) {
    info("Oh no, it\'s locked.", "Find the key", 0)
    findKeyWarning = true;
    noLoop();
  }

  if (stepOne == false && hero.collision(doorKey)) {
    gotKey = true;
    info("You got the key!\nNow where\'s the door?", "Continue", -25)
    noLoop();
  }

  //infos
  let infoX = hero.x - xworld1;
  let infoY = hynofloat - yworld1;
  print("x: " + infoX + ", y: " + infoY);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function playSound() {
  sound.play();
}

function playWin() {
  soundWin.play();
}

function playOpenDoor() {
  soundDoor2.play();
}

function button(fillButton, opacityButton, strokeButton, textFill) {
  fill(fillButton, opacityButton);
  stroke(strokeButton);
  rect(tryAgainX, tryAgainY, tryAgainWidth, tryAgainHeight, 20)
  fill(textFill)
  noStroke();
}

function info(textWarning, textButton, textHeight) {
  rectMode(CENTER);
  fill(0);
  stroke(255);
  rect(width * 0.5, height * 0.5, width * 0.5, height * 0.5, 20)
  textAlign(CENTER);
  fill(255);
  noStroke();
  textSize(30)
  text(textWarning, width * 0.5, height * 0.45 + textHeight);
  button(255, 255, 0, 0);
  text(textButton, tryAgainX, tryAgainY + 10);
  if (gameOver == true) {
    sound.stop();
    soundLose.play();
  }
  if (doorOpened == true) {
    sound.stop();
    soundDoor1.play();
    soundDoor1.onended(playOpenDoor);
    soundDoor2.onended(playWin);
    soundWin.onended(playSound);
  }
}

function mouseClicked() {
  if (mouseX >= tryAgainX - tryAgainWidth / 2 &&
    mouseX <= tryAgainX + tryAgainWidth / 2 &&
    mouseY >= tryAgainY - tryAgainHeight / 2 &&
    mouseY <= tryAgainY + tryAgainHeight / 2) {
    if (gameOver == true |
      doorOpened == true) {
      location.reload();
    }
    if (gameOver == false &&
      doorOpened == false &&
      stepOne == false &&
      start == false) {
      stepOne = true;
      loop();
    }
    if (start == true) {
      start = false;
      loop();
      sound.play();
    }
  }
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

class Character {
  constructor(name, sheet, grit, animation) {
    this.name = name;
    this.sheet = sheet;
    this.grit = grit;
    this.animation = animation;
  }

  animate() {
    for (let j = 0; j < this.grit.frames.length; j += 0.2) {
      let i = Math.floor(j);
      if (gotKey == true && this.sheet == npcsheet) {
        let name = npcsadsheet.get(this.grit.frames[i].position.x, this.grit.frames[i].position.y, this.grit.frames[i].position.w, this.grit.frames[i].position.h);
        npcsadanimation.push(name);
      } else {
        let name = this.sheet.get(this.grit.frames[i].position.x, this.grit.frames[i].position.y, this.grit.frames[i].position.w, this.grit.frames[i].position.h);
        this.animation.push(name);
      }
      this.height = this.grit.frames[i].position.h;
      this.width = this.grit.frames[i].position.w;
    }
  }

  draw(x, y, animate) {
    this.x = x;
    this.y = y;
    this.animate = animate;
    if (this.animate == 'without') {
      this.height = 140;
      this.width = 60;
    }
    if (this.animate == 'with') {
      image(this.animation[frameCount % this.animation.length], this.x, this.y);
    }
    if (this.animate == 'without') {
      image(this.sheet, this.x, this.y);
    }
    if (gotKey == true && this.sheet == npcsheet) {
      image(npcsadanimation[frameCount % npcsadanimation.length], this.x, this.y);
    }
  }

  collision(other) {
    let thisLeft = this.x + this.width * 0.2;
    let thisRight = this.x + this.width * 0.8;
    let thisTop = this.y;
    let thisBottom = this.y + this.height;

    let otherLeft = other.x;
    let otherRight = other.x + other.width;
    let otherTop = other.y;
    let otherBottom = other.y + other.height;

    return !(
      (thisBottom < otherTop) ||
      (thisTop > otherBottom) ||
      (thisLeft > otherRight) ||
      (thisRight < otherLeft));
  }

  touchingColor(yTC) {
    this.yTC = yTC;

    this.blockright = false;
    this.blockleft = false;
    this.blocktop = false;
    this.blockbottom = false;

    this.hitright = false;
    this.hitleft = false;
    this.hittop = false;
    this.hitbottom = false;

    //walls (react when before walls)
    this.tright = world1.get(this.x + this.width * 0.8 - xworld1 + v, this.yTC - yworld1);
    this.mright = world1.get(this.x + this.width * 0.9 - xworld1 + v, this.yTC + this.height / 2 - yworld1);
    this.bright = world1.get(this.x + this.width - xworld1 + v, this.yTC + this.height - yworld1 + 22);
    this.tleft = world1.get(this.x + this.width * 0.2 - xworld1 - v, this.yTC - yworld1);
    this.mleft = world1.get(this.x + this.width * 0.1 - xworld1 - v, this.yTC + this.height / 2 - yworld1);
    this.bleft = world1.get(this.x - xworld1 - v, this.yTC + this.height - yworld1 + 22);
    this.ltop = world1.get(this.x - xworld1, this.yTC - yworld1 - v);
    this.mtop = world1.get(this.x + this.width / 2 - xworld1, this.yTC - yworld1 - v);
    this.rtop = world1.get(this.x + this.width - xworld1, this.yTC - yworld1 - v);
    this.lbottom = world1.get(this.x - xworld1, this.yTC + this.height - yworld1 + v + 22);
    this.mbottom = world1.get(this.x + this.width / 2 - xworld1, this.yTC + this.height - yworld1 + v + 22);
    this.rbottom = world1.get(this.x + this.width - xworld1, this.yTC + this.height - yworld1 + v + 22);

    let R = 0;
    let G = 255
    let B = 255;
    let O = 255;

    if (
      this.tright[0] == R && this.tright[1] == G && this.tright[2] == B && this.tright[3] == O ||
      this.mright[0] == R && this.mright[1] == G && this.mright[2] == B && this.mright[3] == O ||
      this.bright[0] == R && this.bright[1] == G && this.bright[2] == B && this.bright[3] == O
    ) {
      this.blockright = true
    } else {
      this.blockright = false
    }

    if (
      this.tleft[0] == R && this.tleft[1] == G && this.tleft[2] == B && this.tleft[3] == O ||
      this.mleft[0] == R && this.mleft[1] == G && this.mleft[2] == B && this.mleft[3] == O ||
      this.bleft[0] == R && this.bleft[1] == G && this.bleft[2] == B && this.bleft[3] == O
    ) {
      this.blockleft = true
    } else {
      this.blockleft = false
    }

    if (
      this.ltop[0] == R && this.ltop[1] == G && this.ltop[2] == B && this.ltop[3] == O ||
      this.mtop[0] == R && this.mtop[1] == G && this.mtop[2] == B && this.mtop[3] == O ||
      this.rtop[0] == R && this.rtop[1] == G && this.rtop[2] == B && this.rtop[3] == O
    ) {
      this.blocktop = true
    } else {
      this.blocktop = false
    }

    if (
      this.lbottom[0] == R && this.lbottom[1] == G && this.lbottom[2] == B && this.lbottom[3] == O ||
      this.mbottom[0] == R && this.mbottom[1] == G && this.mbottom[2] == B && this.mbottom[3] == O ||
      this.rbottom[0] == R && this.rbottom[1] == G && this.rbottom[2] == B && this.rbottom[3] == O
    ) {
      this.blockbottom = true;
    } else {
      this.blockbottom = false;
    }

    //mushrooms (react when actually in the mushroom)
    this.tright = world1.get(this.x + this.width - xworld1, this.yTC - yworld1);
    this.mright = world1.get(this.x + this.width - xworld1, this.yTC + this.height / 2 - yworld1);
    this.bright = world1.get(this.x + this.width - xworld1, this.yTC + this.height - yworld1 + 22);
    this.tleft = world1.get(this.x - xworld1, this.yTC - yworld1);
    this.mleft = world1.get(this.x - xworld1, this.yTC + this.height / 2 - yworld1);
    this.bleft = world1.get(this.x - xworld1, this.yTC + this.height - yworld1 + 22);
    this.ltop = world1.get(this.x - xworld1, this.yTC - yworld1);
    this.mtop = world1.get(this.x + this.width / 2 - xworld1, this.yTC - yworld1);
    this.rtop = world1.get(this.x + this.width - xworld1, this.yTC - yworld1);
    this.lbottom = world1.get(this.x - xworld1, this.yTC + this.height - yworld1 + 22);
    this.mbottom = world1.get(this.x + this.width / 2 - xworld1, this.yTC + this.height - yworld1 + 22);
    this.rbottom = world1.get(this.x + this.width - xworld1, this.yTC + this.height - yworld1 + 22);

    R = 255;
    G = 0
    B = 0;
    O = 255;

    if (
      this.tright[0] == R && this.tright[1] == G && this.tright[2] == B && this.tright[3] == O ||
      this.mright[0] == R && this.mright[1] == G && this.mright[2] == B && this.mright[3] == O ||
      this.bright[0] == R && this.bright[1] == G && this.bright[2] == B && this.bright[3] == O
    ) {
      this.hitright = true
    } else {
      this.hitright = false
    }

    if (
      this.tleft[0] == R && this.tleft[1] == G && this.tleft[2] == B && this.tleft[3] == O ||
      this.mleft[0] == R && this.mleft[1] == G && this.mleft[2] == B && this.mleft[3] == O ||
      this.bleft[0] == R && this.bleft[1] == G && this.bleft[2] == B && this.bleft[3] == O
    ) {
      this.hitleft = true
    } else {
      this.hitleft = false
    }

    if (
      this.ltop[0] == R && this.ltop[1] == G && this.ltop[2] == B && this.ltop[3] == O ||
      this.mtop[0] == R && this.mtop[1] == G && this.mtop[2] == B && this.mtop[3] == O ||
      this.rtop[0] == R && this.rtop[1] == G && this.rtop[2] == B && this.rtop[3] == O
    ) {
      this.hittop = true
    } else {
      this.hittop = false
    }

    if (
      this.lbottom[0] == R && this.lbottom[1] == G && this.lbottom[2] == B && this.lbottom[3] == O ||
      this.mbottom[0] == R && this.mbottom[1] == G && this.mbottom[2] == B && this.mbottom[3] == O ||
      this.rbottom[0] == R && this.rbottom[1] == G && this.rbottom[2] == B && this.rbottom[3] == O
    ) {
      this.hitbottom = true;
    } else {
      this.hitbottom = false;
    }
  }
}
