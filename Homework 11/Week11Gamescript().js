// x and y for Spaceship
var SpaceshipX = 50;
var SpaceshipY = 50;

// Key Movement Codes
var w =87;
var s =83;
var a = 65;
var d = 68;

//Astroid 1 x and y
var Ast1X = 200;
var Ast1Y = 200;
var Ast1XSpeed;
var Ast1YSpeed;

//Astroid 2 x and y
var Ast2X = 600;
var Ast2Y = 600;
var Ast2XSpeed;
var Ast2YSpeed;

//Astroid 3 x and y
var Ast3X = 600;
var Ast3Y = 200;
var Ast3XSpeed;
var Ast3YSpeed;

//Astroid 3 x and y
var Ast4X = 200;
var Ast4Y = 600;
var Ast4XSpeed;
var Ast4YSpeed;
//Mouse Click Opsticle x and y
var mouseshapeX;
var mouseshapeY;

function setup()
{
    createCanvas(800, 800);
    // Randmon Speed 
    Ast1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    Ast1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    Ast2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    Ast2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    Ast3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    Ast3YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    Ast4XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    Ast4YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


}

function draw()
{
    background(0)
    stroke(0 )
    fill(56, 39, 133)
    // Top Border 
    rect(0,0,width,10)
    // Left Border
    rect(0,0,10,height)
    // Bottom Border
    rect(0,height-10,width,10)
    // Right Upper Border
    rect(width-10,0,10,height-50)

    //Escape Message
    textSize(16);
    fill(7, 248, 0)
    text("ESCAPE", width-80,height-25)

    //Character 
    fill(255);
    circle(SpaceshipX, SpaceshipY, 25);

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

    //Astroid 1
    fill(136, 108, 40)
    circle(Ast1X, Ast1Y, 40)

    Ast1X += Ast1XSpeed;
    Ast1Y += Ast1YSpeed;

    if(Ast1X > width)
    {
        Ast1X = 0;
    }
    if(Ast1X < 0)
    {
        Ast1X = width;
    }
    if(Ast1Y > height)
    {
        Ast1Y = 0;
    }
    if(Ast1Y < 0)
    {
        Ast1Y = height;
    }

    if(SpaceshipX > width && SpaceshipY > width-50)

    //Astroid 2
    fill(136, 108, 40)
    circle(Ast2X, Ast2Y, 75)

    Ast2X -= Ast2XSpeed;
    Ast2Y -= Ast2YSpeed;

    if(Ast2X > width)
    {
        Ast2X = 0;
    }
    if(Ast2X < 0)
    {
        Ast2X = width;
    }
    if(Ast2Y > height)
    {
        Ast2Y = 0;
    }
    if(Ast2Y < 0)
    {
        Ast2Y = height;
    }

     //Astroid 3
     fill(136, 108, 40)
     circle(Ast3X, Ast3Y, 50)
 
     Ast3X -= Ast3XSpeed;
     Ast3Y += Ast3YSpeed;
 
     if(Ast3X > width)
     {
         Ast3X = 0;
     }
     if(Ast3X < 0)
     {
         Ast3X = width;
     }
     if(Ast3Y > height)
     {
         Ast3Y = 0;
     }
     if(Ast3Y < 0)
     {
         Ast3Y = height;
     }

       //Astroid 4
       fill(136, 108, 40)
       circle(Ast4X, Ast4Y,85)
   
       Ast4X += Ast4XSpeed;
       Ast4Y -= Ast4YSpeed;
   
       if(Ast4X > width)
       {
           Ast4X = 0;
       }
       if(Ast4X < 0)
       {
           Ast4X = width;
       }
       if(Ast4Y > height)
       {
           Ast4Y = 0;
       }
       if(Ast4Y < 0)
       {
           Ast4Y = height;
       }

    //Escape Win
    if(SpaceshipX > width && SpaceshipY > width-50)

    {
        fill(255, 209, 0)
        stroke(255,255,255)
        textSize(26)
        text("You Escaped The Astroid Field!", width/2-50, height/2-50);
    }

    //Create Mouse Click Obsticle
    fill(255, 160, 14)
    circle(mouseshapeX, mouseshapeY, 25)
}

function mouseClicked()
{
    mouseshapeX = mouseX
    mouseshapeY = mouseY
}
