import React from 'react';
import 'react-router-dom';
import './EloRequest'
import Section1 from './Wsection1';
import Section2 from './Wsection2';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <Section1/>
            <Section2/>
            
            </div>
    )
}

export default Welcome;