import React, { useEffect } from "react";
import "./MoviesData.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { PREMIERESDATA } from "../premiresdata";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PremiresData = () => {
  const paramsId = useParams();
  const [premireDetails, setPremireDetails] = useState({});
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    let findPremires = PREMIERESDATA.find((item) => item.id === paramsId.id);
    setPremireDetails(findPremires);
  }, []);

  return (
    isLoad && (
      <>
        <Header />
        <div
          class="container-fluid-main"
          style={{ backgroundImage: `url(${premireDetails.movieBgImg})` }}
        >
          <div class="left-image">
            <img
              src={premireDetails.movieCardImg}
              alt="Left Image"
              style={{ padding: "25px" }}
            />
          </div>
          <div class="content-movies">
            <h2 style={{ color: "white" }}>{premireDetails.movieName}</h2>

            <button
              type="button"
              class="btn btn-success"
              style={{ margin: "5px" }}
            >
              {premireDetails.dimensions}
            </button>

            <button
              type="button"
              class="btn btn-success"
              style={{ margin: "5px" }}
            >
              {premireDetails.languages}
            </button>
            <p
              style={{
                color: "whitesmoke",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              {premireDetails.timeDuration} &#9679; {premireDetails.Genre} &#9679;{" "}
              {premireDetails.Age}
              &#9679; {premireDetails.releaseDate}
            </p>

            <button type="button" class="btn btn-primary btn-lg">
              <a
                href={premireDetails.trailer}
                style={{
                  color: "white",
                  textDecoration: "none",
                  margin: "5px",
                }}
              >
                Trailer
              </a>
            </button>
            <button type="button" class="btn btn-danger btn-lg">
              <Link
                to={`/book/${premireDetails.id}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  margin: "5px",
                }}
              >
                Book Tickets
              </Link>
            </button>
          </div>
        </div>

        {/*--Movie Details--*/}

        <div class="movie-details " style={{ margin: "50px" }}>
          <h3>
            <b style={{ fontSize: "1.9rem" }}>About The Movie</b>
          </h3>
          <h3 style={{ fontSize: "1.2rem", lineHeight: "2rem" }}>
            {premireDetails.about}
          </h3>
        </div>

        {/*Movie Cast*/}

        <div class="container movie-container">
          <div class="content">
            <h1>Main Cast</h1>
            <h4>Meet the talented actors who bring the characters to life</h4>
          </div>
          <div class="cast">
            {premireDetails.movieCast.map((item, indx) => {
              return (
                <div class="cast-member" key={indx}>
                  <img src={item.castPicture} alt="Actor " />
                  <p className="cast-details">
                    <b>{item.castName}</b>
                    <br />
                    {item.castNameas}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/*Movie-crew*/}
        <div class="container">
          <div class="content">
            <h1>Crew</h1>
            <h4>Meet the talented Directors who bring the Idea to Reality</h4>
          </div>
          <div class="cast">
            {premireDetails.movieCrew.map((item, indx) => {
              return (
                <div class="cast-member" key={indx}>
                  <img src={item.crewPicture} alt="Crew1" />
                  <p className="cast-details">
                    <b>{item.crewName}</b> <br />
                    {item.crewNameas}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/*Report Content*/}
        <div className="report">
          <Link to="/" style={{ textDecoration: "underline" }}>
            Report Content &gt; &gt;
          </Link>
        </div>

        <Footer />
      </>
    )
  );
};

export default PremiresData;
