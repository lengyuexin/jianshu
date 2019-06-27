import { INITLIST,AGAIN_INITLIST ,CHANGE_SHOW_SCROLL} from './actionTypes';
import { fromJS } from 'immutable'
const defaultState = fromJS({
    list: [],
    bnList:[
        {id:1,url:"https://lengyuexin.github.io/pic/jianshu/img/bn1.png"},
        {id:2,url:"https://lengyuexin.github.io/pic/jianshu/img/bn2.png"},
        {id:3,url:"https://lengyuexin.github.io/pic/jianshu/img/bn3.png"},
        {id:4,url:"https://lengyuexin.github.io/pic/jianshu/img/bn4.png"}
    ],//存放右侧顶部的图片数组
    curPage:1,//文章列表当前页
    totalPage:0,//文章列表总页
    showScroll:false// 是否显示返回顶部小方块

})
export default (state = defaultState, action) => {

    switch (action.type) {
        case INITLIST:
            return state.set("list", action.data);
        case AGAIN_INITLIST:
            return state.merge({
                "list":state.get('list').concat(action.data),
                "curPage":action.nextPage
            });
        case CHANGE_SHOW_SCROLL:
            return state.set("showScroll", action.flag);
        default: return state;
    }

}
