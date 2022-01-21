/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class EnemyCharacter extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, centreX, centreY)
    {
        super(UPDATE_TIME); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.centreX = centreX;
        this.centreY = centreY;
        this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE = 9; // the number of rows and columns in the gameObject
        this.NUMBER_OF_ROWS_IN_SPRITE_IMAGE = 4; // the number of rows and columns in the gameObject

        this.column = 0;
        this.animationStartDelay = 0;
        this.skeletonImage = skeletonImage;

        this.SPRITE_WIDTH = (this.skeletonImage.width / this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE);
        this.SPRITE_HEIGHT = (this.skeletonImage.height / this.NUMBER_OF_ROWS_IN_SPRITE_IMAGE);
        this.WIDTH_OF_SKELETON_ON_CANVAS = 100; /* the width and height that the skeleton will take up on the canvas */
        this.HEIGHT_OF_SKELETON_ON_CANVAS = 100;

        this.SKELETON_SPEED = 2;

         /* These variables depend on the object */
        this.WIDTH_OF_SKELETON_ON_CANVAS = 50; /* the width and height that the skeleton will take up on the canvas */
        this.HEIGHT_OF_SKELETON_ON_CANVAS = 50;
 
        this.centreX = centreX; /* set the start position of the skeleton in the maze */
        this.centreY = centreY;
 
        this.SKELETON_SPEED = 1; /* set the skeleton's speed */



        this.setDirection(STOPPED);
    }

    updateState()
    {

        
      //  console.log(gameObjects[SKELETON].getCentreY())
       // console.log(gameObjects[SKELETON].getCentreX())  


        let height_difference = Math.abs(gameObjects[SKELETON].getCentreY() - this.centreY) 
        let width_difference = Math.abs(gameObjects[SKELETON].getCentreX() - this.centreX)

       // console.log(height_difference)
        // console.log(width_difference)

        if(height_difference > 10 || width_difference > 10)
        {
            //console.log("nsja")
            if(this.centreY > gameObjects[SKELETON].getCentreY() )
            {
                this.centreY-=1;
            }

            if(this.centreY < gameObjects[SKELETON].getCentreY() )
            {
                this.centreY+=1;
            }

            if(this.centreX < gameObjects[SKELETON].getCentreX() )
            {
                this.centreX+=1;
            }
            
            if(this.centreX > gameObjects[SKELETON].getCentreX() )
            {
                this.centreX -=1; 
            }

        }

        if (this.direction === UP)
        {
            this.centreY -= this.SKELETON_SPEED;
        }
        else if (this.direction === LEFT)
        {
            this.centreX -= this.SKELETON_SPEED;
        }
        else if (this.direction === DOWN)
        {
            this.centreY += this.SKELETON_SPEED;
        }
        else if (this.direction === RIGHT)
        {
            this.centreX += this.SKELETON_SPEED;
        }

        if (this.direction !== STOPPED)
        {

            this.column++;
            this.currentgameObject++;

            if (this.currentgameObject >= this.endgameObject)
            {
                this.row = this.direction;
                this.column = 0;
                this.currentgameObject = this.startgameObject;
            }
            else if (this.column >= this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE)
            {
                this.column = 0;
                this.row++;
            }
        }
        else // stopped
        {
            this.column = 0;
            this.row = 2;
            this.currentgameObject = 0;
        }
    }

    render()
    {
        ctx.drawImage(this.skeletonImage, this.column * this.SPRITE_WIDTH, this.row * this.SPRITE_WIDTH, this.SPRITE_WIDTH, this.SPRITE_HEIGHT, this.centreX - (this.SPRITE_WIDTH / 2), this.centreY - (this.SPRITE_HEIGHT / 2), this.WIDTH_OF_SKELETON_ON_CANVAS, this.HEIGHT_OF_SKELETON_ON_CANVAS);
    }

    setDirection(newDirection)
    {
        this.direction = newDirection;
        this.startgameObject = this.direction * this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE;
        this.endgameObject = this.startgameObject + this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE;
        this.currentgameObject = this.startgameObject;
        this.row = this.direction;
        this.column = 0;
    }

    getDirection()
    {
        return(this.direction);
    }

    getCentreX()
    {
        return this.centreX;
    }

    getCentreY()
    {
        return this.centreY;
    }
}