import React, {useState, useEffect} from 'react';
import './EloRequest';
import moment from 'moment';
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken'); 



const EloHistory = () => {

    const [data, setData] = useState([]);


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
            await fetch(`${REACT_APP_SERVER_URL}/api/elohistory/${service._id}`, {
              method: "DELETE",
              headers: {
                Authorization: currentUser,
              },
            }).then((res) => {
            //   window.location.reload();
            });
          };

    const seeHistory = data.length && data.map((data, i) => { 
                return (
                  <div>
                      You put in a service request on
                    <li>
                      Date: {moment(data.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}{" "}   
                    </li>
                    <li>{data.fullName}</li>
                    <li>Phone number: {data.phoneNumber}</li>
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
        <div>
            <h1>Passed Elo service History</h1>
            <hr/>
            <div>
                <ul>{seeHistory}</ul>
            </div>
        </div>
    )
}

export default EloHistory;