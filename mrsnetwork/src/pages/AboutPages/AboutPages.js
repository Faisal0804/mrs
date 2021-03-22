import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PagesTopBanner from "../../components/PagesTopBanner/PagesTopBanner";
import Allpackages from "../../components/Allpackages/Allpackages";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";

class AboutPages extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PagesTopBanner pagesTitle="About Us"/>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPages;