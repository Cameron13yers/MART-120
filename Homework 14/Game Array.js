// x and y for Spaceship
var SpaceshipX = 400;
var SpaceshipY = 400;

// Key Movement Codes
var w =87;
var s =83;
var a = 65;
var d = 68;

//Mouse Click Opsticle x and y
var mouseshapeX;
var mouseshapeY;

//Astroid Arrays 
var AstroidXs = [];
var AstroidYs = [];
var AstroidDs = [];

var AstroidXSpeeds = [];
var AstroidYSpeeds = [];

function setup()
{
    createCanvas(800, 800);
    // Randmon Speed
    for (var i = 0; i < 5; i++) {
        AstroidXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        AstroidYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        AstroidXs[i] = getRandomNumber(800)
        AstroidYs[i] = getRandomNumber(800)
        AstroidDs[i] = getRandomNumber(75)
    }
    

}

function draw()
{
    background(0)

    //Call Border Function
    createBorders(10);
    
    // Call Escape Function
    createEscapeSign()

    //Call Spaceship Function
    createSpaceship()
 
    //Call Spaceship Control Function
    SpaceshipMovement()

    //Call Create Astroids Function
    createAstroids()
   
    //Call Escape Win Function
    createWin()

    //Call mouse click
    mousecircle()

    //Call Random Number
    getRandomNumber()
}

function createBorders(thickness)
{
    stroke(0 )
    fill(56, 39, 133)
    // Top Border 
    rect(0,0,width,thickness)
    // Left Border
    rect(0,0,thickness,height)
    // Bottom Border
    rect(0,height-thickness,width,thickness)
    // Right Upper Border
    rect(width-thickness,0,thickness,height-50)
}

function createSpaceship()
{
    fill(255);
    circle(SpaceshipX, SpaceshipY, 25);
}

function SpaceshipMovement()
{
    //Spaceship Controls
    if(keyIsDown(w))
    {
        SpaceshipY -= 10;
    
    }
    if(keyIsDown(s))
    {
        SpaceshipY += 10;
    
    }
    if(keyIsDown(a))
    {
        SpaceshipX -= 10;
    
    }
    if(keyIsDown(d))
    {
        SpaceshipX += 10;
    
    }
}

function createAstroids()
{
    //Draw Astroids
    for (var i = 0; i < AstroidXs.length; i++) {

        fill(114, 75, 16)
        circle(AstroidXs[i], AstroidYs[i], AstroidDs[i]);
        AstroidXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        AstroidYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    AstroidXs[i] += AstroidXSpeeds[i];
    AstroidYs[i] += AstroidYSpeeds[i];

    if (AstroidXs[i] > width) {
        AstroidXs[i] = 0;
    }
    if (AstroidXs[i] < 0) {
        AstroidXs[i] = width;
    }
    if (AstroidYs[i] > height) {
        AstroidYs[i] = 0;
    }
    if (AstroidYs[i] < 0) {
        AstroidYs[i] = height;
    }
}
}

function createEscapeSign()
{
     //Escape Message
     textSize(16);
     fill(7, 248, 0)
     text("ESCAPE", width-80,height-25)
}

function createWin()
{
    if(SpaceshipX > width && SpaceshipY > width-50)
    {
        fill(255, 209, 0)
        stroke(255,255,255)
        textSize(26)
        text("You Escaped The Astroid Field!", width/2-50, height/2-50);
    }
}

function mousecircle()
{
   //create mouse clicked Obsitcle
   fill(255, 160, 14)
   circle(mouseshapeX, mouseshapeY,25) 
}

function mouseClicked()
{
    mouseshapeX = mouseX
    mouseshapeY = mouseY
}

function getRandomNumber()

{
  return random(10,75,);
}

