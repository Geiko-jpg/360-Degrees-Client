import React, {useState, useEffect} from 'react';
import axios from 'axios'; // import axios as backend-frontend communication
import './Home.scss'; // import SASS CODE
// - - > IMPORT SVGs
import { ReactComponent as Wave } from './assets/images/landingwave.svg';
import { ReactComponent as Cart } from './assets/images/shopping-cart-solid.svg';
import { ReactComponent as Facebook } from './assets/images/facebook-brands.svg';
import { ReactComponent as Instagram } from './assets/images/instagram-brands.svg';
import { ReactComponent as Twitter } from './assets/images/twitter-brands.svg';

const InitializeFonts = () => { // Function to initialize fonts
    return(
        // - - > INITIALIZE ONLINE FONTS
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            {/*List of Fonts used 1: Barlow Condensed*/}
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;500;700&display=swap" rel="stylesheet"></link>
        </>
    );
}

const NavigationBar = () => { // Code Navbar HERE
    const [overviewLabel, setOverviewLabel] = useState(""); // Declare Overview Label
    const [contactsLabel, setContactsLabel] = useState(""); // Declare Contacts Label
    const [aboutUsLabel, setAboutUsLabel] = useState(""); // Declare About Us Label
    const [loginLabel, setLoginLabel] = useState(""); // Declare Login Label
    const [cartCount, setCartCount] = useState(0); 

    useEffect(() => {
        // - - > Execute Set Constants
        setOverviewLabel("Overview");
        setContactsLabel("Contacts");
        setAboutUsLabel("About Us");
        setLoginLabel("Login");
    }, []); // Navigation Bar ComponentDidMount

    // - - > Onclick Functions
    function gotoNavigation(pageValue){
        alert(`clicked page ${pageValue}`);
    }

    return(
        // - - > React Fragment
        <>
            <div id="navigation-wrapper">
                <span onClick={() => gotoNavigation("Overview")}>{overviewLabel}</span>
                <span onClick={() => gotoNavigation("Contacts")}>{contactsLabel}</span> 
                <span onClick={() => gotoNavigation("About Us")}>{aboutUsLabel}</span>
                <span onClick={() => gotoNavigation("Login")}>{loginLabel}</span>
                <Cart id="shopping-cart-layout" />
                <div id="circle-counter">
                    <span id="cart-number">{cartCount}</span>
                </div>
            </div>         
        </>
    );
}

const MastWave = () => { // Code For Mast Wave is in HERE
    function logoClick(){
        alert("LOGO IS CLICKED!");
    }
    return(
        <>
            {/*LOGO */}
            <Wave id="header-wave" />
            <div id="logo-layout" onClick={() => logoClick()}></div>
            {/*LINK TO 360 DEGREES SOCIAL MEDIA PLATFORMS*/}
            <div id="social-wrapper">
                <a href="https://web.facebook.com/360-Degrees-102115374851698" rel="noopener noreferrer" target="_blank">
                    <Facebook id="facebook-logo" />
                </a>
                <a href="https://www.instagram.com/360degrees.ph/" rel="noopener noreferrer" target="_blank">
                    <Instagram id="instagram-logo" />
                </a>
                <Twitter id="twitter-logo" />
            </div>
        </>
    );
}

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "360 Degrees",
            fetchedString: ""
        }
    }
    componentDidMount(){
        document.title = `Project | ${this.state.title}`;
        this.callAPI();
    }
    callAPI(){ // fetch data from backend server
        axios.get(`http://localhost:9000/testApi`) // promise
        .then((response) => {
            let data = response.data;
            this.setState({fetchedString: data});
        });
    }

    render(){
        return(
            <>
                <head>
                    {/*INITIALIZE FONTS IN HEADER*/}
                    <InitializeFonts />
                </head>
                <body>
                    {/*NAVIGATION BAR*/}
                    <NavigationBar />
                    <MastWave />
                    {/*STATIC GRANULE GIF BACKGROUND OVERLAY*/}
                    <div id="static-bg"></div>
                    {/*GENERAL TEXT*/}
                    <span id="prime-mast">A Celebration of Flavor, Food, and Indulgence...</span>
                    <span id="sub-prime">Turn your Palate to 360 Degrees!</span>
                </body>
            </>
        );
    }
}