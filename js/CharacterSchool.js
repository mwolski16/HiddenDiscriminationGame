/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class SchoolCharacter extends Skeleton
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(skeletonImage, centreX, centreY)
    {
        super(skeletonImage, centreX, centreY); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.WIDTH_OF_SKELETON_ON_CANVAS = 50; /* the width and height that the skeleton will take up on the canvas */
        this.HEIGHT_OF_SKELETON_ON_CANVAS = 50;

        this.centreX = centreX; /* set the start position of the skeleton in the maze */
        this.centreY = centreY;

        this.SKELETON_SPEED = 2; /* set the skeleton's speed */
    }
}