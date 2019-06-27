import styled from 'styled-components';
import bannerUrl from '../../statics/banner.jpg'
import imgUrl from '../../statics/download.png'
export const Container = styled.div`
   width:960px;
   margin:0 auto;
   overflow:hidden;


`
export const HomeLeft = styled.div`
  float: left;
  width:625px;
  padding-top:30px;
  margin-left:15px;

`
export const Banner = styled.img.attrs({
    src:bannerUrl,
    alt:"banner"
})`
  width:625px;
  height:270px;

`
export const ListItem = styled.div`
height:140px;
padding:20px 0;
border-bottom:1px solid #dcdcdc;

  
`
export const ListItemImg = styled.img`
float:right;
width:125px;
height:80px;
border-radius:10px;


`
export const ListInfo = styled.div`
float:left;
width:500px;
& h3{
   margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}
& p{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
}

`
export const Footer = styled.div`

 & span{
   float:left;
   margin-right:4px;
   font-size:14px;
   color:#aaa;
   padding:0 2px;
 }

`
export const HomeRight = styled.div`
   float:right;
   width:280px;


`
export const RecommendBox = styled.div`
 
margin:30px 0;
width:280px;

`
export const RecommendItem = styled.div`
 height:50px;
 margin:10px 0;
 background:url(${(props)=>props.imgUrl});
 background-size: contain;

`
export const WriterBox = styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
text-align:center;
height:300px;
line-height:300px;

`
export const LoadMore = styled.div`

height:40px;
line-height:40px;
text-align:center;
background: #a5a5a5;
border-radius:20px;
color:#fff;
margin:30px 0;
cursor: pointer;
`


export const BackTop = styled.div`
position:fixed;
right:100px;
bottom:30px;
width:80px;
height:80px;
line-height:80px;
text-align:center;
border:1px solid #ccc;
font-size:14px;
border-radius:8px;
letter-spacing:4px;
box-shadow:0 0 8px #333;
color:#aaa;
background:#fff;

`

export const DownloadBox = styled.div`
    cursor: pointer;
    position:relative;
    margin-bottom: 30px;
    padding: 34px 22px  0 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;

& img{
  opacity: .85;
  width:60px;
  height:60px;
}

 &:hover{
     .downloadBg{
    display:block;
  }
} 

`

export const DownloadBg = styled.div`
   
    background:url(${imgUrl});
    height:200px;
    width:200px;
    position:absolute;
    top:-170px;
    left:40px;
    display:none;


`
export const DownloadInfo = styled.div`
    width:143px;
    height:43px;
    display: inline-block;
    vertical-align: middle;
    padding-bottom:1px;
    margin-left: 7px;
    margin-bottom:30px;
    


`
export const DownloadTitle = styled.div`
   font-size: 15px;
   color: #333;


`
export const DownloadDesc = styled.div`
    margin-top: 4px;
    font-size: 13px;
    color: #999;

`


