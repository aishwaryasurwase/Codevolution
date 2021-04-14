import React from 'react'
import ReactDOM from 'react-dom';

function PortalComponent() {
    return ReactDOM.createPortal(
        <h3>Portal component</h3>
        , document.getElementById('portal-root')
    )
}

export default PortalComponent
