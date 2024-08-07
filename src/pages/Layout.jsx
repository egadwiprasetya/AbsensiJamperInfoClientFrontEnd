import React from 'react'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
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
                `}
            </style>
            <body class="bg-secondary">
                <section class="container-fluid">
                    <div class="container ">
                        <div class="formUtama shadow p-1 border border-white">
                            <div class="textCenter card-header">
                                <img src='https://i.ibb.co/hKxrhR7/LOGO-JAMPER-1.png' width='30%' />
                                <h1>E-PRESENSI JAMPER INFO</h1>
                            </div>
                            <main>{children}</main>
                            <hr />
                            <div class="textCenter">
                                <span class="textCenter" >Sistem Informasi Manajemen karya Generus Jamper Info, amal sholih agar digunakan sebarokah mungkin <br> الحمدلله جزا كم الله خيرا </br> Jamper Info All Rights Reserved</span>
                            </div>
                        </div>
                    </div>
                </section >
            </body >
        </React.Fragment>
    );
}

export default Layout