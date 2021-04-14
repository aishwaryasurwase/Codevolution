import React from 'react'

function MemoComponent({ name }) {
    console.log("Memo component");
    return (
        <div>
            <h3>Memo component</h3>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)
