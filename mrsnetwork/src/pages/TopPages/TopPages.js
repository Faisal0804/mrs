import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PagesTopBanner from "../../components/PagesTopBanner/PagesTopBanner";

class TopPages extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PagesTopBanner/>

            </Fragment>
        );
    }
}

export default TopPages;