import React from 'react';
import { Link } from 'react-router';

const view = (data) => 
(
    <div className="container">
        <h2>Calculator example</h2>
        <input type="number" onChange={data.handlers.firstNumber} value={data.numbers.first}/>
        +
        <input type="number" onChange={data.handlers.secondNumber} value={data.numbers.second}/>
        =
        <span>{data.result}</span>
        <br/>
        <Link to="/">Home</Link>
    </div>
);

export default view;