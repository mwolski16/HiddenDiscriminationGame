/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class PopUpSimple extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(x, y, width, height, img)
    {
        super(UPDATE_TIME); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        
    }

    render()
    {
        
            
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
                //console.log("The image should show")
            
            
        
        

        
    }

    changePos(x,y)
    {
        console.log("Changing pos")
       this.x = x;
       this.y = y;
    
    }

    updateState()
    {
           // console.log("This should be following angela.")
           // console.log("Current coordinates: X: "+this.x+" Y: "+this.y); 
            this.x = gameObjects[ANGELA].getCentreX()-110;
            this.y = gameObjects[ANGELA].getCentreY()-140;
        
      
    }

   

    getCentreY()
    {
        
    }

        

}