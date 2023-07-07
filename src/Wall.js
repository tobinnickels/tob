class Wall{

    size = 40;

    image = new Image();

    constructor(x,y){

        this.x = x;
        this.y = y;

        this.image.src = "rainbow.png";
    }
}

export default Wall;