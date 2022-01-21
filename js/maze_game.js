/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.             */
/* There should always be a javaScript file with the same name as the html file. */
/* This file always holds the playGame function().                               */
/* It also holds game specific code, which will be different for each game       */





/******************** Declare game specific global data and functions *****************/
/* images must be declared as global, so that they will load before the game starts  */

let skeletonImage = new Image();
skeletonImage.src = "images/skeleton.png";

let background = new Image;
background.src = "images/maze_background.png";

let mazeGrid = new Image;
mazeGrid.src = "images/maze_grid.png";





/* Direction that the skeleton is walking */
/* Note that this matches the row in the gameObject image for the given direction */
const UP = 0;
const LEFT = 1;
const DOWN = 2;
const RIGHT = 3;
const STOPPED = 4;

/* The various gameObjects */
/* These are the positions that each gameObject is held in the gameObjects[] array */
const BACKGROUND = 0;
const MAZE = 1;
const SKELETON = 2;
const WIN_MESSAGE = 3;
/******************* END OF Declare game specific data and functions *****************/







/* Always have a playGame() function                                     */
/* However, the content of this function will be different for each game */
function playGame()
{
    /* We need to initialise the game objects outside of the Game class */
    /* This function does this initialisation.                          */
    /* This function will:                                              */
    /* 1. create the various game game gameObjects                   */
    /* 2. store the game gameObjects in an array                     */
    /* 3. create a new Game to display the game gameObjects          */
    /* 4. start the Game                                                */


    /* Create the various gameObjects for this game. */
    /* This is game specific code. It will be different for each game, as each game will have it own gameObjects */


    gameObjects[BACKGROUND] = new StaticImage(background, 0, 0, canvas.width, canvas.height);
    gameObjects[MAZE] = new StaticImage(mazeGrid, 0, 0, canvas.width, canvas.height);
    gameObjects[SKELETON] = new MazeSkeleton(skeletonImage, canvas.width - 70, 80);


    /* END OF game specific code. */


    /* Always create a game that uses the gameObject array */
    let game = new MazeSkeletonCanvasGame(mazeGrid);

    /* Always play the game */
    game.start();

    /* If they are needed, then include any game-specific mouse and keyboard listners */
    document.addEventListener('keydown', function (e)
    {
        if (e.keyCode === 37)  // left
        {
            gameObjects[SKELETON].setDirection(LEFT);
        }
        else if (e.keyCode === 38) // up
        {
            gameObjects[SKELETON].setDirection(UP);
        }
        else if (e.keyCode === 39) // right
        {
            gameObjects[SKELETON].setDirection(RIGHT);
        }
        else if (e.keyCode === 40) // down
        {
            gameObjects[SKELETON].setDirection(DOWN);
            refreshElementPosition(button, Math.random()*100,  Math.random()*100);
        }
    });

    // Here we handle functions for objects outside the canvas element (everything thats NOT a gameobject)

    //button.addEventListener("click",  function (e) {refreshElementPosition(button, Math.random()*100,  Math.random()*100)})

    button.addEventListener("click",  function (e) {clearCanvas(SKELETON)});
  
    
}