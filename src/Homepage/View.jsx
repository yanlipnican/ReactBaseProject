import React from 'react';
import { Link } from 'react-router';

const view = (data) => 
(
    <div className="container">
        <h1>{data.title}</h1>
        <Link to="about">About</Link>
    </div>
);

export default view;