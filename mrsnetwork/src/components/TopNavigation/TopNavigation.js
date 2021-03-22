import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import beforeLogo from '../../asset/images/mrslogo.png'
import afterLogo from '../../asset/images/mrslogo.png'
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[beforeLogo],
            navVariant:"dark",
            navBarBack:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll',navBarLogo:[afterLogo],navBarBack:'navBackgroundScroll',
                navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle',navBarLogo:[beforeLogo],navBarBack:'navBackground'
            , navBarItem:'navItem'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>

                <Navbar  variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg"  >
                    <Navbar.Brand  className={this.state.navBarTitle} href="#home"><img  style={{width:"150px"}} src={this.state.navBarLogo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav >

                            <Nav.Link><NavLink className={this.state.navBarItem}   activeStyle={{color:'#00a8ee'}} to="/home">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navBarItem}  activeStyle={{color:'#00a8ee'}} to="/package">PACKAGES</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navBarItem} activeStyle={{color:'#00a8ee'}}  to="/payment">PAYMENT</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navBarItem}   to="#">COVERAGE AREA</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navBarItem}   to="#">TV SERVER</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navBarItem}  to="#">FTP SERVER</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navBarItem} activeStyle={{color:'#00a8ee'}} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navBarItem} activeStyle={{color:'#00a8ee'}} to="/about">ABOUT</NavLink></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </Fragment>
        );
    }
}

export default TopNavigation;