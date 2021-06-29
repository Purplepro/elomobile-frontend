import React, {useState, useEffect} from 'react';
import ComponentFunction from './EloRequest';
import moment from 'moment';
import EloRequest from './EloRequest';
import useParams from 'react-router-dom';
import axios from 'axios'




const EloHistory = () => {

    // const seeHistory = () => {
    //     const url = `${REACT_APP_SERVER_URL}/api/elorequest`;
    //         try {
    //             axios ({
                    
    //                 method: 'get',
    //                 url: url,
    //                 headers: {
    //                     Authorization: currentUser,
    //                     'Content-Type': 'application/json',

    //                 },
    //                 data: {
    //                     fullName: fullName,
    //                     evMake: evMake,
    //                     evModel: evModel,
    //                     color: color,
    //                     location: location, 
    //                     phoneNumber: phoneNumber,
    //                 },
    //             });
    //             window.location.reload();
    //         } catch (error) {
    //             console.log(error);
    //             console.log( 'error attempting to submit service order request')
    //         }
    //         console.log('working')
    // }

    return (
        <div>
            <h1>Passed Elo History</h1>
            <hr/>
            <div>
            
            </div>
        </div>
    )
}

export default EloHistory;