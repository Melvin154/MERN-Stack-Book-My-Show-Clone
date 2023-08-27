import React from 'react'
import Logo from '../../assets/main-images/bookmyshow-logo.png'

const Footer = () => {
  return (
    
    <>
    
    
    {/*Footer*/}

    <div className="footer">

        <div className="container-fluid text-center">
            <div className="row align-items-center">
                <div className="col">
                    <img src={Logo} alt="main" width="100%"/>
                </div>
                <div className="col" id="footer">
                    <h4 style={{color:"white"}}>SERVICE</h4>
                    <a href="#" style={{textDecoration: "none"}}>HELP US</a><br/>
                    <a href="#"  style={{textDecoration: "none"}} >REFUNDS</a><br/>
                    <a href="#"  style={{textDecoration: "none"}}>ONLINE BOOKING</a><br/>
                    <a href="#"  style={{textDecoration: "none"}}>CONDITIONS</a><br/>
                    <a href="#"  style={{textDecoration: "none"}}>FAQ PAGE</a>
                </div>
                <div className="col">
                    <h4 style={{color: "white"}}>SOCIALMEDIA</h4>
                    <a href="#"  style={{textDecoration: "none"}}>FACEBOOK</a><br/>
                    <a href="#"  style={{textDecoration: "none"}}>INSTAGRAM</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>TWITTER</a><br/>
                    <a href="#"  style={{textDecoration: "none"}}>PINTEREST</a><br/>
                    <a href="#"  style={{textDecoration: "none"}}>THREADS</a>
                </div>
                <div className="col">
                    <h4 style={{color:" white"}}>COMPANY</h4>
                    <a href="#" style={{textDecoration: "none"}}>ABOUT US</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>STREAM EVENTS</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>TICKET BOOKING</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>CONTACT US</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>LOGIN</a>
                </div>
                <div className="col">
                    <h4 style={{color: "white"}}>COUNTRIES</h4>
                    <a href="#" style={{textDecoration: "none"}}>SINGAPORE</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>AUSTRALIA</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>GERMANY</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>LONDON</a><br/>
                    <a href="#" style={{textDecoration: "none"}}>RUSSIA</a>
                </div>
                <div className="col">
                    <button type="submit" style={{backgroundColor: "red",color: "white"}}>Contact Today</button>
                </div>

                {/*Grid COntainer*/}
                <div className="container p-4 pb-0" style={{height:"100px"}}>
                    {/*Section Social Media*/}
                    <section className=" mb-4">
                        {/*Fb*/}


                        {/*Twitter*/}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                className="fab fa-twitter"></i></a>

                        {/*Google*/}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                className="fab fa-google"></i></a>

                        {/*Insta*/}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                className="fab fa-instagram"></i></a>
{/*Linked in*/}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                className="fab fa-linkedin-in"></i></a>

                        {/*Github*/}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                                className="fab fa-github"></i></a>
                    </section>
                    
                </div>


                <div className="text-center " style={{width:"100%",backgroundColor: "rgba(0, 0, 0, 0.2)",color:"white"}}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">@BookmyShow</a>
                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Footer