/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */



class ConfidenceMeter extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(text, x, y, font, fontSize, colour)
    {
        super(UPDATE_TIME); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.text = text;
        this.x = x;
        this.y = y;
        this.font = font;
        this.fontSize = fontSize;
        this.colour = colour;

        ctx.font = this.fontSize + "px " + this.font;
        this.width = ctx.measureText(this.text).width;
        if (this.x === STATIC_TEXT_CENTRE)
        {
            this.x = (canvas.width - this.width) / 2;
        }
    }

    render()
    {
        ctx.fillStyle = this.colour;
        ctx.font = this.fontSize + "px " + this.font; // need to set the font each time, as it might have been changed by other gameObjects.
        ctx.fillText(this.text, this.x, this.y);
    }

    updateState()
    {
       
        if(CONFIDENCE_LEVEL < 1000 && CONFIDENCE_LEVEL > 900)
        {
            this.text = "IIIIIIIIII"
        }
        if(CONFIDENCE_LEVEL < 900 && CONFIDENCE_LEVEL > 800)
        {
            this.text = "IIIIIIIII"
        }
        if(CONFIDENCE_LEVEL < 800 && CONFIDENCE_LEVEL > 700)
        {
            this.text = "IIIIIIII"
        }
        if(CONFIDENCE_LEVEL < 700 && CONFIDENCE_LEVEL > 600)
        {
            this.text = "IIIIIII"
        }
        if(CONFIDENCE_LEVEL < 600 && CONFIDENCE_LEVEL > 500)
        {
            this.text = "IIIIII"
        }
        if(CONFIDENCE_LEVEL < 500 && CONFIDENCE_LEVEL > 400)
        {
            this.text = "IIIII"
        }
        if(CONFIDENCE_LEVEL < 400 && CONFIDENCE_LEVEL > 300)
        {
            this.text = "IIII"
        }
        if(CONFIDENCE_LEVEL < 300 && CONFIDENCE_LEVEL > 200)
        {
            this.text = "III"
        }
        if(CONFIDENCE_LEVEL < 200 && CONFIDENCE_LEVEL > 100)
        {
            this.text = "II"
        }
        if(CONFIDENCE_LEVEL < 100 && CONFIDENCE_LEVEL > 0)
        {
            this.text = "I"
        }
       
       
    }


    
}