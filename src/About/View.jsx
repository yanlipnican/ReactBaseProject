import React from 'react';
import { Link } from 'react-router';

const view = (data) => 
(
    <div className="container">
        <h1>{data.title}</h1>
        <p onClick={data.handlers.p_click}>{data.text}</p>
        <Link to='/'>Homepage</Link>
    </div>
);

export default view;