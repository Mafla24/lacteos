import React from 'react'
import Navbar from "../componets/Navbars";
import PrivateRoutes from "../componets/PrivateRoutes"

const PrivateLayout = ({children}) => {
    return (
        <div>
            <PrivateRoutes>
            <Navbar/>
            {children}
            </PrivateRoutes>
        </div>
    )
}

export default PrivateLayout
