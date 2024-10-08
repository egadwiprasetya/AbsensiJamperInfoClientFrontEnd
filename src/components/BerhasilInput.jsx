import React from 'react'

const BerhasilInput = ({ update }) => {
  return (
    <>
      <div id="berhasilInputForm" className="pages mb-3 mt-3">
        <h1 className="textCenter">Berhasil Absen !</h1>
        <h3 className="textCenter">الحمدلله جزا كم الله خيرا sudah menginput</h3>
        <div className="d-flex justify-content-center">
          <button id="buttonSubmitLagi" className="btn btn-primary" onClick={() => update("input")}><i class='bx bx-arrow-back'></i> Input Lagi</button>
        </div>
      </div>
    </>
  )
}

export default BerhasilInput