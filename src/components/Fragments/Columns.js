import React from 'react'

function Columns() {
    const styles= {
        margin: '50px'
    }
    return (
        <React.Fragment>
            <td><span style={{marginRight: '32px'}}>Name</span></td> 
            <td><span style={{marginRight: '32px', textAlign: 'right'}}>City</span></td> 
            <td><span style={{marginRight: '32px'}}>Mobile Number</span></td>
        </React.Fragment>
    )
}

export default Columns
