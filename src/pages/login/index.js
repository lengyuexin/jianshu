import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Container, LoginBox, LoginBoxTop, LoginBoxBot, LoginForm,Tip ,LoginButton} from './style'
// import { actionCreators } from '../store'
import imgUrl from '../../statics/other.png'
class Login extends PureComponent {


    render() {

        return (
            <Container>
                <LoginBox>
                    <LoginBoxTop>
                        <Link className="service active" to="/login">登陆</Link>
                        <strong>·</strong>
                        <Link className="service" to="/login">注册</Link>
                    </LoginBoxTop>
                    <LoginBoxBot>
                        <LoginForm>
                            <input placeholder="手机号或邮箱" type="text" />
                            <input placeholder="密码" type="password" />
                            <Tip>
                                <span><input checked type="checkbox" readOnly />记住我</span>
                                <span>登录遇到问题？</span>
                            </Tip>
                            <LoginButton>登录</LoginButton>
                        </LoginForm>
                    </LoginBoxBot>
                    <img src={imgUrl} alt="其他登录方式"/>
                </LoginBox>
            </Container>
        );
    }
}


// const mapState = (state) => {
//     return {
//         title: state.getIn(['Login', 'title']),
//         content: state.getIn(['Login', 'content'])

//     }
// }
// const mapDispatch = (dispatch) => {
//     return {
//         getLogin(id){
//             dispatch(actionCreators.getLogin(id));  
//         }
//     }
// }
export default connect(null, null)(Login);    