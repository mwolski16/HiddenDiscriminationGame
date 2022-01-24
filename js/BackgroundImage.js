/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class BackgroundImage extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, x, y, width, height)
    {
        super(UPDATE_TIME); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    updateState()
    {
        if(this.y<=0)
        {
            if(gameObjects[SKELETON].getDirection() == UP)
            {
                this.y+=2
            }
            if(gameObjects[SKELETON].getDirection() == DOWN)
            {
                this.y-=2
            }
        }
     
       
    }

    render()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}