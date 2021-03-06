import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem('jwtToken'); 


const Profile = (props) => {
    const { handleLogout } = props;
    const [userName, setUsername] = useState("")
    const { exp, id, name, email } = props.user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();
    console.log(String(expirationTime));

    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login again.');
    }
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p> { name }</p> 
        <p>{ email }</p> 
        <p><strong>ID:</strong> { id }</p>
    </div>) : <h4>Loading...</h4>

    const updateName = async(e) => {
        e.preventDefault();
        const response = await fetch(`${REACT_APP_SERVER_URL}/api/users/profile`, {
                    method: "put",
                    headers: {
                        'Authorization': currentUser,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name:userName})
                }
            )
        const data = await response.json()
        console.log(data)
        await props.setCurrentUser({...data});
        console.log(props.user);
        return <Redirect to='/profile'/>
            // .then(response => {
            //     console.log(response)
            //     props.nowCurrentUser({...response.data, exp:props.user.exp});
            //     props.history.push('/')
            // })
    
     }

     const handleUserName = (e) => {
         setUsername(e.target.value);
     }

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>            
            </div>
        );
    };
    
    return (
        <div className="Profile-container">
            <div className="Profile-info">
            { props.user ? userData : errorDiv() }
            <Link to="/elohistory"><button className=" history-button">History</button></Link>
            <hr/>
            <br/>
            <form onSubmit={updateName}>
            <input placeholder="update username" type="text" onChange={handleUserName} className="profile-input" />
            <br/>
            <button type='submit' className="change-user-button">Submit</button>
            </form>
            </div>

        </div>
    );

}

export default Profile;