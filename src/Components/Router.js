import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// reach router를 Dom으로 쓸 건데 BrowserRouter로 할 거고, 이건 Router에 쓸 거야.
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "./Header";
import Detail from "Routes/Detail";

export default () => (
  // Router라는 component 덩어리의 큰 component를 만든다.
  // Route는 Router안에서만 사용이 가능하다.
  <Router>
    {/* 하나의 component만 리턴할 수 있기 때문에 Fragments를 사용한다. */}
    <Header />
    <Switch>
      {/* 어떤 url에서 어떤 Route를 render할 것인지 알려주고, 
            이 Route에는 어떤 component가 연결되어있는지 설정한다. */}
      {/* children elements를 사용한 방법이 더 권장된다. */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/tv">
        <TV />
      </Route>
      <Route path="/search">
       <Search />
      </Route>
      <Route path="/movie/:id" render={(props) => (
        <Detail key={props.match.params.id} {...props}/>
      )}/>
      <Route path="/show/:id" render={(props) => (
        <Detail key={props.match.params.id} {...props}/>
      )}/>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
