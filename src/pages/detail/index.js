import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Container,Header,Content} from './style'
import { actionCreators } from './store'
class Detail extends PureComponent {
   
    componentDidMount(){
       
        this.props.getDetail(this.props.match.params.id);
    }
    render() {
        const {title,content}=this.props;
        return (
            <Container>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}/>
            </Container>
        );
    }
}


const mapState = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])

    }
}
const mapDispatch = (dispatch) => {
    return {
        getDetail(id){
            dispatch(actionCreators.getDetail(id));  
        }
    }
}
export default connect(mapState,mapDispatch)(withRouter(Detail));    