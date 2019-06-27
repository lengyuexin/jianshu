import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import betaUrl from '../../statics/beta.png'
import { CSSTransition } from 'react-transition-group'
import {
  Container, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchBox, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style'

export default (props) => {
  const {
    isFocus, handleFocus, handleBlur, list, curPage,
    changeMouseIn, changeMouseLeave, mouseIn, changePage, totalPage } = props;
  const getListArea = () => {
    const pageList = [];
    const jsList = list.toJS();
    if (jsList) {
      for (let i = (curPage - 1) * 10; i < curPage * 10; i++) {
        pageList.push(
          <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if (isFocus || mouseIn) {
      return (
        <SearchInfo onMouseEnter={changeMouseIn} onMouseLeave={changeMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
             onClick={() => changePage(curPage, totalPage,document.getElementById("spin"))}>
               <i id="spin"className="iconfont spin">&#xe851;</i>
               换一批
               </SearchInfoSwitch>
            </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  return (
    <Fragment>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left"><a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps">下载App</a></NavItem>
          <Link to="/login">
            <NavItem className="right">登陆</NavItem>
          </Link>
          <NavItem className="right beta">
            <img src={betaUrl} alt="beta" />
          </NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchBox>
            <CSSTransition
              in={isFocus}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={isFocus ? "focused" : ""}
                onFocus={()=>handleFocus(list)}
                onBlur={handleBlur}
              />
            </CSSTransition>
            <i className={isFocus ? "focused iconfont zoom" : "iconfont zoom"}>&#xe614;</i>
            {getListArea()}
          </SearchBox>
          <Addition>
            <Button className="write"><i className="iconfont">&#xe615;</i>写文章</Button>
            <Link to="/login"><Button className="reg">注册</Button></Link>
          </Addition>
        </Nav>
      </Container>
    </Fragment>
  );
}