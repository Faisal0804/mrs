import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PagesTopBanner from "../../components/PagesTopBanner/PagesTopBanner";
import Allpackages from "../../components/Allpackages/Allpackages";
import Footer from "../../components/Footer/Footer";
import ContactMain from "../../components/ContactMain/ContactMain";

class ContactPages extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="contact"/>
                <PagesTopBanner pagesTitle="Contact Us "/>
                <ContactMain/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPages;