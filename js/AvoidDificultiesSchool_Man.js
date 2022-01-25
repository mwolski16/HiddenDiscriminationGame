/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.       */
/* A CanvasGame that implements collision detection.                       */
/* The game allows the user to walk a skeleton around a maze.              */
/* If the skeleton is guided to the maze exit, then a win message appears. */

class SchoolGame_Woman extends CanvasGame
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
        if(gameObjects[CHARACTER].getCentreY() <= 50)
        {
            console.log("End game")
        }
    }
}