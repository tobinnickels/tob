class Cloud{
    x ;
    y;
    image = new Image();
    height = 44;
    width = 68;
    up = false;
    down = false;
    left = false;
    right = false;

    player;

    constructor(image_path, x, y,player){
        
        this.x = x;
        this.y = y;
        
        this.image.src = image_path;

        this.player = player;
    }

    move(walls){

        let dx = 0;
        let dy = 0;

        if(this.up){
            dy = -1;
        }
    
        if(this.down){
            dy = 1;
        }
    
        if(this.left){
            dx = -1;
        }
    
        if(this.right){
            dx = 1;
        }
        
        let bad_move = false;

        for (let index = 0; index < walls.length; index++) {
            const wall = walls[index];

            bad_move = bad_move || this.isCollision(wall,dx,dy);
        }

        if(!bad_move){
            this.y += dy;
            this.x += dx;
        }
    }

    isCollision(wall, dx, dy){

        if ((((this.x + dx) > wall.x && (this.x + dx) < (wall.x + wall.size)) 
        || ((this.x + dx + this.width) > wall.x && (this.x + dx + this.width) < (wall.x + wall.size)))
        && (((this.y + dy) > wall.y && (this.y + dy) < (wall.y + wall.size))
        || ((this.y + dy + this.height) > wall.y && (this.y + dy + this.height) < (wall.y + wall.size)))) {
            return true;
        }

        return false;
    }
}

export default Cloud;