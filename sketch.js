//Variables for the game
let myXPos = 250;
let myYPos = 450;
let score = 0;
let lives = 1;
let gameStats = ("Score: " + score + "  Lives: " + lives);
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let fr = 30; 
let enemyY = 50;
let E1X = 50;
let E2X = 150;
let E3X = 250;
let E4X = 350;
let E5X = 450;
//Laser Variables
let xLaserPos = myXPos;
let yLaserPos = myYPos- 48 ;
let laserUp;
//Variables for images
let heroImage;
let backgroundImage;
let enemyImage;
let laserImage;
function preload() {
    heroImage = loadImage("images/hero.png");
    backgroundImage = loadImage("images/space.jpg");
    enemyImage = loadImage("images/enemyship.png");
    laserImage = loadImage("images/laser.png");
}
function setup() {
    createCanvas(500, 500);
    noStroke();
    rectMode(CENTER);
    imageMode(CENTER);
}
function draw() {
    /*FOR TEST ONLY: Red Block (Hero)
    background(0);
    fill(255, 0, 0);
    rect(myXPos, myYPos, 50, 50);*/
    //Hero
    fill(255);
    image(backgroundImage,250,250,500,500)
    image(heroImage, myXPos, myYPos, 70, 70);
    //Enemy Ship (5)
    image(enemyImage, E1X, enemyY, 55, 55);
    image(enemyImage, E2X, enemyY, 55, 55);
    image(enemyImage, E3X, enemyY, 55, 55);
    image(enemyImage, E4X, enemyY, 55, 55);
    image(enemyImage, E5X, enemyY, 55, 55);
    //Enemy Movement
    enemyY = enemyY + 1 * (deltaTime / 15);
    if (enemyY > 560) {
        enemyY = -60;
    }
    //Text for the score and lives
    fill(255);
    textSize(25);
    text(gameStats, 10, 30);
    //Character Movements
    if(keyIsDown(LEFT_ARROW))
    {
        myXPos -= 3;
    }
    if(keyIsDown(RIGHT_ARROW))
    {
        myXPos += 3;
    }
    if(keyIsDown(UP_ARROW))
    {
        myYPos -= 3;
    }
    if(keyIsDown(DOWN_ARROW))
    {
        myYPos += 3;
    }
    //Checks below ensures that the character does not go out of bounds
    //Right Wall Check
    if(myXPos > 35)
    {
        myXPos = myXPos - 3;
    }
    //Left Wall Check
    if(myXPos < 465)
    {
        myXPos = myXPos + 3;
    }
    //Bottom Wall Check
    if(myYPos > 35)
    {
        myYPos = myYPos - 3;
    }
    //Top Wall Check
    if(myYPos < 465)
    {
        myYPos = myYPos + 3;
    }
    //Collision
    myLeft = myXPos - 35;
    myRight = myXPos + 35;
    myTop = myYPos - 35;
    myBottom = myYPos + 35;
    enemyL1 = E1X - 10;
    enemyR1 = E1X + 10;
    enemyL2 = E2X - 10;
    enemyR2 = E2X + 10;
    enemyL3 = E3X - 10;
    enemyR3 = E3X + 10;
    enemyL4 = E4X - 10;
    enemyR4 = E4X + 10;
    enemyL5 = E5X - 10;
    enemyR5 = E5X + 10;
    enemyTop = enemyY - 14;
    enemyBottom = enemyY + 14;
    if (myLeft > enemyR1 || myRight < enemyL1 
        || myTop > enemyBottom || myBottom < enemyTop) {
    }
    else
    {
        lives = lives - 1;
        gameStats = "Score: " + score + "  Lives: " + lives;
        if(lives == 0)
        {
            clear();
            background(0);
            textSize(25);
            text("You Lost!!! Please try again", 100, 450);
            fill(255);
            textSize(25);
            text(gameStats, 10, 30);
            noLoop();
        }
    }
    if (myLeft > enemyR2 || myRight < enemyL2 
        || myTop > enemyBottom || myBottom < enemyTop) {
    }
    else
    {
        lives = lives - 1;
        gameStats = "Score: " + score + "  Lives: " + lives;
        if(lives == 0)
        {
            clear();
            background(0);
            textSize(25);
            text("You Lost!!! Please try again", 100, 450);
            fill(255);
            textSize(25);
            text(gameStats, 10, 30);
            noLoop();
        }
    }
    if (myLeft > enemyR3 || myRight < enemyL3 
        || myTop > enemyBottom || myBottom < enemyTop) {
    }
    else
    {
        lives = lives - 1;
        gameStats = "Score: " + score + "  Lives: " + lives;
        if(lives == 0)
        {
            clear();
            background(0);
            textSize(25);
            text("You Lost!!! Please try again", 100, 450);
            fill(255);
            textSize(25);
            text(gameStats, 10, 30);
            noLoop();
        }
    }
    if (myLeft > enemyR4 || myRight < enemyL4 
        || myTop > enemyBottom || myBottom < enemyTop) {
    }
    else
    {
        lives = lives - 1;
        gameStats = "Score: " + score + "  Lives: " + lives;
        if(lives == 0)
        {
            clear();
            background(0);
            textSize(25);
            text("You Lost!!! Please try again", 100, 450);
            fill(255);
            textSize(25);
            text(gameStats, 10, 30);
            noLoop();
        }
    }
    if (myLeft > enemyR5 || myRight < enemyL5 
        || myTop > enemyBottom || myBottom < enemyTop) {
    }
    else
    {
        lives = lives - 1;
        gameStats = "Score: " + score + "  Lives: " + lives;
        if(lives == 0)
        {
            clear();
            background(0);
            textSize(25);
            text("You Lost!!! Please try again", 100, 450);
            fill(255);
            textSize(25);
            text(gameStats, 10, 30);
            noLoop();
        }
    }
    //Laser
    if (keyIsDown(32)) {
        image(laserImage, myXPos, yLaserPos, 15, 25);
        yLaserPos -= 20;
        if (yLaserPos < 1) {
            yLaserPos = myYPos-48;
        }
        laserUp = yLaserPos-17
        laserDown = yLaserPos+17
        laserRight = xLaserPos+8
        laserLeft = xLaserPos-8
        if (myLeft > enemyR1 || myRight < enemyL1 || laserUp > enemyBottom || laserDown < enemyTop) {
        } 
        else {
            E1X = 1000
            gameStats = "Score: " + score + "  Lives: " + lives;
            if (E1X === 1000) {
                score = score + 100
            }
            if (E1X + E2X + E3X + E4X + E5X === 5000) {
                clear();
                gameStats = "Score: " + score + "  Lives: " + lives;
                background(0);
                textSize(25);
                text("You Win!!!", 190, 450);
                fill(255);
                textSize(25);
                text(gameStats, 10, 30);
                noLoop();
            }
            gameStats = "Score: " + score + "  Lives: " + lives;
        }
        if (myLeft > enemyR2 || myRight < enemyL2 || laserUp > enemyBottom || laserDown < enemyTop) {
        } 
        else {
            E2X = 1000
            gameStats = "Score: " + score + "  Lives: " + lives;
            if (E2X === 1000) {
                score = score + 100
            }
            if (E1X + E2X + E3X + E4X + E5X === 5000) {
                clear();
                gameStats = "Score: " + score + "  Lives: " + lives;
                background(0);
                textSize(25);
                text("You Win!!!", 190, 450);
                fill(255);
                textSize(25);
                text(gameStats, 10, 30);
                noLoop();
            }
            gameStats = "Score: " + score + "  Lives: " + lives;
        }
        if (myLeft > enemyR3 || myRight < enemyL3 || laserUp > enemyBottom || laserDown < enemyTop) {
        } 
        else {
            E3X = 1000
            gameStats = "Score: " + score + "  Lives: " + lives;
            if (E3X === 1000) {
                score = score + 100
            }
            if (E1X + E2X + E3X + E4X + E5X === 5000) {
                clear();
                gameStats = "Score: " + score + "  Lives: " + lives;
                background(0);
                textSize(25);
                text("You Win!!!", 190, 450);
                fill(255);
                textSize(25);
                text(gameStats, 10, 30);
                noLoop();
            }
        }
        if (myLeft > enemyR4 || myRight < enemyL4 || laserUp > enemyBottom || laserDown < enemyTop) {
        } 
        else {
            E4X = 1000
            gameStats = "Score: " + score + "  Lives: " + lives;
            if (E4X === 1000) {
                score = score + 100
            }
            if (E1X + E2X + E3X + E4X + E5X === 5000) {
                clear();
                gameStats = "Score: " + score + "  Lives: " + lives;
                background(0);
                textSize(25);
                text("You Win!!!", 190, 450);
                fill(255);
                textSize(25);
                text(gameStats, 10, 30);
                noLoop();
            }
            gameStats = "Score: " + score + "  Lives: " + lives;
        }
        if (myLeft > enemyR5 || myRight < enemyL5 || laserUp > enemyBottom || laserDown < enemyTop) {
        } 
        else { 
            E5X = 1000
            gameStats = "Score: " + score + "  Lives: " + lives;
            if (E5X === 1000) {
                score = score + 100
            } 
            if (E1X + E2X + E3X + E4X + E5X === 5000) {
                clear();
                gameStats = "Score: " + score + "  Lives: " + lives;
                background(0);
                textSize(25);
                text("You Win!!!", 190, 450);
                fill(255);
                textSize(25);
                text(gameStats, 10, 30);
                noLoop();
            }
            gameStats = "Score: " + score + "  Lives: " + lives;
        }
    } 
}