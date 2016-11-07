import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import view from './View.jsx';

class Homepage extends React.Component {
    constructor() {
        super();

        this.data = {
            title : 'Hello internet!',
        };
    }
    
    render() {
        return view(this.data);
    }
}

const actions = {

};

const mapStateToProps = (state, ownProps) => {
    return {

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);