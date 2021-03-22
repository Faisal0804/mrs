import React, {Component, Fragment} from 'react';
import Allpackages from "../../components/Allpackages/Allpackages";
import Footer from "../../components/Footer/Footer";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PagesTopBanner from "../../components/PagesTopBanner/PagesTopBanner";

class AllPackagePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="packages"/>
                <PagesTopBanner pagesTitle="Our All Packages"/>
                <Allpackages/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllPackagePage;