import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const JudulEvent = () => {
  
  const [eventAktif, setEventAktif] = useState("");

  useEffect(() => {
    getEventAktif();
  }, []);

  const getEventAktif = async () => {
    const response = await axios.get("https://server.jamper.info/eventAktif");
    if (response.data.msg === "TIDAK ADA EVENT AKTIF") {
      setEventAktif("");
    }
    else {
      setEventAktif(response.data.event);
    }
  };
  return (
    <><h3>{eventAktif}</h3></>
  )
}

export default JudulEvent