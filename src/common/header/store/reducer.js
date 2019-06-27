import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST,CHANGE_MOUSEIN,CHANGE_MOUSELEAVE,CHANGE_PAGE } from './actionTypes';
import { fromJS } from 'immutable'
const defaultState = fromJS({
    isFocus: false,
    mouseIn: false,
    list: [],
    curPage:1,//当前页
    totalPage:1//总页

})
export default (state = defaultState, action) => {

    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set("isFocus", true);
        case SEARCH_BLUR:
            return state.set("isFocus", false);
        case CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case CHANGE_MOUSEIN:
            return state.set("mouseIn",true);
        case CHANGE_MOUSELEAVE:
            return state.set("mouseIn",false);
        case CHANGE_PAGE:
            return state.set("curPage",action.curPage);
        default: return state;
    }

}
