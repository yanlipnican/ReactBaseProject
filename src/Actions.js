import CALCULATOR from 'Calculator/Actions';
import HOMEPAGE from 'Homepage/Actions';
import ABOUT from 'About/Actions';

const ACTIONS = {
    CALCULATOR,
    HOMEPAGE,
    ABOUT,
};

function compile(actions, parentNames = []){
    for(let key in actions){
        if(typeof actions[key] === 'object'){
            parentNames.unshift(key);
            compile(actions[key], parentNames);
        } else {
            let result = actions[key];
            for(let parentName of parentNames){
                result = `${parentName}_${result}`;
            }
            actions[key] = result;
        }
    }
}

compile(ACTIONS);

export default ACTIONS;