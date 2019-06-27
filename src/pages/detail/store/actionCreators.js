import { SHOW_DETAIL } from './actionTypes';
import { fromJS } from 'immutable'
import axios from 'axios'



const show = (detailItem) => ({
    type: SHOW_DETAIL,
    detailItem: fromJS(detailItem)

})

export const getDetail = (id) => {
    return (dispatch) => {
        let api = "https://lengyuexin.github.io/json/jianshu/detail.json";
        axios.get(api).then(res => {
            let list = res.data;
            list.map(item => {
                if (item.id === Number(id)) {
                    dispatch(show(item))
                }
                return null;
            })

        })
    }
}