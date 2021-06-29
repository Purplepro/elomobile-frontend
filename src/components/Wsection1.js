import React from 'react'
import {Link} from 'react-router-dom';
import './EloRequest';


const WSection1 = () => {

    return (
        <div className="Wsection-1">
        <h1>Welcome</h1>
            <Link to='/elorequest'><button className='btn btn-primary'>Request Elo</button></Link>
        </div>
    )
}

export default WSection1;