import React from "react";

import {HomeSect2} from './Wsection.element';
import {Container} from '../GlobalStyle';

import EloMap from "../EloMap";




// WSection2

export default class WSection2 extends React.Component { 

    
    render() {
        return (
        <>
        <HomeSect2>
        <Container>
        <h1>Second half of Welcome</h1>
        {/* <EloMap
				doctors={this.props.doctors}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/> */}
        </Container>
        </HomeSect2>
        </>
        )
    }
}

