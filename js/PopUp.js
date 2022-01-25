/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */


class PopUp extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(text, x, y, font, fontSize, colour, bg_size, bg_colour, img, img_x, img_y, img_width, img_height, shouldMove,indexOfTrackedObject, delay)
    {
        super(UPDATE_TIME, delay); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.text = text;
        this.x = x;
        this.y = y;
        this.font = font;
        this.fontSize = fontSize;
        this.colour = colour;
        this.bg_size = bg_size;
        this.bg_colour = bg_colour;
        this.img = img;
        this.img_x = img_x;
        this.img_y = img_y;
        this.img_width = img_width;
        this.img_height = img_height;
        this.shouldMove = shouldMove; 
        this.indexOfTrackedObject = indexOfTrackedObject;

        ctx.font = this.fontSize + "px " + this.font;
        this.width = ctx.measureText(this.text).width;
        // if (this.x === STATIC_TEXT_CENTRE)
        // {
        //     this.x = (canvas.width - this.width) / 2;
        // }
    }

    render()
    {
        if(this.img != null )
        {
            
                ctx.drawImage(this.img, this.img_x, this.img_y, this.img_width, this.img_height);
                //console.log("The image should show")
            
            
        }
        else
        {
            ctx.beginPath();
            ctx.fillStyle = this.bg_colour;
            //console.log(this.x+this.bg_size);
            ctx.rect(this.x-this.bg_size, this.y-this.bg_size, this.bg_size+this.text.length*6.6,this.bg_size+this.fontSize);
            ctx.fill();
         }
        
        
        ctx.fillStyle = this.colour;
        ctx.font = this.fontSize + "px " + this.font; // need to set the font each time, as it might have been changed by other gameObjects.
        ctx.fillText(this.text, this.x, this.y);

        
    }

    changePos(x,y,shouldMove)
    {
        console.log("Changing pos")
       this.x = x;
       this.y = y;
       this.img_x = x;
       this.img_y = y;
       this.shouldMove = shouldMove;
    }

    updateState()
    {
       if(this.shouldMove)
       {
           this.img_x = gameObjects[this.indexOfTrackedObject].getCentreX()-60;
           this.img_y = gameObjects[this.indexOfTrackedObject].getCentreY()-90;
       }
    }

    changeShouldMoveState(x)
    {
        this.shouldMove = x;
    }

    getCentreY()
    {
        //console.log("TO przeciez istnieje")
        return this.img_y; 
    }
        

}