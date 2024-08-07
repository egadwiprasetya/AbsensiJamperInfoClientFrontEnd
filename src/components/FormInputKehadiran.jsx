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

const FormInputKehadiran = ({ update }) => {
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
    getEventAktif();
  }, []); //combinasi user selector dengan use effect

  const getDesa = async () => {
    const response = await axios.get("https://server.jamper.info/desa");
    setDesa(response.data);
  };

  const getKelompok = async () => {
    const id = document.getElementById("desaPeserta").value;
    setDesaKehadiran(id);
    const response = await axios.get(`https://server.jamper.info/kelompokByDesa/${id}`);
    setKelompok(response.data);
  };

  const getJenjang = async () => {
    const response = await axios.get("https://server.jamper.info/jenjang");
    setJenjang(response.data);
  };

  const getEventAktif = async () => {
    const response = await axios.get("https://server.jamper.info/eventAktif");
    if (response.data.msg === "TIDAK ADA EVENT AKTIF") {
      setEventAktif("");
      update("noEvent");
      //<button onClick={() => <button onClick={() => update(1)}> Click </button>}> Click </button>
    }
    else {
      setEventAktif(response.data.id);
    }
    getDesa();
    getJenjang();
    //handleCloseModalLoading();
  };


  const submitKehadiran = async (event) => {
    // handleShowModalLoading();
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
    else {
      event.preventDefault();
      update("loading");
      try {
        //console.log(eventKehadiran);
        const response = await axios.post("https://server.jamper.info/kehadiran", {
          eventId: eventAktif,
          nama: namaKehadiran,
          desaId: desaKehadiran,
          kelompokId: kelompokKehadiran,
          jenisKelamin: jenisKelaminKehadiran,
          jenjangId: jenjangKehadiran,
          metodeAbsen: "WEB PESERTA",
        });
        console.log(response);
        setNamaKehadiran("");
        setDesaKehadiran("");
        setKelompokKehadiran("");
        setJenisKelaminKehadiran("");
        setJenjangKehadiran("");
        setValidated(false);
        update("berhasil");
      } catch (error) {
        console.log(error);
        if (error.response) {
          update("input");
          //if (document.getElementById("selectEventInputKehadidran").value === "") setMsgError("Harap Pilih Event");
          //else setMsgError(error.message);
          //handleShowModalError();
        }
      }
    }
    //setValidated(true);
  };

  return (
    <>
      <div id="inputForm" className="pages mt-3">
        <Form noValidate validated={validated} onSubmit={submitKehadiran}>
          <div className="card-body">
            <div className="col-sm-12 offset-sm-0 col-lg-8 offset-lg-2 ">
              <div className="p-4 mb-3 shadowBox">
                <h5>Amal Solih Input Data Dengan Benar</h5>
                <Form.Group as={Col} md="12" xl="12" controlId="validationNama">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Masukkan Nama"
                    value={namaKehadiran}
                    onChange={(e) => setNamaKehadiran(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Harap Masukkan Nama
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" xl="12" controlId="validationJenisKelamin">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Select aria-label="Default select example" required onChange={(e) => setJenisKelaminKehadiran(e.target.value)} value={jenisKelaminKehadiran}>
                    <option disabled selected value=""></option>
                    <option value="PRIA">PRIA</option>
                    <option value="WANITA">WANITA</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Harap Pilih Jenis Kelamin
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" xl="12" controlId="validationDesa">
                  <Form.Label>Desa</Form.Label>
                  <Form.Select aria-label="Default select example" required onChange={getKelompok} id="desaPeserta" value={desaKehadiran}>
                    <option value="" selected disabled></option>
                    {
                      desa.map(opt => (
                        <option value={opt.id}>{opt.desa}</option>
                      ))
                    }
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Harap Pilih Desa
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" xl="12" controlId="validationKelompok">
                  <Form.Label>Kelompok</Form.Label>
                  <Form.Select aria-label="Default select example" required onChange={(e) => setKelompokKehadiran(e.target.value)} value={kelompokKehadiran}>
                    <option value="" selected disabled></option>
                    {
                      kelompok.map(opt => (
                        <option value={opt.id}>{opt.kelompok}</option>
                      ))
                    }
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Harap Pilih Kelompok
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" xl="12" controlId="validationJenjang">
                  <Form.Label>Jenjang</Form.Label>
                  <Form.Select aria-label="Default select example" required onChange={(e) => setJenjangKehadiran(e.target.value)} value={jenjangKehadiran}>
                    <option value="" selected disabled></option>
                    {
                      jenjang.map(opt => (
                        <option value={opt.id}>{opt.jenjang}</option>
                      ))
                    }
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Harap Pilih Jenjang
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="col-xl-12 col-md-12 mb-3 mt-3">
                  <button type="submit" id="btnSubmit" className="btn btn-primary">Submit</button>
                  <button type="reset" id="btnReset" className="btn btn-warning">Reset</button>
                </div>
                {/* <p>{logs}</p> */}
              </div>
            </div>
          </div>
        </Form>
      </div>

    </>
  )
}

export default FormInputKehadiran