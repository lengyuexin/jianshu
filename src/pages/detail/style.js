import styled from 'styled-components';

export const Container = styled.div`
   width:620px;
   margin:0 auto;
   overflow:hidden;
   padding-bottom:100px;


`
export const Header = styled.div`
  margin:50px 0 20px 0;
  font-size:34px;
  line-height:44px;
  color:#333;
  font-weight:bold;


`
export const Content = styled.div`
 & img{
    width:100%;
 }
 & h1{
    font-size:24px;
    color:#000;
    font-weight:700;
    
 }
 & hr{width:100%;height:1px;}
  color:#2f2f2f;
   & b{
      font-weight:bold;
   }
   & p{

      margin:25px 0;
      font-size:16px;
      line-height:30px;
   }

`