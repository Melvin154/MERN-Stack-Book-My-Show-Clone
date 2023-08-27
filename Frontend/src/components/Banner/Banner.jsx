import React from 'react'

const Banner = () => {
  return (
    <>
    {/*Banner*/}
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{padding: "15px",backgroundColor:"grey",width:"100%"}}>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691140683542_streamdesktop.jpg"
                    className="d-block w-100" alt="c4" style={{borderRadius: "5px"}}/>
            </div>
            <div className="carousel-item">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg"
                    className="d-block w-100" alt="c4" style={{borderRadius: "5px"}}/>
            </div>
            <div className="carousel-item ">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691749845076_sffdesktop.jpg"
                    className="d-block w-100" alt="c4" style={{borderRadius: "5px"}}/>
            </div>
            <div className="carousel-item">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg"
                    className="d-block w-100" alt="c3" style={{borderRadius: "5px"}}/>
            </div>

        </div>
        <button className="carousel-control-prev carousel-btn" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next carousel-btn" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
  )
}

export default Banner