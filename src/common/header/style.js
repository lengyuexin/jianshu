import styled from 'styled-components';
import logoUrl from '../../statics/logo.png'
export const Container = styled.div`
    position:relative;
    width:100%;
    height:56px;
    border-bottom:1px solid #f0f0f0;


`
export const Logo = styled.div`
    position:absolute;
    top:0px;
    left:12%;
    width:100px;
    height:56px;
    background:url(${logoUrl});
    background-size:contain;

`
export const Nav = styled.div`
   width:960px;
   height:100%;
   margin:0 auto;

`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    color:#333;
   &.left{
       float:left;
   }
   &.right{
       float:right;
       color:#969696;
   }
   &.active{
       color:#ea6f5a;
   }
   &.beta img{
      height:25px;
      vertical-align: middle;
   }
   

`
export const SearchBox = styled.div`
  position:relative;
  float:left;
 
  & .zoom{
      position:absolute;
      right:48px;
      bottom:10px;
      border-radius:19px;
      line-height:18px;
      padding:1px;
      &.focused{
          background: #777;
          color:#000;
      }
  }

`

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
 &.slide-enter{
      transition:all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
      transition:all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }  
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
margin:9px 30px 0 20px;
padding:0 20px;
background:#eee;
color:#666;
&::placeholder{
    color:#999;
}
&.focused{
    width:240px;
}
`
export const SearchInfo = styled.div`
  position:absolute;
  left:14px;
  top:56px;
  width:240px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  background-color: #fff;

`
export const SearchInfoTitle = styled.div`
line-height:20px;
font-size:14px;
margin:20px 0 15px 0;
color:#969696;

`
export const SearchInfoSwitch = styled.span`
cursor: pointer;
float:right;
font-size:13px;
.spin{
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;
    transform-origin:center center;
}

`
export const SearchInfoList = styled.div`
overflow:hidden;
`
export const SearchInfoItem = styled.a`
float:left;
margin:0 10px 15px 0;
font-size:12px;
line-height:20px;
padding:0 5px;
border:1px solid #ddd;
border-radius:3px;
color:#787878;

`
export const Addition = styled.div`
position:absolute;
top:0px;
right:8%;
height:56px;

`
export const Button = styled.div`
float:right;
margin:9px 20px 0 0;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
    color:#ec6149;
}
&.write{
    color:#fff;
    background:#ec6149;
}
`