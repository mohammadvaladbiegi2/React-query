import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <ul>
            <li>
                <Link to="/getquery1">Get Users Page 😎</Link>
                <hr />
                <Link to="/clickquery">Click Query Page 😎</Link>
                <hr />
                <Link to="/callback">Callbacks Query Page 😎</Link>
                <hr />
                <Link to="/trasformdata">TrasFormdata Query Page 😎</Link>
                <hr />
                <Link to="/parallel">Parallel Query Page 😎</Link>
                <hr />
                <Link to="/dependentqueries">DependentQueriesPage Query Page 😎</Link>
                <hr />
            </li>
        </ul>
    );
}

export default Home;
