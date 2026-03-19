import React from "react";

const Text = ({color, fontSize, fontWeight, children}) => {
    return (
        <>
            <p style={{color, fontSize, fontWeight, marginBottom:"29px", lineHeight:"112.5%"}}>
                {children}
            </p>
        </>
    )
}

export default Text;