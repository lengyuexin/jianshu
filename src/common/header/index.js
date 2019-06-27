import React from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store/'
import HeaderUI from './HeaderUI'


const Header = (props) => {
  const { 
    handleFocus, handleBlur, isFocus, list,
    curPage,changeMouseIn,mouseIn,
    changeMouseLeave ,changePage,totalPage} = props;
  return <HeaderUI
    handleFocus={handleFocus}
    handleBlur={handleBlur}
    isFocus={isFocus}
    list={list}
    curPage={curPage}
    totalPage={totalPage}
    changeMouseIn={changeMouseIn}
    mouseIn={mouseIn}
    changeMouseLeave={changeMouseLeave}
    changePage={changePage}

  />
}

const mapStateToProps = (state) => {
  return {
    isFocus: state.get('header').get('isFocus'),//或者 state.getIn(['header','isFocus'])
    list: state.get('header').get('list'),//或者 state.getIn(['header','list'])
    curPage: state.get('header').get('curPage'),//或者 state.getIn(['header','curPage'])
    totalPage: state.get('header').get('totalPage'),//或者 state.getIn(['header','totalPage'])
    mouseIn: state.get('header').get('mouseIn')//或者 state.getIn(['header','mouseIn'])
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      (list.size===0) && dispatch(actionCreators.getList()) ;
       dispatch(actionCreators.changeToFocus());
     
    },
    handleBlur() {
      dispatch(actionCreators.changeToBlur());
    },
    changeMouseIn() {
      dispatch(actionCreators.changeMouseIn());
    },
    changeMouseLeave() {
      dispatch(actionCreators.changeMouseLeave());
    },
    changePage(curPage,totalPage,spin) {
      let originAngle=+(spin.style.transform.replace(/[^\d]/ig,''));
      if(!originAngle){
        originAngle=0;
      }
      spin.style.transform=`rotate(${originAngle+360}deg)`;
      if(curPage<totalPage){
        dispatch(actionCreators.changePage(curPage+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
      
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Header);