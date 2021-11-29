import React from 'react'
import MainAdmin from './components/main'
import NavbarAdmin from './components/navbar'
import SidebarAdminComponent from './components/sidebar'

export default function Admin() {
    return (
        <div className="flex flex-col w-screen">
             <NavbarAdmin />
             <div className="lower-section flex flex-col h-admin">
                 <SidebarAdminComponent className="lg:hidden" />
                 <MainAdmin />

             </div>
             
                     
            
            
        </div>
    )
}
