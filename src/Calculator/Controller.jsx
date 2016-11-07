import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import view from './View.jsx';
import ACTIONS from 'Actions';

class Calculator extends React.Component {
    constructor() {
        super();
    }

    firstNumber(e) {
        let value = parseInt(e.target.value);
        if(!isNaN(value)){
             this.props.actions.setFirstValue(value);
        }
    }

    secondNumber(e) {
        let value = parseInt(e.target.value);
        if(!isNaN(value)){ 
            this.props.actions.setSecondValue(value);
        }
    }
    
    render() {
        let data = {
            handlers : {
                firstNumber : this.firstNumber.bind(this),
                secondNumber : this.secondNumber.bind(this),
            },
            numbers: {
                first : this.props.calculator.firstValue,
                second : this.props.calculator.secondValue,
            },
            result : this.props.calculator.result,
        };

        return view(data);
    }
}

const actions = {
    setFirstValue : (value) => {
        return {type : ACTIONS.CALCULATOR.SET_FIRST_VALUE, value};
    },
    setSecondValue : (value) => {
        return {type : ACTIONS.CALCULATOR.SET_SECOND_VALUE, value};
    },
    calculate : () => {
        return {type : ACTIONS.CALCULATOR.CALCULATE};
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        calculator: state.Calculator,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);