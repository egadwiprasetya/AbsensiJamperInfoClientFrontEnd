import React, { useState, useEffect } from "react";
import FormInputKehadiran from '../components/FormInputKehadiran';
import Loading from '../components/Loading';
import BerhasilInput from '../components/BerhasilInput';
import TidakAdaEventAktif from '../components/TidakAdaEventAktif';
import JudulEvent from "../components/JudulEvent";
import Tes from "../components/Tes";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo_jamper from '../logo_jamper.png';

const InputKehadiran = (props) => {
  //let onClickFunction = (arg) => alert(arg);
  const [page, setPage] = useState("input");
  var returnEventPage = (arg) => { setPage(arg) }

  return (
    <>
      <style type="text/css">
        {`
       
       @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");

       :root {
         --header-height: 3rem;
         --nav-width: 68px;
         --first-color: #ff3e30;
         --first-color-light: #dbd5cf;
         --white-color: #f6fafb;
         --dark-color: #32251d;
         --second-color-light: #f5ebe9;
         --body-font: "Nunito", sans-serif;
         --normal-font-size: 1rem;
         --z-fixed: 100;
       }
     
       * {
         font-family: var(--body-font);
       }
     
       .shadowBox {
         box-shadow: 0px 0px 15px gray;
       }
     
       .formUtama {
         top: 100%;
         background-color: white;
       }
     
       .textCenter {
         text-align: center;
       }
                      body {
                        background-color:#859199;
                      }

                `}
      </style>

      <section className="container-fluid">
        <div className="container ">
          <div className="formUtama shadow p-1 border border-white">
            <div className="textCenter card-header">
              <img src={logo_jamper} width='30%' />
              <h1>E-PRESENSI JAMPER INFO</h1>
              <JudulEvent />
            </div>
            {(() => {
              switch (page) {
                case 'input':
                  return <FormInputKehadiran update={returnEventPage} />
                case 'loading':
                  return <Loading />
                case 'berhasil':
                  return <BerhasilInput update={returnEventPage} />
                case 'noEvent':
                  return <TidakAdaEventAktif />
                default:
                  return <FormInputKehadiran update={returnEventPage} />
              }
            })()}

            <hr />
            <div className="textCenter">
              <span className="textCenter" >Sistem Informasi Manajemen karya Generus Jamper Info, amal sholih agar digunakan sebarokah mungkin <br /> الحمدلله جزا كم الله خيرا <br /> Jamper Info All Rights Reserved</span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default InputKehadiran