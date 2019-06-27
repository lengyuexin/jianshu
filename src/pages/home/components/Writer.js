import React, { PureComponent } from 'react';
import { WriterBox} from '../style';
import imgUrl from '../../../statics/writer.png'
class Writer extends PureComponent {
   
    render() {
        return (
            <WriterBox>
                <img src={imgUrl} alt="writer" width="100%"/>
            </WriterBox>
        );
    }
}

export default Writer;    