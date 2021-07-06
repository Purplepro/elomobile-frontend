import React from 'react'
import {Link} from 'react-router-dom';
import '../EloRequest';
import { 
    HomeSect,
    RequestRow,
    RequestColumn,
    TextWrapper,
 } from './Wsection.element';
import {Container, Button} from '../GlobalStyle';
import Evpicture from '../../images/evcharge.png'




const WSection1 = ({ lightBg }) => {

    return (
        <>
        <HomeSect lightBg={lightBg}>
        <Container>
            <RequestRow>
                <RequestColumn>
                    <TextWrapper>
                    <h1 className="welcome-header">Welcome</h1>
                    <p className="welcome-paragraph">Switching the narrative and serving Electric vehicle owners everywhere mobily worldwide</p>
                <Link to='/elorequest'>
                <Button className='btn btn-primary eloRouteButton'>Elo Service</Button>
                </Link>
                            </TextWrapper>
                </RequestColumn>
                <RequestColumn>
                <img src={Evpicture} className="evcharging-Home-pic" alt="ev charging"/>
            </RequestColumn>
            </RequestRow>
        </Container>
        </HomeSect>
        </>
    )
}

export default WSection1;