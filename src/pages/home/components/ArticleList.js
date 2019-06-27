import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store/'
import { ListItem, ListItemImg, ListInfo, Footer, LoadMore } from '../style';


class ArticleList extends PureComponent {


    render() {
        const { list, getMoreList,curPage } = this.props;
        const jsList = list.toJS();

        return (
            <Fragment>{
                jsList.map((item, idx) => {

                    return (
                        <Link  key={idx} to={'/detail/'+item.id}>
                        <ListItem>
                            <ListInfo>
                                <h3>{item.title}</h3>
                                <p>{item.info}</p>
                            </ListInfo>
                            <ListItemImg src={item.imgUrl} alt="" />
                            <Footer>
                                <span>{item.user}</span>
                                <span>ℹ{item.commentCount}</span>
                                <span>♥{item.like}</span>
                            </Footer>
                        </ListItem>
                        </Link>
                    )
                })
            }
                <LoadMore onClick={()=>getMoreList(curPage)}>加载更多</LoadMore>
            </Fragment>
        )


    }

    componentDidMount() {
        this.props.getList();
    }

}



const mapState = (state) => {
    return {
        list: state.getIn(['home', 'list']),
        curPage: state.getIn(['home', 'curPage'])
    }
}


const mapDispatch = (dispatch) => {
    return {
        getList() {
            dispatch(actionCreators.renderList());
        },
        getMoreList(curPage) {
            dispatch(actionCreators.againRenderList(curPage));
        }
    }
}
export default connect(mapState, mapDispatch)(ArticleList);    