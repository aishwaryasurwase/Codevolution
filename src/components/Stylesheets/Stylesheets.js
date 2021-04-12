import React from 'react'
import './Stylesheets.css';

function Stylesheets(props) {
    let className = props.primary ? 'primary': '';
    return (
        <div>
            {/* <h3 className="primary">Stylesheet</h3> */}
            {/* <h3 className={`${className} secondary`}>Stylesheet</h3> */}
            {/* <h3 className={`primary secondary`}>Stylesheet</h3> */}
            <h3 className="primary secondary">Stylesheet</h3>
        </div>
    )
}

export default Stylesheets
