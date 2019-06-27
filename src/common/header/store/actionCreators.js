import { SEARCH_FOCUS, SEARCH_BLUR,CHANGE_LIST,CHANGE_MOUSEIN,CHANGE_MOUSELEAVE,CHANGE_PAGE } from './actionTypes';
import {fromJS} from 'immutable'
import axios from 'axios'
export const changeToFocus = () => ({
    type: SEARCH_FOCUS
})
export const changeToBlur = () => ({
    type: SEARCH_BLUR
})
export const changeMouseIn = () => ({
    type: CHANGE_MOUSEIN
})
export const changeMouseLeave = () => ({
    type: CHANGE_MOUSELEAVE
})
export const changePage = (curPage) => ({
    type: CHANGE_PAGE,
    curPage
})
//内部使用，不必暴露出去
 const changeList = (data) => ({
    type: CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})

export const getList = () =>{
    return (dispatch)=>{
        let api="https://lengyuexin.github.io/json/jianshu/search.json";
        axios.get(api).then(res=>{
            dispatch(changeList(res.data))
        })
    }
}