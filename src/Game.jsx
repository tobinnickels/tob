import React from "react";
import { Link } from "react-router-dom";
import Canvas from './Canvas'

let cloud1_x = 0;
let cloud1_y = 0;

let cloud1_up = false;
let cloud1_down = false;
let cloud1_left = false;
let cloud1_right = false;

let cloud2_x = 100;
let cloud2_y = 100;

let cloud2_up = false;
let cloud2_down = false;
let cloud2_left = false;
let cloud2_right = false;

// Create new img element
const cloud1 = new Image();
const cloud2 = new Image();

// Set source path
cloud1.src = "RainCloud.png";  
cloud2.src = "SnowCloud.png";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const Game = () => {
    const draw = (ctx, frameCount) => {
        // Check if player moved
        if(cloud1_up){
            cloud1_y -= 1;
        }

        if(cloud1_down){
            cloud1_y += 1;
        }

        if(cloud1_left){
            cloud1_x -= 1;
        }

        if(cloud1_right){
            cloud1_x += 1;
        }

        if(cloud2_up){
            cloud2_y -= 1;
        }

        if(cloud2_down){
            cloud2_y += 1;
        }

        if(cloud2_left){
            cloud2_x -= 1;
        }

        if(cloud2_right){
            cloud2_x += 1;
        }
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.drawImage(cloud1,cloud1_x,cloud1_y);
        ctx.drawImage(cloud2,cloud2_x,cloud2_y);
        ctx.beginPath()
        ctx.fill()
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
            <h1>Xcloud</h1>
            <p>player 1: w,a,s,d</p>
            <p>player 2: up, down, left, right</p>
            <Canvas draw={draw} />
        </div>
    )
}

export default Game;

function keyDownHandler(e) {
    if (e.key === "w") {
        cloud1_up = true;
    } else if (e.key === "s") {
        cloud1_down = true;
    } else if (e.key === "a") {
        cloud1_left = true;
    } else if (e.key === "d") {
        cloud1_right = true;
    } else if (e.key === "Up" || e.key === "ArrowUp") {
        cloud2_up = true;
    } else if (e.key === "Down" || e.key === "ArrowDown") {
        cloud2_down = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
          cloud2_left = true;
    } else if (e.key === "Down" || e.key === "ArrowRight") {
          cloud2_right = true;
    }
}
  
function keyUpHandler(e) {
    if (e.key == "w") {
        cloud1_up = false;
    } else if (e.key === "s") {
        cloud1_down = false;
    } else if (e.key === "a") {
        cloud1_left = false;
    } else if (e.key === "d") {
        cloud1_right = false;
    } else if (e.key === "Up" || e.key === "ArrowUp") {
        cloud2_up = false;
    } else if (e.key === "Down" || e.key === "ArrowDown") {
        cloud2_down = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        cloud2_left = false;
    } else if (e.key === "Down" || e.key === "ArrowRight") {
        cloud2_right = false;
    }
}  



