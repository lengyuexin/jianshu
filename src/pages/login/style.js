import styled from 'styled-components';

export const Container = styled.div`
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:56px;
  background: #eee;
  text-align:center;


`
export const LoginBox = styled.div`
    width: 400px;
    height:500px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;

`
export const LoginBoxTop = styled.div`
   margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
 
    & .service{
      text-decoration:none;
    
    }
    & strong{
      font-weight: 700;
    }
    & .active.service{
      font-weight: 700;
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
    & .service{
      padding:0 10px;
      color: #969696;
    }

`
export const LoginBoxBot= styled.div`
    text-align: center;
    font-size: 14px;
 
`
export const LoginForm= styled.form`
   
   margin-bottom: 30px;
   width:300px;
   height:200px;
   & input[type=text],input[type=password]{
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: #eee;
    vertical-align: middle;
   
   }
`

export const Tip= styled.div`
  display:flex;
  justify-content:space-between;
  color:#aaa;
 
`
export const LoginButton= styled.div`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;

    &:hover{
      background: #3194dd;
    }
 
`

