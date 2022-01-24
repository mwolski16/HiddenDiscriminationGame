/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.             */
/* There should always be a javaScript file with the same name as the html file. */
/* This file always holds the playGame function().                               */
/* It also holds game specific code, which will be different for each game       */



/******************** Declare game specific global data and functions *****************/
/* images must be declared as global, so that they will load before the game starts  */

let skeletonImage = new Image();
skeletonImage.src = "images/skeleton.png";

let background = new Image();
background.src = "images/maze_background.png";

let main_background = new Image();
main_background.src = "images/hidden_objects_main_screen_backgrounds.png";

let woman_character = new Image();
woman_character.src = "images/GenericWoman1.png";

let man_character = new Image();
man_character.src = "images/GenericMan1.png";

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
const ENEMY_START = 4
const ENEMY_END = 10
const ENEMY_END_SECOND = 15
const ENEMY_END_THIRD = 20
const ENEMY_END_FOURTH = 25
const ENEMY_END_FIFTH = 30


const UPDATE_TIME = 50
var CONFIDENCE_LEVEL = 100;

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
    gameObjects[SKELETON] = new MazeSkeleton(woman_character, canvas.width/2, canvas.height-50);

    let height_placement = 0; 
    let spread_width = 0;
    let spread_height = 0;
    let width_difference = 0;
    let delay_time = 0;

    for(let i = ENEMY_START; i < ENEMY_END; i++)
    {
        let random_width_placement = getRndInteger(0, canvas.width)
        let random_height_placement = getRndInteger(canvas.height/2, canvas.height)
        gameObjects[i] = new EnemyCharacter(man_character, i, width_difference, random_height_placement, delay_time);
        width_difference += 100;
        if(width_difference>canvas.width)
        {
            width_difference = 0;
        }
    }


    for(let i = ENEMY_END; i < ENEMY_END_SECOND; i++)
    {
        let random_width_placement = getRndInteger(0, canvas.width)
        height_placement = 0
        gameObjects[i] = new EnemyCharacter(man_character, i, width_difference, height_placement, delay_time);
        width_difference += 150;
        height_placement -= 300;
        delay_time += 1000;
        if(width_difference>canvas.width)
        {
            width_difference = 0;
        }
    }

    for(let i = ENEMY_END_SECOND; i < ENEMY_END_THIRD; i++)
    {
        let random_width_placement = getRndInteger(0, canvas.width)
        height_placement = 0
        gameObjects[i] = new EnemyCharacter(man_character, i, width_difference, height_placement, delay_time);
        width_difference += 50;
        height_placement -= 300;
        delay_time += 2000;
        if(width_difference>canvas.width)
        {
            width_difference = 0;
        }
    }

    for(let i = ENEMY_END_THIRD; i < ENEMY_END_FOURTH; i++)
    {
        let random_width_placement = getRndInteger(0, canvas.width)
        height_placement = 0
        gameObjects[i] = new EnemyCharacter(man_character, i, width_difference, height_placement, delay_time);
        width_difference += 50;
        height_placement -= 300;
        delay_time += 5000;
        if(width_difference>canvas.width)
        {
            width_difference = 0;
        }
    }

     for(let i = ENEMY_END_FOURTH; i < ENEMY_END_FIFTH; i++)
    {
        let random_width_placement = getRndInteger(0, canvas.width)
        height_placement = 0
        gameObjects[i] = new EnemyCharacter(man_character, i, width_difference, height_placement, delay_time);
        width_difference += 50;
        height_placement -= 300;
        delay_time += 5000;
        if(width_difference>canvas.width)
        {
            width_difference = 0;
        }
    }

   
    /* END OF game specific code. */


    /* Always create a game that uses the gameObject array */
    let game = new HiddenObjectsGame();

    // game.start()

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
        }
    });

    button.addEventListener("click",  function (e) 
    {
        let back_pic = document.getElementById("main_image")
        back_pic.style.visibility = "hidden"
        game = new AvoidMenGame()
        buttonArray = document.getElementsByClassName('buttonClass');
        
      
        for(let i = 0; i<buttonArray.length; i++)
        {
            tempStyle = buttonArray[i].style;
            
            buttonArray[i].style.visibility = "hidden";
        }
         /* Always play the game */
        game.start();
        changeImage(background,"images/maze_background.png")
    });
    let isGuidePageVisible = true;
    guide.addEventListener("click",  function (e) 
    {

        //let back_pic = document.getElementById("main_image")
        //back_pic.style.visibility = "hidden"

        ////console.log("hover");
        let guide_page = document.getElementById("guide_page");
        //let isGuidePageVisible = true;
        guide_page.style.visibility = "hidden"
        console.log(guide_page);
        //console.log("isGuidePageVisible == false?: " + toString(isGuidePageVisible == false))
        console.log(isGuidePageVisible == false)
        
        if(isGuidePageVisible == false)
        {
            //console.log("showing guide page");
            guide_page.style.visibility = "visible"
            isGuidePageVisible = true;
            //console.log("isGuidePageVisible: " + isGuidePageVisible);
        }
        else //if(isGuidePageVisible == true)
        {
            
            //console.log("hiding guide page");
            guide_page.style.visibility = "hidden"
            isGuidePageVisible = false;
           // console.log("isGuidePageVisible: " + isGuidePageVisible);
            
        }
        //guide.style = "filter: grayscale(100%)";

        

        

    //     game = new AvoidMenGame()
    //      /* Always play the game */
    //     game.start();
    //     changeImage(background,"images/background.jpg")
    });

    guide.addEventListener("hover",  function (e) 
    {
        
    });

    
}
  
  
