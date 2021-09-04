import React from 'react'
import EloRequest from './EloRequest'
import EloMap from './EloMap';
import '../Map.css';

export default function Requests() {
    return (
        <div>
            <EloRequest/>
            <EloMap/>
        </div>
    )
}
