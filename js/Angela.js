/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class Angela extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(skeletonImage, centreX, centreY)
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

        this.direction = STOPPED
        this.SPRITE_WIDTH = (this.skeletonImage.width / this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE);
        this.SPRITE_HEIGHT = (this.skeletonImage.height / this.NUMBER_OF_ROWS_IN_SPRITE_IMAGE);
        this.WIDTH_OF_SKELETON_ON_CANVAS = 100; /* the width and height that the skeleton will take up on the canvas */
        this.HEIGHT_OF_SKELETON_ON_CANVAS = 100;

        this.SKELETON_SPEED = 2;
        this.setDirection(STOPPED);

         /* These variables depend on the object */
         this.WIDTH_OF_SKELETON_ON_CANVAS = 50; /* the width and height that the skeleton will take up on the canvas */
         this.HEIGHT_OF_SKELETON_ON_CANVAS = 50;
        
        this.come_to_character = false
        this.rescue_character = false  
        this.popup_follow = true;
        this.popup_end = false;
        this.angela_went_off_screen = false;
        this.game_end_text = document.getElementById("game_end");
        console.log(this.game_end_text)
        this.game_end_text.style.visibility = "hidden";
        this.game_end_text_confidence = document.getElementById("game_end_con");
        console.log("This works")
        this.game_end_text_confidence.style.visibility = "hidden";
 
        
    }
    
    updateState()
    {
        //console.log("Come to character: "+this.come_to_character)
        //console.log("Rescuing character: "+this.rescue_character)
        if(this.come_to_character && this.popup_follow)
        {
            console.log("Creating pop up.")
            gameObjects[POPUP_ANGELA_RESCUE] = new PopUpSimple(0, 0,200, 120, popup_angela);
            gameObjects[POPUP_ANGELA_RESCUE].start();
            console.log(gameObjects[POPUP_ANGELA_RESCUE])
            this.popup_follow = false;
        }
        
        let height_difference = Math.abs(gameObjects[SKELETON].getCentreY() - this.centreY) 
        let width_difference = Math.abs(gameObjects[SKELETON].getCentreX() - this.centreX)

        
        if(height_difference < 30 && width_difference < 30)
        {
            this.come_to_character = false;
            this.setDirection(STOPPED); 
            gameObjects[SKELETON].setDirection(STOPPED)
            GO_BACK_RIGHT = true
        }

        if(GO_BACK_RIGHT)
        {
            this.centreX+=1
            gameObjects[SKELETON].setDirection(RIGHT)
            gameObjects[SKELETON].setGoWithAngela(true)
        }

       else if(this.come_to_character)
       {
        
            this.setDirection(LEFT); 
            
            if(this.centreY > gameObjects[SKELETON].getCentreY() )
            {
                this.centreY-=this.SKELETON_SPEED; 
            }

            if(this.centreY < gameObjects[SKELETON].getCentreY() )
            {
            
                this.centreY+=this.SKELETON_SPEED;
            }

            if(this.centreX < gameObjects[SKELETON].getCentreX() )
            {
                this.centreX+=this.SKELETON_SPEED;
            }
            
            if(this.centreX > gameObjects[SKELETON].getCentreX() )
            {
                this.centreX -= this.SKELETON_SPEED; 
            }
       }
       else if(this.rescue_character)
       {
            this.setDirection(RIGHT); 
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

        if(this.centreX > canvas.width +20 && !this.angela_went_off_screen)
        {
            console.log("Angela spierdolila za ekran")
           this.popup_end = true;
           this.angela_went_off_screen = true;
        }
        //console.log(this.angela_went_off_screen)
        if(this.popup_end)
        {
            console.log("Created end pop up")
            //gameObjects[POPUP_END_GAME] = new StaticText("Angela has saved you! Your confidence: "+CONFIDENCE_LEVEL, canvas.width-500, canvas.height/2, "roboto light", 20, "red");

           // console.log(gameObjects[POPUP_END_GAME]);
           this.game_end_text.style.visibility = "visible";
           this.game_end_text_confidence.innerHTML = Math.round(CONFIDENCE_LEVEL) + "/1000";
           this.game_end_text_confidence.style.visibility = "visible";
           //console.log(game_end_text)
           this.popup_end = false;
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

    goToCharacter(value)
    {
        this.come_to_character = value
    }
}