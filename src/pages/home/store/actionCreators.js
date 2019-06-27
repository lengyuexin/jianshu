import {INITLIST, AGAIN_INITLIST,CHANGE_SHOW_SCROLL } from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable'

const getList = (data) => ({
    type: INITLIST,
    data:fromJS(data)
    
})

const againGetList = (data,nextPage) => ({
    type: AGAIN_INITLIST,
    data:fromJS(data),
    nextPage
    
})

const switchShowScroll = (flag) => ({
    type: CHANGE_SHOW_SCROLL,
    flag

})


export const renderList=()=>{
    return (dispatch)=>{
        const api="https://lengyuexin.github.io/json/jianshu/list.json";
        axios.get(api).then(res=>{
            dispatch(getList(res.data));
        })

    }
}
export const againRenderList=(curPage)=>{
    return (dispatch)=>{
        const api="https://lengyuexin.github.io/json/jianshu/list.json?curPage="+curPage;
        axios.get(api).then(res=>{
            dispatch(againGetList(res.data,curPage+1));
        })

    }
}
export const toggleShow=(flag)=>{
    return(dispatch)=>{
        dispatch(switchShowScroll(flag))
    }
}


