import React, {useState, useEffect} from 'react';
import './EloRequest';
import moment from 'moment';
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken'); 



const EloHistory = (props) => {

    const [data, setData] = useState([]);
    const [location, setLocation] = useState("");
    console.log()

    useEffect(() => {
        const url = `${REACT_APP_SERVER_URL}/api/elorequest`;
        console.log('hitting react get request to elo url')
        console.log(currentUser);
        axios
        .get(url,{
            headers: {
                Authorization: currentUser,
            },
        })
        .then((response) => {
            let newResponse = response.data.request;
            setData(newResponse);
            console.log(newResponse);
        })
        .catch(error=> {
            console.log(error)
            console.log('error fetching data within useEffect')
        });
    }, []);
        console.log()

    const cancelService = async (service) => {
            await fetch(`${REACT_APP_SERVER_URL}/api/elorequest/${service._id}`, {     
              method: "DELETE",
              headers: {
                Authorization: currentUser,
              },    
            }).then((res) => {
                console.log(res)
                console.log('hitting delete route')
                setData(data.filter(request => request._id !== service._id))
            //   window.location.reload();
            });
          };


          const handleLocationChange = (e) => {
              setLocation(e.target.value);
          }

          const updateLocation = async(e) => {
            
            e.preventDefault();
            console.log('ummmpa looompa')
                                   
                await fetch(`${REACT_APP_SERVER_URL}/api/elorequest/${e._id}`, {
                        method: "put",
                        headers: {
                            'Authorization': currentUser,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({location: location })
                    }
                )
                .then(response => {
                    console.log(response)
                    setData(data.filter(request => request._id !== e._id))
                    // props.history.push('/')
                })
                console.log(e._id)
                console.log(e)

        
         }

        

    const seeHistory = data.length && data.map((data, i) => {
                return (
                  <div key={data._id}> 
                      You put in a service request on
                    <li>
                      Date: {moment(data.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}{" "}   
                    </li>
                    <li>{data.fullName}</li>
                    <li>Phone number: {data.phoneNumber}</li>
                    <li>Location: {data.location}</li>
                
                    <form onSubmit={updateLocation}>
                    <input
                    placeholder="update location" type="text" 
                    onChange={handleLocationChange}
                    className="locationInput-change"
                    />
                    <button type="submit" className="btn btn primary update-location-button">Submit</button>
                    </form>

                    <button
                      onClick={() => {
                        cancelService(data);
                      }}
                      className=" btn btn-primary"
                    >
                      Cancel Charging Service
                    </button>
                  </div>
                  
                );
              });

  
    return (
        <div className="elo-history-container">
            <h1>Passed Elo service History</h1>
            <hr/>
            <div className="history-div">
                <ul> {seeHistory} </ul>
            </div>
        </div>
    )
}

export default EloHistory;