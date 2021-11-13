import React from 'react'
import Navbar from "../componets/Navbars";

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default PublicLayout
