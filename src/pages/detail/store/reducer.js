import {SHOW_DETAIL  } from './actionTypes';
import { fromJS } from 'immutable'
const defaultState = fromJS({
   
    title: "",
    content:""

})
export default (state = defaultState, action) => {

    switch (action.type) {
        case SHOW_DETAIL:
            return state.merge({
                title:action.detailItem.get('title'),
                content:action.detailItem.get('content')
            });

        default: return state;
    }

}
