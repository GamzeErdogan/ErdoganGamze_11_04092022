import React from 'react'

const Loader = () => {
    return (
        <div style={{ borderColor:'blue' }} className="lds-ripple"><div style={{ borderColor:' white' }} color={'pink'}></div><div style={{ borderColor: 'yellow' }}></div></div>
    )
}

export default Loader