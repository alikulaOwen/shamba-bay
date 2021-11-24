import React from 'react'
import MainAdmin from './components/main'
import SidebarAdminComponent from './components/sidebar'

export default function Admin() {
    return (
        
             <div className="lower-section flex flex-col h-screen">
                 <SidebarAdminComponent/>
                 <MainAdmin />

             </div>
             
                     
            
            

    )
}
