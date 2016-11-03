import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Rename Component (it helps trace bug)
class RenameTHIS extends React.Component {
    render() {
        return (
            <div></div>
        );
    }
}

const actions = {

}

const mapStateToProps = (state, ownProps) => {
    return {

    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenameTHIS);