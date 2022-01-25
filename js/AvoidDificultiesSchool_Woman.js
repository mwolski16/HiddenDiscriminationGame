/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.       */
/* A CanvasGame that implements collision detection.                       */
/* The game allows the user to walk a skeleton around a maze.              */
/* If the skeleton is guided to the maze exit, then a win message appears. */

class SchoolGame_Man extends CanvasGame
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
        this.game_end_school = document.getElementById("game_end_school");
        this.game_end_school_con = document.getElementById("game_end_school_con");
        this.gameOver = false;
    }

    collisionDetection()
    {
       
        if(gameObjects[CHARACTER].getCentreY() <= 100 && !this.gameOver)
        {
            //console.log("End game")
            console.log(gameObjects[CHARACTER].getCentreY())
            this.game_end_school.style.visibility = "visible";
            gameObjects[CHARACTER].setDirection(STOPPED);
            this.game_end_school_con.innerHTML = Math.round(CONFIDENCE_LEVEL);
            this.game_end_school_con.style.visibility = "visible";
            this.gameOver = true;
        }
    }
}