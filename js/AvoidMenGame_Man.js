/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.       */
/* A CanvasGame that implements collision detection.                       */
/* The game allows the user to walk a skeleton around a maze.              */
/* If the skeleton is guided to the maze exit, then a win message appears. */

class AvoidMenGame_Man extends CanvasGame
{
    constructor()
    {
        super();

        /* this.mazeCtx will be used for collision detection */
        let mazeOffscreenCanvas = document.createElement('canvas');
        this.mazeCtx = mazeOffscreenCanvas.getContext('2d');
        mazeOffscreenCanvas.width = canvas.width;
        mazeOffscreenCanvas.height = canvas.height;
        this.gameOver = false;
        this.game_end_bar = document.getElementById("game_end_bar");
        this.game_end_bar_con = document.getElementById("game_end_bar_con");
        for(let i = ENEMY_START; i < ENEMY_END_FIFTH; i++)
        {
            gameObjects[i].setSpeed(0);
            gameObjects[i].setGoingDownState(true);
            //gameObjects[i].setCharacterX(100);
           // gameObjects[i].setCharacterY(i*20);
            
            
        }
        
        //this.mazeCtx.drawImage(mazeGridImage, 0, 0, canvas.width, canvas.height);
    }

    collisionDetection()
    {
        if(gameObjects[SKELETON].getCentreY()<= 170 && gameObjects[SKELETON].getCentreX()>= 250 && !this.gameOver)
        {
            //console.log(gameObjects[SKELETON].getCentreX())

            gameObjects[SKELETON].stop();
            this.gameOver = true;
            this.game_end_bar.style.visibility = "visible";
            this.game_end_bar_con.innerHTML = Math.round(CONFIDENCE_LEVEL);
            this.game_end_bar_con.style.visibility = "visible";



        }
      
        for(let i = ENEMY_START; i < ENEMY_END_FIFTH; i++)
        {
            let horizontal_distance = Math.abs(gameObjects[SKELETON].getCentreX() - gameObjects[i].getCentreX()) 
            let vertical_distance = Math.abs(gameObjects[SKELETON].getCentreY() - gameObjects[i].getCentreY()) 

            if(horizontal_distance < 20 && vertical_distance < 35)
            {  
                //console.log(gameObjects[i].getNumber(), "collision")
                CONFIDENCE_LEVEL -=1;
            }
            let popupToTrack = 33 //getRndInteger(31,32);

            //console.log(gameObjects[popupToTrack])
            //console.log(gameObjects)
            if(gameObjects[popupToTrack].getCentreY() == gameObjects[SKELETON].getCentreY())
            {
                CONFIDENCE_LEVEL -= 10;
            }
            
        
        } 
               
       

        if (!this.mazeCtx)
        {
            return;
        }
        if (gameObjects[SKELETON].getDirection() === UP)
        {
            let imageData = this.mazeCtx.getImageData(gameObjects[SKELETON].getCentreX(), gameObjects[SKELETON].getCentreY() - 20, 1, 1);
            if (imageData.data[3] !== 0)
            {
                gameObjects[SKELETON].setDirection(DOWN);
            }
        }
        else if (gameObjects[SKELETON].getDirection() === LEFT)
        {
            let imageData = this.mazeCtx.getImageData(gameObjects[SKELETON].getCentreX() - 15, gameObjects[SKELETON].getCentreY(), 1, 1);
            if (imageData.data[3] !== 0)
            {
                gameObjects[SKELETON].setDirection(RIGHT);
            }
        }
        else if (gameObjects[SKELETON].getDirection() === DOWN)
        {
            let imageData = this.mazeCtx.getImageData(gameObjects[SKELETON].getCentreX(), gameObjects[SKELETON].getCentreY() + 15, 1, 1);
            if (imageData.data[3] !== 0)
            {
                gameObjects[SKELETON].setDirection(UP);
            }

            if (gameObjects[SKELETON].getCentreY() > canvas.height)
            {
                /* Player has won */
                for (let i = 0; i < gameObjects.length; i++) /* stop all gameObjects from animating */
                {
                    gameObjects[i].stop();
                }
                gameObjects[WIN_MESSAGE] = new StaticText("Well Done!", 20, 280, "Times Roman", 100, "red");
                gameObjects[WIN_MESSAGE].start(); /* render win message */
            }
        }               
        else if (gameObjects[SKELETON].getDirection() === RIGHT)
        {
            let imageData = this.mazeCtx.getImageData(gameObjects[SKELETON].getCentreX(), gameObjects[SKELETON].getCentreY(), 1, 1);
            if (imageData.data[3] !== 0)
            {
                gameObjects[SKELETON].setDirection(LEFT);
            }
        }
    }
}