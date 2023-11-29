//Size Variables
var LeyeX = 180;
var LeyeY = 230;

var ReyeX = 310;
var ReyeY = 230;

var LipsX = 245;
var LipsY = 340;

var size = 20;

//Movement Variables
var movementL = .5;
var movementR = .5;
var movementLips =.5;
var movementName =.5;

var count = 0;
var sizeDirection = 2;

//Drawing Function 
function setup()
{
    createCanvas(500,600);
    movementL = floor(random(1,5));
    movementR = floor(random(1,5));
}

function draw()
{
    background(102, 255, 153);
   
    //Neck
    fill(221, 190, 161);
    rect(190, 175, 120, 350);

    //Head
    fill(221, 190, 161);
    ellipse(250, 250, 300, 350);
   
    //Left Sclera
    fill(255, 255, 255);
    ellipse(180, 230, 75, 30);

    //Right Sclera
    fill(255, 255, 255);
    ellipse(310, 230, 75, 30);
    
    //Left Eye Move
    fill(102, 153, 255);
    circle(LeyeX, LeyeY, 30);
    fill(0, 0, 0);
    circle(LeyeX, LeyeY, 20);
    if(LeyeX >= 200 || LeyeX <= 160)
    {
        movementL *= -1;
    }
    
        LeyeX += movementL;

    //Right Eye Move
    fill(102, 153, 255);
    circle(ReyeX, ReyeY, 30);
    fill(0, 0, 0);
    circle(ReyeX, ReyeY, 20);
    if(ReyeX >= 330 || ReyeX <= 290)
    {
        movementR *= -1;
    }
    
        ReyeX += movementR;
    
    //Hair
    fill(204, 122, 0);
    ellipse(240, 100, 230, 100);

    fill(204, 122, 0)
    triangle(300, 220, 350, 87, 200, 87)

    fill(204, 172, 0)
    triangle(400, 250, 350, 87, 250, 87)

    fill(204, 122, 0)
    triangle(420, 230, 350, 87, 250, 87)
    
    fill(204, 172, 0)
    triangle(250, 170, 350, 87, 150, 87)

    fill(204, 122, 0)
    triangle(200, 170, 350, 87, 150, 87)
    
    fill(204, 122, 0)
    triangle(175, 180, 250, 87, 80, 87)
    
    fill(204, 122, 0)
    triangle(100, 200, 210, 87, 140, 87)

    //Nose Lines
    fill(0, 0, 0)
    line(260, 210, 270, 280)   

    fill(0, 0, 0)
    line(230, 210, 220, 280) 
    
    //Nose
    fill(221, 190, 161);
    ellipse(245, 280, 52, 20);

    // Nose Point
    fill(221, 190, 161);
    ellipse(245, 275, 20, 32);

    // Left Nostril Hole
    fill(0, 0, 0);
    ellipse(235, 285, 10, 10);
    
    // Right Notril Hole
    fill(0, 0, 0);
    ellipse(255, 285, 10, 10);

    //Lips Move
    fill(255, 102, 102);
    ellipse(LipsX, LipsY, 100, 30);
    fill(0, 0, 0)
    line(195, LipsY, 295, LipsY);
    if(LipsY >= 360 || LipsY <= 320)
    {
        movementLips *= -1;
    }
    
        LipsY += movementLips;

    // Freckles
    fill(0, 0, 0)
    point(300, 300)

    fill(0, 0, 0)
    point(300, 320)

    fill(0, 0, 0)
    point(320, 310)

    fill(0, 0, 0)
    point(180, 300)

    fill(0, 0, 0)
    point(180, 320)
    
    fill(0, 0, 0)
    point(160, 310)

    // Body
    fill(153, 102, 255)
    triangle(0, 600, 250, 480, 500, 600)

    // Name
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Cameron Byers', 300, 480);
   
    // Title
    fill(255, 255, 255)
    stroke(20)
    textSize(50)
    text('MY SELF PORTRAIT', 10, 30, 500)
}

