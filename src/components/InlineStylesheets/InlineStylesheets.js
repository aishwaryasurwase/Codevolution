import React from 'react'

function InlineStylesheets() {
    const leftHeading = {
        textAlign: 'left'
    }

    return (
        <div>
            {/* <h3 style={{textAlign: 'right'}}>Inline stylesheets</h3> */}
            <h3 className="error">Error</h3>
            {/* <h3 className={styles.success}>Success</h3> */}
            <h3 style={leftHeading}>Inline stylesheets</h3>
        </div>
    )
}

export default InlineStylesheets
