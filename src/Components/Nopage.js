import React from 'react'

function Nopage(props) {
    return (
        <div>
            <h1 style={{
                fontSize: "85px",
                fontWeight: "bolder",
                textAlign: "center",
                color: props.mode=="Light"?"white":"black"
            }}>404</h1>
            <h1 style={{
                fontSize: "55px",
                fontWeight: "bold",
                textAlign: "center",
                color: props.mode=="Light"?"white":"black"
            }}>Page not found!</h1>
            <p style={{
                textAlign: "center",
                color: props.mode=="Light"?"white":"black"
            }}>The page you are looking for doesn't exist or an other error occurred.</p>
            <p style={{
                textAlign: "center",
                color: props.mode=="Light"?"white":"black"
            }}>Go back, or head over textutils.com to choose a new direction.</p>
        </div>
    )
}

export default Nopage