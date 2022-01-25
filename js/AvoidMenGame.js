/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.       */
/* A CanvasGame that implements collision detection.                       */
/* The game allows the user to walk a skeleton around a maze.              */
/* If the skeleton is guided to the maze exit, then a win message appears. */

CALL_FOR_ANGELA_NUMBER = getRndInteger(500, 600)
RESCUE_CHARACTER = false;
GO_BACK_RIGHT = false;
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
        this.call_for_angela_btn = document.getElementById("btn_angela_call");
        this.btn_try_again = document.getElementById("btn_try_again_woman");
        console.log(this.call_for_angela_btn)
        this.rescueCharacter = false;
        //this.mazeCtx.drawImage(mazeGridImage, 0, 0, canvas.width, canvas.height);
        
    }

    collisionDetection()
    {

        this.rescueCharacter = RESCUE_CHARACTER

        
        if(CONFIDENCE_LEVEL<0)
        {
            for(let i = ENEMY_START; i<ENEMY_END_THIRD; i++)
            {
                gameObjects[i].stopAndHide()
            }
                this.btn_try_again.style.visibility = "visible"   
                gameObjects[ANGELA].stopAndHide()
                gameObjects[SKELETON].stopAndHide()
               
        }

        if(CONFIDENCE_LEVEL<=CALL_FOR_ANGELA_NUMBER && !this.rescueCharacter)
        {
            console.log("END")
            this.call_for_angela_btn.style.visibility = "visible"   
        } 


        if(!this.rescueCharacter)
        {
            for(let i = ENEMY_START; i < ENEMY_END_THIRD; i++)
            {
                let horizontal_distance = Math.abs(gameObjects[SKELETON].getCentreX() - gameObjects[i].getCentreX()) 
                let vertical_distance = Math.abs(gameObjects[SKELETON].getCentreY() - gameObjects[i].getCentreY()) 
    
                if(horizontal_distance < 20 && vertical_distance < 35)
                {  
                    //console.log(gameObjects[i].getNumber(), "collision")
                    CONFIDENCE_LEVEL -=0.7;
                }
            
            }
        
        } 
        else if(GO_BACK_RIGHT)
        {
            gameObjects[ANGELA].setDirection(RIGHT)            
            gameObjects[SKELETON].setDirection(RIGHT)
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

       
                   

        
    }

}