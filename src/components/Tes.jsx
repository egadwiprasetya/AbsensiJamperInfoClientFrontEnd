import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Tes = ({ update }) => {
  const [validated, setValidated] = useState(false);
  const [eventAktif, setEventAktif] = useState("");
  const [desa, setDesa] = useState([]);
  const [kelompok, setKelompok] = useState([]);
  const [jenjang, setJenjang] = useState([]);
  const [namaKehadiran, setNamaKehadiran] = useState("");
  const [desaKehadiran, setDesaKehadiran] = useState("");
  const [kelompokKehadiran, setKelompokKehadiran] = useState("");
  const [jenisKelaminKehadiran, setJenisKelaminKehadiran] = useState("");
  const [jenjangKehadiran, setJenjangKehadiran] = useState("");

  const [logs, setLogs] = useState("");

  useEffect(() => {
    getDesa();
  }, []); //combinasi user selector dengan use effect

  const getDesa = async () => {
    try {
      const response = await axios.get("http://gafoe.com:84/desa",{
        withCredentials: false
      });
      setDesa(response.data);
    }
    catch (error) {
      console.log(error);
      if (error) {
        update("input");
        //if (document.getElementById("selectEventInputKehadidran").value === "") setMsgError("Harap Pilih Event");
        //else setMsgError(error.message);
        //handleShowModalError();
      }
    }
    
  };

  return (
    <>
      <h2>{desa}</h2>

    </>
  )
}

export default Tes