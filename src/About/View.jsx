import React from 'react';
import { Link } from 'react-router';

export default class AboutView extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>{this.props.data.title}</h1>
                <p onClick={this.props.data.handlers.p_click}>{this.props.data.text}</p>
                <Link to='/'>Homepage</Link>
            </div>
        );
    }
}