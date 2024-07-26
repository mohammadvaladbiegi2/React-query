import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <ul>
            <li>
                <Link to="/getquery1">Get Users Page 😎</Link>
            </li>
        </ul>
    );
}

export default Home;
