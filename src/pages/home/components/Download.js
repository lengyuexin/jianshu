import React, { PureComponent } from 'react';
import {DownloadBox,DownloadInfo ,DownloadTitle,DownloadDesc,DownloadBg} from '../style'
import imgUrl from '../../../statics/download.png'
class Download extends PureComponent {
    
    render() {
        return (
            <DownloadBox>
                <img src={imgUrl} alt="扫码下载简书"  />
                <DownloadBg className="downloadBg"/>
                <DownloadInfo>
                    <DownloadTitle>下载简书APP ></DownloadTitle>
                    <DownloadDesc>随时随地发现和创造内容</DownloadDesc>
                </DownloadInfo>
            </DownloadBox>
        );
    }
}

export default Download;    