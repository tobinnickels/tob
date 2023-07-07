class Projectile{
    x;
    dx;

    y;
    dy;

    angle;

    image = new Image();
    size = 20;

    creator;

    constructor(clouds,creator){

        if (creator === 1) {
            this.image.src = "water.png";

            this.x = clouds[0].x;
            this.y = clouds[0].y;

            //Math from stack exchange
            const A = -clouds[1].y + clouds[0].y;

            const B = clouds[0].x - clouds[1].x;

            this.angle = Math.acos((B / Math.sqrt((A**2 + B**2))));

            this.dx = -Math.cos(this.angle);
            this.dy = Math.sin(this.angle);

            // Condition to make the game work
            if (clouds[0].y > clouds[1].y) {
                this.dy = -Math.sin(this.angle);
            } else {
                this.dy = Math.sin(this.angle);
            }

            
        } else {
            this.image.src = "lightning.png";

            this.x = clouds[1].x;
            this.y = clouds[1].y;


            const A = -clouds[0].y + clouds[1].y;

            const B = clouds[1].x - clouds[0].x;

            this.angle = Math.acos((B / Math.sqrt(((A**2) + (B**2) ))));

            this.dx = -Math.cos(this.angle);
            if(clouds[0].y < clouds[1].y){
                this.dy = -Math.sin(this.angle);
            } else {
                this.dy = Math.sin(this.angle);
            }
        }
        this.creator = creator;
    }

    move(){
        this.y += this.dy;
        this.x += this.dx;
    }

    isCollision(walls){

        for (let index = 0; index < walls.length; index++) {
            const wall = walls[index];
            if ((((this.x) > wall.x && (this.x) < (wall.x + wall.size)) 
            || ((this.x + this.size) > wall.x && (this.x + this.size) < (wall.x + wall.size)))
            && (((this.y) > wall.y && (this.y) < (wall.y + wall.size))
            || ((this.y + this.size) > wall.y && (this.y + this.size) < (wall.y + wall.size)))) {
                return true;
            }
    
        }
        return false;   
    }

    isPlayer(clouds){
        for (let index = 0; index < clouds.length; index++) {
            const cloud = clouds[index];
            if ((((this.x) > cloud.x && (this.x) < (cloud.x + cloud.width)) 
            || ((this.x + this.size) > cloud.x && (this.x + this.size) < (cloud.x + cloud.width)))
            && (((this.y) > cloud.y && (this.y) < (cloud.y + cloud.height))
            || ((this.y + this.size) > cloud.y && (this.y + this.size) < (cloud.y + cloud.height)))) {
                
                if(this.creator != cloud.player){
                    return true;
                }
            }
    
        }
        return false;  
    }
}

export default Projectile;