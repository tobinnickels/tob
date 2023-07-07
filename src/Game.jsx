import React from "react";
import { Link } from "react-router-dom";
import Canvas from './Canvas'
import  Wall  from './Wall.js'
import  Cloud  from './Cloud.js'
import Projectile from './Projectile';

function restart(){
    projectiles = [];
    over = false;
    clouds[0].x = 40;
    clouds[0].y = 40;

    clouds[1].x = 280;
    clouds[1].y = 280;
}

/**
 * MAKE FUNCTIONS
 * 
 * Create cloud and wall objects.
 */
function makeClouds(){

    return [new Cloud("RainCloud.png",40,40,1), new Cloud("SnowCloud.png",280,280,2)]
}
const clouds = makeClouds();

function makeWalls(){
    const walls = [];

    // top and bottom
    for (let x = 0; x < 10; x++) {
        walls.push(new Wall(40*x,0));
        walls.push(new Wall(x*40,360))
    }
    
    // sides
    for (let y = 1; y < 9; y++) {
        walls.push(new Wall(0,40*y));
        walls.push(new Wall(360,40*y));        
    }

    for(let x = 1; x < 6; x++){
        walls.push(new Wall(40*x,120));
        walls.push(new Wall(40*(x+3),240));
    }

    return walls;
}


const walls = makeWalls();
var projectiles = [];
var over = false;
var winner;

/**
 *
 * DRAW FUNCTIONS
 *
 * Draw shit
 */

function drawWalls (ctx,frameCount) {    
    for (let index = 0; index < walls.length; index++) {
        const wall = walls[index];
        ctx.drawImage(wall.image,wall.x,wall.y);     
    }
}

function drawClouds (ctx,frameCount){

    for (let index = 0; index < clouds.length; index++) {

        const cloud = clouds[index];

        cloud.move(walls);

        ctx.drawImage(cloud.image,cloud.x,cloud.y);
    }
}

function drawProjectiles(ctx,frameCount) {
    for (let index = 0; index < projectiles.length; index++){
        const p = projectiles[index];
        if(p != null){
            p.move();
            ctx.drawImage(p.image, p.x, p.y);
        }

    }
}

function updateProjectiles() {
    for (let index = 0; index < projectiles.length; index++) {
        const p = projectiles[index];
        if(p != null){
            if(p.isCollision(walls)){
                projectiles[index] = null;
            }

            if(p.isPlayer(clouds)){
                over = true;
                winner = p.creator;
            }
        }        
    }
    return projectiles;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/**
 * 
 * WEIRD REACT STUFF
 */
const Game = () => {
    const draw = (ctx, frameCount) => {
        // Check if player moved
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        if(over){
            ctx.font = "48px Arial";
            ctx.fillStyle = "White";
            ctx.fillText("Game Over", 70, 200);
            ctx.font = "26px Arial";
            if(winner === 1){
                ctx.fillStyle = "White";
                ctx.fillText("Player One Wins", 100, 260);
            }else{
                ctx.fillStyle = "White";
                ctx.fillText("Player Two Wins", 100, 260);
            }
            ctx.beginPath();
            ctx.fill();

        } else {
            drawWalls(ctx,frameCount);
            drawClouds(ctx,frameCount);
            drawProjectiles(ctx,frameCount);
            ctx.beginPath();
            ctx.fill();
            updateProjectiles();
        }

    }

    return (
        <div>
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                        <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/game">Game</Link>
                </li>
            </ul>
            <div>
                <h1>Xcloud</h1>
                <p>player 1: move  w, a, s, d  shoot f</p>
                <p>player 2: move  i, j, k, l  shoot h</p>
                <p>restart: space bar</p>
                <Canvas width={400} height={400} draw={draw} />
            </div>
        </div>
    )
}

export default Game;

/**
 * 
 * CONTROLS
 * 
 * gross ass event handling
 */
function keyDownHandler(e) {
    if (e.key === "w") {
        clouds[0].up = true;
    } else if (e.key === "s") {
        clouds[0].down = true;
    } else if (e.key === "a") {
        clouds[0].left = true;
    } else if (e.key === "d") {
        clouds[0].right = true;
    } else if (e.key === "i") {
        clouds[1].up = true;
    } else if (e.key === "k") {
        clouds[1].down = true;
    } else if (e.key === "j") {
          clouds[1].left = true;
    } else if (e.key === "l") {
          clouds[1].right = true;
    } else if (e.key === "f"){
        projectiles.push(new Projectile(clouds,1));
    } else if (e.key === "h"){
        projectiles.push(new Projectile(clouds,2));    
    }
}
  
function keyUpHandler(e) {
    if (e.key === "w") {
        clouds[0].up = false;
    } else if (e.key === "s") {
        clouds[0].down = false;
    } else if (e.key === "a") {
        clouds[0].left = false;
    } else if (e.key === "d") {
        clouds[0].right = false;
    } else if (e.key === "i") {
        clouds[1].up = false;
    } else if (e.key === "k") {
        clouds[1].down = false;
    } else if (e.key === "j") {
        clouds[1].left = false;
    } else if (e.key === "l") {
        clouds[1].right = false;
    } else if (e.key === " ") {
        restart();
    }
}  