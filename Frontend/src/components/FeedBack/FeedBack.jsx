import React, { useEffect, useState } from "react";
import "./FeedBack.css";
import axios from "axios";

const FeedBack = () => {
  const [Data, setData] = useState([]); //Getting the data

  //ADD DATA
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [bestPart, setBestPart] = useState("");
  const [improve, setImprove] = useState("");

  const handleAddFeedback = async () => {
    const newFeedback = {
      Title: title,
      Rating: rating,
      Comments: comments,
      BestPart: bestPart,
      Improve: improve,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/movies",
        newFeedback
      );
      setData([...Data, response.data]);

      setTitle("");
      setRating("");
      setComments("");
      setBestPart("");
      setImprove("");
    } catch (error) {
      console.log(error);
    }
  };

  //Delete
  const handleDeleteFeedback = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/movies/${itemId}`);
      setData(Data.filter((item) => item._id !== itemId));
    } catch (error) {
      console.log(error);
    }
  };

  //Define here local state that store the data

  const GetMovieData = () => {
    //here we get all movie data
    const url = "http://localhost:8080/movies";
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          setData(data);
          console.log(data);
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  //Call this function in useEffect
  useEffect(() => {
    GetMovieData();
  }, []);

  return (
    <>
      <div className="feed-container">
        <h3 className="feed-heading">FeedBack Forms</h3>

        <div className="container feed-container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="flex-container">
                <div className="column feed-col">
                  <form action="POST" method="post">
                    <h4>Title:</h4>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter your Title"
                    />
                    <h4>Rating:</h4>
                    <input
                      type="Number"
                      name="rating"
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      placeholder="Enter your Title"
                    />
                    <h4>Comments:</h4>
                    <textarea
                      name="Comments"
                      id="comments"
                      cols="30"
                      rows="3"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="Comment about this!"
                    ></textarea>
                    <h4>BestPart:</h4>
                    <input
                      type="text"
                      name="bestpart"
                      id="bestpart"
                      value={bestPart}
                      onChange={(e) => setBestPart(e.target.value)}
                      placeholder="Enter your FavPart about that...."
                    />
                    <h4>Improve:</h4>
                    <textarea
                      name="improve"
                      id="improve"
                      cols="30"
                      rows="3"
                      value={improve}
                      onChange={(e) => setImprove(e.target.value)}
                      placeholder="To be Improved on this!.."
                    ></textarea>
                    <br />
                    <button
                      className="btn-lg btn-primary"
                      onClick={handleAddFeedback}
                    >
                      Add FeedBack
                    </button>
                  </form>
                </div>
                <div className="column feed-col">
                  <div className="row">
                    <div className="table-responsive">
                      
                      <table
                        id="movies"
                        className="table table-striped table-hover table-bordered"
                      >
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Ratings</th>
                            <th>Comments</th>
                            <th>BestPart</th>
                            <th>Improve</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data.map((item) => (
                            <tr key={item._id}>
                              <td>{item.Title}</td>
                              <td>{item.Rating}</td>
                              <td>{item.Comments}</td>
                              <td>{item.BestPart}</td>
                              <td>{item.Improve}</td>
                              <td style={{ minWidth: 190 }}>
                                <button
                                  className="btn-sm  btn-success"
                                  style={{ margin: "5px" }}
                                >
                                  View
                                </button>
                                <button
                                  className="btn-sm  btn-warning"
                                  style={{ margin: "5px" }}
                                >
                                  Update
                                </button>
                                <button
                                  className="btn-sm  btn-danger"
                                  style={{ margin: "5px" }}
                                  onClick={() => handleDeleteFeedback(item._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
