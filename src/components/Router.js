import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Header from "./Header";
import Home from "../routes/Home";
import Men from "../routes/Men";
import Women from "../routes/Women";
import Sale from "../routes/Sale";

export default ()=> (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/men" exact component={Men} />
                <Route path="/women" exact component={Women} />
                <Route path="/sale" exact component={Sale} />
            </Switch>
        </>
    </Router>
);