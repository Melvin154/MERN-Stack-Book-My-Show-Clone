import EventsPage from "./Pages/EventsPage";
import HomePage from "./Pages/HomePage";
import MoviesData from "./Pages/MoviesData";
import MoviesPage from "./Pages/MoviesPage";
import EventsData from "./Pages/EventsData";
import PremireData from "./Pages/PremireData";
import "./style.css";

import { Routes, Route, Outlet } from "react-router-dom";

import Signup from "./components/Auth/Signup";
import BookingData from "./Pages/BookingData";
import PremirePage from "./Pages/PremirePage";

import Seating from "../src/components/Seatings/Seating";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MoviesData />} />

        <Route path="/book/:id" element={<BookingData />} />

        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventsData />} />

        <Route path="/premire" element={<PremirePage />} />
        <Route path="/premire/:id" element={<PremireData />} />

        <Route path="/seating" element={<Seating />} />

        <Route path="*" element={<h3>404 Error Not Found</h3>} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
