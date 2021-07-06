import React from 'react';
import 'react-router-dom';
import './EloRequest'
import Section1 from './WsectionOne/Wsection1';
import Section2 from './Wsectiontwo/Wsection2';
export {default as Section1 } from './WsectionOne/Wsection1'


const Welcome = () => {
    return (

        <>

            <Section1/>
            {/* <Section2/> */}
           
            </>
    )
}

export default Welcome;