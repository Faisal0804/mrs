import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePages from "../../pages/HomePages/HomePages";
import AllPackagePage from "../../pages/AllPackagePage/AllPackagePage";
import PaymentPages from "../../pages/PaymentPages/PaymentPages";
import ContactPages from "../../pages/ContactPages/ContactPages";
import AboutPages from "../../pages/AboutPages/AboutPages";

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePages}/>
                    <Route exact path="/home" component={HomePages}/>
                    <Route exact path="/package" component={AllPackagePage}/>
                    <Route exact path="/payment" component={PaymentPages}/>
                    <Route exact path="/contact" component={ContactPages}/>
                    <Route exact path="/about" component={AboutPages}/>

                </Switch>

                
            </Fragment>
        );
    }
}

export default AppRouter;