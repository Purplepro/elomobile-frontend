import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EloMap from './EloMap';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken');








const EloRequest = (props) => {
        const [requests, setRequests] = useState([]);
        const [fullName, setFullName] = useState("");
        const [evMake, setEvMake] = useState("");
        const [evModel, setEvModel] = useState("");
        const [color, setColor] = useState("");
        const [location, setLocation] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");

        const enterFullNameHandler = (e) => {
            setFullName(e.target.value);
        }
        const enterEvMakeHandler = (e) => { 
            setEvMake(e.target.value);
        }
        const enterEvModelHandler = (e) => {
            setEvModel(e.target.value);
        }
        const enterColorHandler = (e) => {
            setColor(e.target.value);
        }
        const enterLocationHandler = (e) => {
            setLocation(e.target.value);
        }
        const enterPhoneNumberHandler = (e) => {
                //this is where I can send the person a text
                setPhoneNumber(e.target.value)
        }






       
        
        
        const submitHandler = async (e) => {
            e.preventDefault();
            const url = `${REACT_APP_SERVER_URL}/api/elorequest`;
            try {
                const updatedEloHistory = await axios({
                    
                    method: 'post',
                    url: url,
                    headers: {
                        Authorization: currentUser,
                        'Content-Type': 'application/json',

                    },
                    data: {
                        fullName: fullName,
                        evMake: evMake,
                        evModel: evModel,
                        color: color,
                        location: location, 
                        phoneNumber: phoneNumber,
                    },
                });
                console.log(updatedEloHistory.data);
                props.history.push('/')
                // window.location.reload();
            } catch (error) {
                console.log(error);
                console.log( 'error attempting to submit service order request')
            }
            // history.push(`/elohistory`)
            // Redirect('/elorquest')
            console.log('working')
        };

        useEffect(() => {
            const url = `${REACT_APP_SERVER_URL}/api/elorequest`;
            console.log('hitting react git request to elo url')
            console.log(currentUser);
            axios
            .get(url,{
                headers: {
                    Authorization: currentUser,
                },
            })
            .then((response) => {
                let newRequests = response.data;
                setRequests(newRequests);
            })
            .catch(error=> {
                console.log(error)
                console.log('error fetching data within useEffect')
            });
        }, []);
            console.log(requests)

    // const seeHistory = requests.map((j, i) => { 
    //             return (
    //               <div>
    //                 <li>
    //                   Date: {moment(j.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}{" "}
    //                 </li>
    //                 <li>{j.fullName}</li>
    //                 <li>Location: {j.phoneNumber}</li>
    //                 {/* <button
    //                   onClick={() => {
    //                     deleteEntry(j);
    //                   }}
    //                   className=" btn btn-primary j-submit"
    //                 >
    //                   Cancel Charging Service
    //                 </button> */}
    //                 <br></br>
    //               </div>
    //             );
    //           });

            
    return (
        <div className="elo_page">

            <div className=" card card-body elo_form_div">
                <form onSubmit={submitHandler} className="elo-form">
            <div className="form-control">
                
            <label htmlFor='fullName' className="elo-labels">Full name</label>
            <input type="text" onChange={enterFullNameHandler} name='fullname' className="elo-input"/>
            </div>
            <div className="form-control">
            <label htmlFor='evMake' className="elo-labels">Ev make</label>
            <input type="text" onChange={enterEvMakeHandler} name='evmake' className="elo-input"/>
            </div>
            <div className="form-control">
            <label htmlFor='evModel' className="elo-labels"> Ev model</label>
            <input type="text" onChange={enterEvModelHandler} name='evmodel' className="elo-input"/>
            </div>
            <div className="form-control">
            <label htmlFor='color' className="elo-labels"> Color</label>
            <input type="text" onChange={enterColorHandler} name='color' className="elo-input"/>
            </div>
            <div className="form-control">
            <label htmlFor='location' className="elo-labels">Location</label>
            <input type="text" onChange={enterLocationHandler} name='location'  className="elo-input"/>
            </div>
            <div className="form-control">
            <label htmlFor='phoneNumber' className="elo-labels">Phone number</label>
            <input type="text" onChange={enterPhoneNumberHandler} name='phonenumber' className="elo-input"/>
            </div>
            <button className='btn btn-primary elo-button' type='submit'>Submit</button>
                </form>
            </div>
            <div className="map-area">
            
            </div>
            {/* <EloMap/> */}
        </div>
    )
}


export default EloRequest;