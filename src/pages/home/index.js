import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Container, HomeLeft, HomeRight, Banner, BackTop } from './style'
import { actionCreators } from '../home/store/'
import ArticleList from './components/ArticleList'
import Download from './components/Download'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends PureComponent {
   

    backTop = () => {
        window.scrollTo(0, 0);
    }
    componentDidMount(){
        this.bindEvent();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.switch)
    }
    bindEvent=()=>{
     
        window.addEventListener('scroll',this.props.switch)
    }
    render() {
        const { showScroll } = this.props;
        return (
            <Container>
                <HomeLeft>
                    <Banner />
                    <ArticleList></ArticleList>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Download></Download>
                    <Writer></Writer>
                </HomeRight>
                {
                    showScroll ? <BackTop onClick={this.backTop}>返回顶部</BackTop> : null
                }

            </Container>
        );
    }
}


const mapState = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])

    }
}
const mapDispatch = (dispatch) => {
    return {
        switch(){
            if(document.documentElement.scrollTop>100){
                dispatch(actionCreators.toggleShow(true))
            }else{
                dispatch(actionCreators.toggleShow(false))
            }
          
        }

    }
}

export default connect(mapState, mapDispatch)(Home);    