/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class EnemyCharacter extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, number, centreX, centreY, delay)
    {
        super(UPDATE_TIME, delay); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.centreX = centreX;
        this.centreY = centreY;
        this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE = 9; // the number of rows and columns in the gameObject
        this.NUMBER_OF_ROWS_IN_SPRITE_IMAGE = 4; // the number of rows and columns in the gameObject
        this.number = number;
        this.column = 0;
        this.animationStartDelay = 0;
        this.image = image;

        this.SPRITE_WIDTH = (this.image.width / this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE);
        this.SPRITE_HEIGHT = (this.image.height / this.NUMBER_OF_ROWS_IN_SPRITE_IMAGE);
        this.WIDTH_OF_SKELETON_ON_CANVAS = 100; /* the width and height that the skeleton will take up on the canvas */
        this.HEIGHT_OF_SKELETON_ON_CANVAS = 100;

        this.SKELETON_SPEED = 0.7;

         /* These variables depend on the object */
        this.WIDTH_OF_SKELETON_ON_CANVAS = 50; /* the width and height that the skeleton will take up on the canvas */
        this.HEIGHT_OF_SKELETON_ON_CANVAS = 50;
 
        this.centreX = centreX; /* set the start position of the skeleton in the maze */
        this.centreY = centreY;
 
    
        this.coming_closer_horizontally = true;
        this.coming_closer_vertically = true;

        this.isGoingDown = false;



        this.setDirection(STOPPED);
    }

    updateState()
    {

        
        // console.log(gameObjects[SKELETON].getCentreY())
       // console.log(gameObjects[SKELETON].getCentreX())  


       if(gameObjects[SKELETON].getDirection() == UP)
       {
           this.y+=2
           
       }
       if(gameObjects[SKELETON].getDirection() == DOWN)
       {
           this.y-=2
           
       }

        let height_difference = Math.abs(gameObjects[SKELETON].getCentreY() - this.centreY) 
        let width_difference = Math.abs(gameObjects[SKELETON].getCentreX() - this.centreX)

        // console.log(height_difference)
        // console.log(width_difference)
        //console.log(this.isGoingDown);
        if(this.isGoingDown)
        {
            this.centreY+= getRndInteger(0.5,1); 
            //this.centreY+= getRndInteger(5,10); 
            //console.log("I should be going down");
            //console.log(this.getCentreY());
            // if(this.getCentreY() > canvas.height+50)
            // {
            //     this.setCharacterY(-10);
            //     this.setCharacterX(getRndChoice(getRndInteger(10,250), getRndInteger(300,400)));
            //    // console.log("Putting the character at the top")
            // }
            
        }
        else
        {
            if(height_difference > 10 || width_difference > 10)
            {
          
            if(this.centreY > gameObjects[SKELETON].getCentreY() )
            {
                this.centreY-=this.SKELETON_SPEED;
                // this.setDirection(UP)  
            }

            if(this.centreY < gameObjects[SKELETON].getCentreY() )
            {
                //this.setDirection(DOWN)  
                this.centreY+=this.SKELETON_SPEED;
            }

            if(this.centreX < gameObjects[SKELETON].getCentreX() )
            {
                if(this.coming_closer_horizontally)
                {
                    //this.setDirection(RIGHT)  
                   this.centreX+=this.SKELETON_SPEED;
                }
                else 
                {
                   // this.setDirection(DOWN)  
                   this.centreY+=this.SKELETON_SPEED;
                }
              
            }
            
            if(this.centreX > gameObjects[SKELETON].getCentreX() )
            {
                if(this.coming_closer_horizontally)
                {
                    //this.setDirection(LEFT)  
                   this.centreX -=this.SKELETON_SPEED; 
                }
                else 
                {
                    //this.setDirection(DOWN)  
                    this.centreY+=this.SKELETON_SPEED; 
                }
             
            }

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
        ctx.drawImage(this.image, this.column * this.SPRITE_WIDTH, this.row * this.SPRITE_WIDTH, this.SPRITE_WIDTH, this.SPRITE_HEIGHT, this.centreX - (this.SPRITE_WIDTH / 2), this.centreY - (this.SPRITE_HEIGHT / 2), this.WIDTH_OF_SKELETON_ON_CANVAS, this.HEIGHT_OF_SKELETON_ON_CANVAS);
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

    getNumber()
    {
        return this.number
    }

    getDirection()
    {
        return(this.direction);
    }

    getCentreX()
    {
        return this.centreX;
    }
    
    getStartX()
    {
        return this.centreX-20;
    }

    getEndX()
    {
        return this.centreX+20;
    }

    getStartY()
    {
        return this.centreY-20;
    }

    getEndY()
    {
        return this.centreY+20;
    }

    setComingCloserHorizontallyState(value)
    {
        this.coming_closer_horizontally = value;
    }

    setComingCloserVerticallyState(value)
    {
        this.coming_closer_vertically = value;
    }


    getCentreY()
    {
        return this.centreY;
    }

    setSpeed(speed)
    {
        this.SKELETON_SPEED = speed;
    }

    setCharacterX(pos)
    {
        this.centreX = pos;
    }

    setCharacterY(pos)
    {
        this.centreY = pos;
    }

    setGoingDownState(x)
    {
        this.isGoingDown = x;
    }
}