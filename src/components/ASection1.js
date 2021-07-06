import React from 'react'
import './EloRequest';
import Evenergy from '../images/greenenergy.jpeg'

const ASection1 = () => {

    return (
        <div className="Asection-1">
            
        <h1>About</h1>
            <p> Who are we? What do we do? Whats our goal? Elo mobile brings to the ev market a new and more convenient way
                of Charging you vehicle on the go. With our mobile ev charging service, we come to you. Ensuring our customers needs are met makes us happy and keeps us 
                wanting improve and working towards your need. EloMobile also has many goals to hit and one of those are putting forth our solutions
                to solving clean energy problems. EloMobile is sustainable energy based company and we aim keep it as such to make the world a more healthier place to reside in.
            </p>
            <img src={Evenergy} alt="view of earth covered in solar panels along with bright green trees" className="clean-energy-picture"/>
        </div>
    )
}

export default ASection1;