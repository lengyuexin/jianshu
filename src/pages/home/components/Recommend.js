import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { RecommendBox ,RecommendItem} from '../style';
class Recommend extends PureComponent {
    render() {
        const jsList=this.props.bnList.toJS();
        return (
            <RecommendBox>
                {
                    jsList.map(item=>{
                        return (
                            <RecommendItem key={item.id} imgUrl={item.url}/>
                        )
                    })
                }
               
                
            </RecommendBox>
        );
    }
}


const mapState = (state) => {
    return { 
        bnList: state.getIn(['home','bnList'])
     }
}

export default connect(mapState,null)(Recommend);    