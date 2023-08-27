import React from 'react'
import { Link } from 'react-router-dom'

const StreamEvents = () => {
  return (
    <>
     {/*Stream*/}
    <div className="container-fluid">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            className="stream" alt="movies stream" width="100%" />
    </div>

  

{/*Live Events*/}

<div className="container-fluid">
    <h3> <b>The Best Of Live Events</b></h3>
    <div className="card-container">
      <div className="card">
        <Link to="/movies">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png" alt="Image 1"/>
        </Link>
      </div>
      <div className="card">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png" alt="Image 2"/>
        
        
      </div>
      <div className="card">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png" alt="Image 3"/>
        
      </div>
      <div className="card">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png" alt="Image 4"/>
        
      </div>
    </div>
</div>




    </>
  )
}

export default StreamEvents