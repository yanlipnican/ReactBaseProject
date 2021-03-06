import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import view from './View.jsx';
import ACTIONS from 'Actions';

class About extends React.Component {
    constructor() {
        super();

        this.data = {
            title : 'About',
            text : 'We are poor.',
            handlers : {
                p_click : this.p_click.bind(this),
            }
        };
    }

    p_click(){
        console.log(this.data.text);
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

export default connect(mapStateToProps, mapDispatchToProps)(About);