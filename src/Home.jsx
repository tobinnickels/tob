import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
            <h1>Tobin Nickels</h1>
        </div>
    )
}

export default Home;