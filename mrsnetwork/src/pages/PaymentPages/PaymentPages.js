import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PagesTopBanner from "../../components/PagesTopBanner/PagesTopBanner";
import Allpackages from "../../components/Allpackages/Allpackages";
import Footer from "../../components/Footer/Footer";
import Bill from "../../components/Bill/Bill";

class PaymentPages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="payment"/>
                <PagesTopBanner pagesTitle="Our Payment System"/>
                <Bill/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PaymentPages;