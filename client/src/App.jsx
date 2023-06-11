import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./assets/components/users";
import { Route, Routes } from "react-router";
import Services from "./assets/components/Services";
import Contacts from "./assets/components/Contacts";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const currentDay = new Date().getDay();
    const currentHour = new Date().getHours();

    axios
      .get("http://localhost:8081", {
        headers: {
          "Content-Type": "application/json",
          "x-day": currentDay,
          "x-hour": currentHour,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []); // Empty dependency array ensures the effect runs only once
  console.log(data);
  return (
    <>
      {data === "no" ? (
        <h1>{data}</h1>
      ) : (
        <>
          <Link to='/users'>Users</Link>
          <Link to='/services'>Services</Link>
          <Link to='/contacts'>Contacts</Link>
          <Routes>
            <Route path='/users' element={<Users users={data.users} />} />
            <Route
              path='/services'
              element={<Services services={data.services} />}
            />
            <Route
              path='/contacts'
              element={<Contacts contacts={data.contacts} />}
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
