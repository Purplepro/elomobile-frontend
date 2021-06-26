// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
// the e parameter stands for event event.target. this value which is 'value'
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

            //check the passwords to make sure they match
          //also checking to make sure the password is atleast 8

        if (password === confirmPassword && password.length >= 8) {
            const payload = { name, email, password };
            let url = `${REACT_APP_SERVER_URL}/api/users/signup`;
            axios.post(url, payload)
            .then(response => {
                console.log(response.data);
                setRedirect(true);
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            if (!password === confirmPassword) {
                alert('Password and Confirm Password need to match. Please try again...');
            } else {
                alert('Password needs to be at least 8 characters or more. Please try again...');
            }
        }
    }

    if(redirect) return <Redirect to='/login' />
    

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        {/* the value is where the state goes for example const [name, setName] the value would be name */}
                        <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                        
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="confirm-passowrd" name="confirm-password" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
         )
    }


export default Signup;