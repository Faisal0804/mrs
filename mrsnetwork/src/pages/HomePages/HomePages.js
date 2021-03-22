import React, {Component, Fragment} from 'react';
import TopBanner from "../../components/TopBanner/TopBanner";
import Packages from "../../components/Packages/Packages";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import Connection from "../../components/Connection/Connection";
import Contact from "../../components/Contact/Contact";
import ClientReview from "../../components/ClientReview/ClientReview";
import Bill from "../../components/Bill/Bill";
import Footer from "../../components/Footer/Footer";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import Allpackages from "../../components/Allpackages/Allpackages";

class HomePages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="MRS Network"/>
                <TopBanner />
                <HomeAbout/>
                <Allpackages/>
                <Connection/>
                <Contact/>
                <ClientReview/>
                <Bill/>
                <Footer/>

            </Fragment>
        );
    }
}

export default HomePages;