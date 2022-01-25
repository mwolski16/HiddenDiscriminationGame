/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class DifficultyPopup extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, number, x, y, width, height, delay)
    {
        super(UPDATE_TIME); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;
        this.width = width;
        this.number = number;
        this.height = height;
        this.x = x;
        this.y = y;
        this.centreX = x + width/2
        this.centreY = y + height/2
        this.delay = delay
        console.log(this.x)
        console.log(this.y)
        this.moving_direction = getRndInteger(0,1)
        this.messageRnd = getRndInteger(0,5)
        this.text = ""
        if(GENDER==0)
        {
            if(this.messageRnd==0)
            {
                this.image = messageMale1;
            }
            if(this.messageRnd==1)
            {
                this.image = messageMale2;
            }
            if(this.messageRnd==2)
            {
                this.image = messageMale3;
            }
            if(this.messageRnd==3)
            {
                this.image = messageMale4;
            }
            if(this.messageRnd==4)
            {
                this.image = messageMale5;
            }
        }
        if(GENDER==1)
        {
            if(this.messageRnd==0)
            {
                this.image = messageFemale1;
            }
            if(this.messageRnd==1)
            {
                this.image = messageFemale2;
            }
            if(this.messageRnd==2)
            {
                this.image = messageFemale2;
            }
            if(this.messageRnd==3)
            {
                this.image = messageFemale3;
            }
            if(this.messageRnd==4)
            {
                this.image = messageFemale4;
            }
        }

        // console.log("start point x", this.centreX - this.width/2)
        // console.log("end point x", this.centreX + this.width/2)
        // console.log("start point y", this.centreY - this.height/2)
        // console.log("end point y", this.centreY + this.height/2)
        console.log(this.text)
    }

    render()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    updateState()
    {
        if ( ( gameObjects[CHARACTER].getCentreX() > this.x  && gameObjects[CHARACTER].getCentreX() < this.x + this.width) &&
             (gameObjects[CHARACTER].getCentreY() > this.y  && gameObjects[CHARACTER].getCentreY() < this.y + this.height) )
        {
            CONFIDENCE_LEVEL -= 10;
        } 

        if(this.moving_direction == 0)
        {
            this.x +=1
            if(this.x > canvas.width - 100)
            {
                this.moving_direction = 1
            } 
        }
        if(this.moving_direction == 1)
        {
            this.x -=1 
            if(this.x < 5)
            {
                this.moving_direction = 0
            } 
        }

        this.y += 1;
    }

    getCentreX()
    {
        return this.centreX
    }
    getCentreY()
    {
        return this.centreY
    }

    getDirection()
    {
        return this.moving_direction
    }

    setDirection(value)
    {
       this.moving_direction = value
    }
    getNumber()
    {
        return this.number
    }
}