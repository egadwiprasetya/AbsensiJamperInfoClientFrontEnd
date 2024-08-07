import React from 'react'

const Loading = () => {
  return (
    <>
      <div id="loadingForm" className="pages mb-3 mt-3">
        <h3 className="textCenter">Harap Tunggu</h3>
        <div className="d-flex justify-content-center mb-3">
          <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <h5 className="textCenter">Jangan Tutup Halaman ini Sampai Proses Loading Selesai</h5>
      </div>
    </>
  )
}

export default Loading