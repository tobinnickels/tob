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
            <div>
                <h1>Tobin Nickels</h1>
                <p>
                    Toby is an up-incoming software developer from Tucson, Arizona.
                    He is currently enrolled at the U of A where he is studying
                    computer science. In his free time Toby enjoys watching NBA, biking, and learning about
                    antiquity. Keep checking this website for more exciting projects as they
                    are released.
                </p>
            </div>
        </div>
    )
}

export default Home;