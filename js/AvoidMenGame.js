/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.       */
/* A CanvasGame that implements collision detection.                       */
/* The game allows the user to walk a skeleton around a maze.              */
/* If the skeleton is guided to the maze exit, then a win message appears. */

CALL_FOR_ANGELA_NUMBER = getRndInteger(500, 600)

class AvoidMenGame extends CanvasGame
{
    constructor()
    {
        super();

        /* this.mazeCtx will be used for collision detection */
        let mazeOffscreenCanvas = document.createElement('canvas');
        this.mazeCtx = mazeOffscreenCanvas.getContext('2d');
        mazeOffscreenCanvas.width = canvas.width;
        mazeOffscreenCanvas.height = canvas.height;
      
        //this.mazeCtx.drawImage(mazeGridImage, 0, 0, canvas.width, canvas.height);
        
    }

    collisionDetection()
    {

        if(CONFIDENCE_LEVEL<=CALL_FOR_ANGELA_NUMBER)
        {
            for(let i = ENEMY_START; i<ENEMY_END_FIFTH; i++)
            {
                gameObjects[i].stop()
            }

            gameObjects[ANGELA].goToCharacter(true)
            gameObjects[SKELETON].stop()
            gameObjects[BACKGROUND].stop()
        
            CONFIDENCE_LEVEL + 10;
        } 

        else 
        {
            for(let i = ENEMY_START; i < ENEMY_END_FIFTH; i++)
            {
                let horizontal_distance = Math.abs(gameObjects[SKELETON].getCentreX() - gameObjects[i].getCentreX()) 
                let vertical_distance = Math.abs(gameObjects[SKELETON].getCentreY() - gameObjects[i].getCentreY()) 
    
                if(horizontal_distance < 20 && vertical_distance < 35)
                {  
                    //console.log(gameObjects[i].getNumber(), "collision")
                    CONFIDENCE_LEVEL -=1;
                }
            
            }
        }
        

        for(let i = ENEMY_START; i < ENEMY_END; i++)
        {
            for(let j = ENEMY_START; j < ENEMY_END; j++)
            {
                if(i!==j)
                {
                    let horizontal_distance = Math.abs(gameObjects[i].getCentreX() - gameObjects[j].getCentreX()) 
                    let vertical_distance = Math.abs(gameObjects[i].getCentreY() - gameObjects[j].getCentreY()) 
    
                   // console.log("Horizontal diff: ", horizontal_distance)
                    // console.log("vertical_distance: ", vertical_distance)
                    if(horizontal_distance < 30)
                    {  
                        //console.log(gameObjects[i].getNumber(), "collision")
                        gameObjects[i].setComingCloserHorizontallyState(false)
                    }
                }
               
                // else 
                // {
                //     gameObjects[i].setComingCloserHorizontallyState(true)
                // }
                // if(vertical_distance < 10)
                // {
                //     // console.log("collision")
                // }
               
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