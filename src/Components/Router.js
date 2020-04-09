import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV"
import Search from "Routes/Search"
// reacht router를 Dom으로 쓸 건데 HashRouter로 할 거고, 이건 Router랑 Route에 쓸 거야.

export default () =>(
    // Router라는 component 덩어리의 큰 component를 만든다.
    // Route는 Router안에서만 사용이 가능하다.
    <Router> 
        {/* 하나의 component만 리턴할 수 있기 때문에 Fragments를 사용한다. */}
        <> 
            {/* 어떤 url에서 어떤 Route를 render할 것인지 알려주고, 
            이 Route에는 어떤 component가 연결되어있는지 설정한다. */}
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
        </>
    </Router>
);

