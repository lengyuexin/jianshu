import React from 'react';
import Loadable from 'react-loadable';
import imgUrl from '../../statics/loading.jfif'
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
  	 return <img src={imgUrl} alt="loading" />
  }
});

export default () => <LoadableComponent/>
