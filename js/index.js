/***************************************************************************/
/* This file is the same for every game.                                   */
/* DO NOT EDIT THIS FILE                                                   */
/***************************************************************************/


/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.       */
/* This file holds the global variables that will be used in all games.    */
/* This file always calls the playGame function().                         */
/* It also holds game specific code, which will be different for each game */

/************** Declare data and functions that are needed for all games ************/

/* Always create a canvas and a ctx, create elements outside of the canvas (like buttons) here */
let canvas = null;
let ctx = null;
let button = null;
let btn_school = null
/* Always create an array that holds the default game gameObjects */
let gameObjects = [];
// 0 - Man, 1 - Woman, 2 - Transgender/Queer/etc
const GENDER = getRndInteger(0,1);
let woman_character_img = null
let man_character_img = null

/*********** END OF Declare data and functions that are needed for all games *********/

/* Wait for all game assets, such as audio and images to load before starting the game */
/* The code below will work for both websites and Cordova mobile apps                  */
window.addEventListener("load", onAllAssetsLoaded);           // needed for websites
document.addEventListener("deviceready", onAllAssetsLoaded);  // needed for Cordova mobile apps

document.write("<div id='loadingMessage'>Loading...</div>");
function onAllAssetsLoaded()
{
    /* hide the webpage loading message */
    document.getElementById('loadingMessage').style.visibility = "hidden";

    /* Initialise the canvas and associated variables */
    /* This code never changes                        */
    canvas = document.getElementById("gameCanvas");

    //button = document.getElementsByClassName('buttonClass');
    button = document.getElementById('btn');
    btn_school = document.getElementById('btn_school');
    guide = document.getElementById("guide");
    //console.log(button);
    const BUTTON_X = 100;
    const BUTTON_Y = 150;
    //refreshElementPosition(button, BUTTON_X, BUTTON_Y);
    //button.addEventListener('click', refreshElementPosition(button, Math.random()*100,  Math.random()*100));
   
   
    woman_character_img = document.getElementById("woman_character");
    man_character_img = document.getElementById("man_character");

    if(GENDER == 0)
    {
        console.log("man")
        man_character_img.style.visibility = "visible"
      
    }
    else if(GENDER == 1)
    {
        console.log("woman")
        woman_character_img.style.visibility = "visible"    
    }
    ctx = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    button.addEventListener("click",  function (e) 
    {
        playGame(); // Each game will include its own .js file, which will hold the game's palyGame() function
        let back_pic = document.getElementById("main_image")
        back_pic.style.visibility = "hidden";
        console.log(GENDER)
        if(GENDER == 0)
        {
            console.log("man")
            man_character_img.style.visibility = "hidden"
            game = new AvoidMenGame_Man();
        }
        else if(GENDER == 1)
        {
            console.log("woman")
            woman_character_img.style.visibility = "hidden"
            game = new AvoidMenGame();
        }
        else
        {
            game = new AvoidMenGame_Transgender();
        }
        //game = new AvoidMenGame()
        buttonArray = document.getElementsByClassName('buttonClass');
        
      
        for(let i = 0; i<buttonArray.length; i++)
        {
            tempStyle = buttonArray[i].style;
            
            buttonArray[i].style.visibility = "hidden";
        }
        guide_page.style.visibility = "hidden"
         /* Always play the game */
        game.start();
        changeImage(background,"images/nightClubFloor.jpg")


        //set the dissaperance of the popup
        setTimeout('gameObjects[POPUP].changePos(-200,-200)', 5000);
    });


    btn_school.addEventListener("click",  function (e) 
    {
        playAnotherGame(); // Each game will include its own .js file, which will hold the game's palyGame() function
        let back_pic = document.getElementById("main_image")
        back_pic.style.visibility = "hidden";
        console.log(GENDER)
        if(GENDER == 0)
        {
            console.log("woman")
            woman_character_img.style.visibility = "hidden"
            game = new SchoolGame_Woman();
        }
        else if(GENDER == 1)
        {
            console.log("man")
            man_character_img.style.visibility = "hidden"
            game = new SchoolGame_Man();
        }
        else
        {
            game = new SchoolGame_Man();
        }
        //game = new AvoidMenGame()
        buttonArray = document.getElementsByClassName('buttonClass');
        
      
        for(let i = 0; i<buttonArray.length; i++)
        {
            tempStyle = buttonArray[i].style;
            
            buttonArray[i].style.visibility = "hidden";
        }
        guide_page.style.visibility = "hidden"
         /* Always play the game */
        game.start();
        changeImage(background,"images/nightClubFloor.jpg")
        setTimeout('gameObjects[POPUP].changePos(-200,-200)', 5000);
    
    });
  
}


/* global functions */

/* Convert from degrees to radians */
Math.radians = function (degrees)
{
    return degrees * Math.PI / 180;
};

function refreshElementPosition(elem, x, y)
{
    
    elem.style.left = x+"px";
    elem.style.top = y+"px";

}

function removeObject(x)
{
        gameObjects[x].stopAndHide();
   
}

function hideElement(x)
{
    x.style.visibility = "hidden";
}

function clearScene()
{
    for(let i = 0; i<gameObjects.length; i++)
    {
        gameObjects[i].stopAndHide();
    }

    // Hides the body div in the DOM
    // Should we use this? 
    //var all = document.getElementsByTagName("*");
    //hideElement(all[0]);

}

function changeImage(x, sourcePath)
{
    x.src = sourcePath;

}

function getRndInteger(min, max) {
    // min - inclusive, max - inclusive
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getRndChoice(x, y)
{
    let choice = getRndInteger(0,1);
    if(choice == 0)
    {
        return x;
    }
    else
    {
        return y;
    }
}

function highlight(x)
{
    
    x.style.filter = "brightness(1.25)";

}

function removeHighlight(x)
{
    x.style.filter = "brightness(1.0)";
}

function invertColors(x)
{
    x.style.filter = "invert(100%)";
}

function removeInvertColors(x)
{
    x.style.filter = "invert(0%)";
}

function showElement(x)
{
    x.style.visibility = "visible";
}