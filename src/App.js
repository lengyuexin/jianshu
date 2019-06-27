import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from './style.js'
import GlobalIconFontStyle from './statics/iconfont/iconfont'
import Header from './common/header/index'
import Home from './pages/home'
import Detile from './pages/detail'
import Login from './pages/login'

function App() {
  return (

    < Fragment>

      <GlobalStyle />
      <GlobalIconFontStyle />

      <Router>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/detail/:id" component={Detile}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Router>

    </Fragment>

  );
}

export default App;
