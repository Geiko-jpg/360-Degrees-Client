import React, {useState, useEffect} from 'react';
import './Home.scss'; // import SASS CODE

const BoxTest = () => {
    // usestate [variable, setter]
    const [testVariable, setTest] = useState(""); // declare as empty string

    useEffect(() => {
        setTest("THIS IS 360 DEGREES WEBSITE"); // set
    }, []);
    // - - > CLICK FUNCTIONS
    function pressed(event){
        alert(`This is the Alert -> ${testVariable}`);
        event.preventDefault();
    }

    return(
        // - - > HTML NA TOH
        <>
            {/*THIS IS A BOX*/}
            <div id="outer-box" onClick={pressed} >
                <div id="inner-box">

                </div>
            </div>
        </>
    );
}

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "360 Degrees"
        }
    }
    componentDidMount(){
        document.title = `Project | ${this.state.title}`;
    }

    render(){
        return(
            <>
                <head>

                </head>
                <body>
                    <BoxTest />
                </body>
            </>
        );
    }
}