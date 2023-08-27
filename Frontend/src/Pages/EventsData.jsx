import React, { useEffect, useState } from "react";
import "./EventsData.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { EVENTSDATA } from "../eventsdata";

const EventsData = () => {
  const paramsId = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    let findEvents = EVENTSDATA.find((item) => item.id === paramsId.id);
    setEventDetails(findEvents);
  }, []);

  return (
    isLoad && (
      <>
        <Header />

        <header className="container">
          <img
            src={eventDetails.eventbgimg}
            alt="Background Image"
            width="100%"
          />
        </header>
        <div className="eventtitle-container container">
          <div className="title-container">
            <h4>
              <b>
                {eventDetails.concertName}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </b>
            </h4>
            <p>{eventDetails.eventFullDetails}</p>
          </div>
          {/*Buttton*/}

          <div className="events-details">
            <p>
              &#128197; {eventDetails.timeDate} &nbsp; &nbsp; | &#8982;{" "}
              {eventDetails.location} &nbsp; &nbsp;| &#x20B9;{" "}
              {eventDetails.ticketPrice}
            </p>
          </div>
        </div>

        <div class="container event-container">
          <div class="column-1">
            <div class="artist">
              <h5 style={{ textAlign: "center" }}>
                {" "}
                <b>Artist</b>
              </h5>
              {eventDetails.artistDetails.map((item, indx) => {
                return (
                  <div className="artist-member" key={indx}>
                    <h5>{item.artistName}</h5>
                    <img
                      className="rounded-circle"
                      src={item.artistImg}
                      alt=""
                      width="50%"
                    />
                  </div>
                );
              })}
            </div>

            <div className="share">
              <h4 style={{ color: "white" }}>Share the Event</h4>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              {/*Insta*/}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          <div class="column" style={{ margin: "15px" }}>
            <div className="about">
              <h2>
               
                <b>About</b>
              </h2>
              {eventDetails.About}
            </div>
            <br />

            <h2>Why should we attend ?</h2>

            <div className="attend">
              {eventDetails.attendDetails.map((item, indx) => {
                return (
                  <div className="attend-conditions" key={indx}>
                    <p>{item.attend1}</p>
                    <p>{item.attend2}</p>
                    <p>{item.attend3}</p>
                  </div>
                );
              })}
            </div>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Terms and Conditions
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse "
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      1. Tickets once booked cannot be exchanged or refunded.
                    </p>
                    <p>
                      2. An Internet handling fee per ticket may be levied.
                      Please check the total amount before payment.
                    </p>
                    <p>
                      3. We recommend that you arrive at-least 30 minutes prior
                      at the venue for a seamless entry.
                    </p>
                    <p>
                      4.It is mandatory to wear masks at all times and follow
                      social distancing norms.
                    </p>
                    <p> 5. Please do not purchase tickets if you feel sick </p>
                    <p>
                      6. Unlawful resale (or attempted unlawful resale) of a
                      ticket would lead to seizure or cancellation of that
                      ticket without refund or other compensation.
                    </p>
                    <h2>Covid Safety Guideliness</h2>
                    <p>
                      <li>
                        Owing to the recent conditions surrounding the COVID –
                        19 pandemic, as a pre-condition to gaining access to the
                        venue (events and theatres) you are required to be fully
                        vaccinated and may be required to display your COVID –
                        19 certificate at the venue as per the various norms
                        /regulations prevailing in the said State. The venue
                        provider and governing authorities reserve the right to
                        exclude any user from the venue if there are sufficient
                        grounds to believe so for failure to abide by the
                        protocols. You agree to exit without protest or refund.
                        Users are required to check the restrictions as
                        applicable in their State
                      </li>
                      <li>
                        Use of masks is mandatory at all times and the visitors
                        are required to maintain social distancing norms. The
                        venue and Bigtree reserve the right to change/modify the
                        terms and conditions.
                      </li>
                      <li>
                        Bigtree does not assume any responsibility with regards
                        to any injury or complications due to COVID – 19 accrued
                        as a result of your participation.
                      </li>
                      <li>
                        The above guidelines are currently mandatory for
                        <strong> Delhi/NCR, Maharashtra and Karnataka</strong>.
                        These terms and conditions may vary depending on the
                        state where the event is held and are subject to changes
                        .
                      </li>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <h4 style={{ margin: "5px" }}>You may also like</h4>
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col">
                      <img
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/excuse-me-brother-standup-solo-by-aakash-gupta-et00347268-2023-7-31-t-13-55-22.jpg"
                        class="d-block w-100"
                        alt="c1"
                      />
                      <p>Aakash's Gupta Show</p>
                    </div>
                    <div className="col">
                      <img
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/anubhav-singh-bassi-new-material-et00355125-2023-7-25-t-16-3-33.jpg"
                        class="d-block w-100"
                        alt="c2"
                      />
                      <p>Kisiii Koo(Bhatiho)</p>
                    </div>

                    <div className="col">
                      <img
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/zakir-khan-live-et00357779-2023-4-20-t-13-39-7.jpg"
                        class="d-block w-100"
                        alt="c3"
                      />
                      <p>Talk with Zahir</p>
                    </div>
                    <div className="col">
                      <img
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/jo-bolta-hai-wohi-hota-hai-ft-by-harsh-gujral-et00319088-2023-7-28-t-7-44-39.jpg"
                        class="d-block w-100"
                        alt="c4"
                      />
                      <p>Jo Bolta Hoah (BoltaShow)</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <div className="col">
                      <img
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/excuse-me-brother-standup-solo-by-aakash-gupta-et00347268-2023-7-31-t-13-55-22.jpg"
                        class="d-block w-100"
                        alt="c1"
                      />
                      <p>Aakash's Gupta Show</p>
                    </div>
                    <div className="col">
                      <img
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/anubhav-singh-bassi-new-material-et00355125-2023-7-25-t-16-3-33.jpg"
                        class="d-block w-100"
                        alt="c2"
                      />
                      <p>Kisiii Koo(Bhatiho)</p>
                    </div>

                    <div className="col">
                      <img
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/zakir-khan-live-et00357779-2023-4-20-t-13-39-7.jpg"
                        class="d-block w-100"
                        alt="c3"
                      />
                      <p>Talk with Zahir</p>
                    </div>
                    <div className="col">
                      <img
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/jo-bolta-hai-wohi-hota-hai-ft-by-harsh-gujral-et00319088-2023-7-28-t-7-44-39.jpg"
                        class="d-block w-100"
                        alt="c4"
                      />
                      <p>Jo Bolta Hoah (BoltaShow)</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev prev-events-icon"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next  next-events-icon"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/*Map*/}
          <div class="column-1">
            <div class="column-1 map-event">
              <b> {eventDetails.mapLocation}</b> <br />
              {eventDetails.location} <br />
              <iframe
                src={eventDetails.map}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  );
};

export default EventsData;
