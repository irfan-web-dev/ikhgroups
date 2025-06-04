"use client";
import "./completed-projects.css";

import LottiePlayer from "@/components/LottiePlayer";

export default function Works() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Completed Projects
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Our portfolio of successfully delivered projects across various
              industries
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/1122ad5c-b8b3-4bd1-807f-078947d6c0d6/lNVTeSg7pp.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Project Portfolio</h2>
          </div>
          <div className="projects-table-container animate-on-scroll slide-up visible">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Company Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>AL-KHAFJI JOINT OPERATION ( KJO )</td>
                  <td>AL MASHARIQ</td>
                  <td>JULY 2,2012</td>
                  <td>JUN 5,2014</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>RAS-AL-KHAIR MAADEN</td>
                  <td>SUNGCHANG ENGINEERING AND CONSTRUCTION</td>
                  <td>JUN 6,2012</td>
                  <td>MAY 8,2014</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>RAS-AL-KHAIR MAADEN</td>
                  <td>HYUNDAI ENGINEERING AND CONSTRUCTION</td>
                  <td>JUN 6,2012</td>
                  <td>MAY 8,2014</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>YANBU ( YASREF ) PROJECT</td>
                  <td>NASSER.S.AL HAJIR CORP</td>
                  <td>JUN 5,2014</td>
                  <td>JULY 7,2016</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>JUBAIL SATORP</td>
                  <td>NASSER.S.AL HAJRI CORP</td>
                  <td>JULY 8,2016</td>
                  <td>JULY 9,2017</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>JUBAIL SATORP</td>
                  <td>CONTRACTING AND CONSTRUCTION ENTERPRISES ( CCE )</td>
                  <td>JULY 7,2013</td>
                  <td>JULY 7,2014</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>JUBAIL SATORP</td>
                  <td>BONATTI</td>
                  <td>JULY 7,2013</td>
                  <td>JULY 7,2014</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>ZAJEN</td>
                  <td>NASSER.S.AL HAJRI CORP</td>
                  <td>JUN 6,2014</td>
                  <td>DECEMBER 3,2015</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>JUBAIL PTRO CAMIA</td>
                  <td>GS Neotek Co. Ltd</td>
                  <td>JUN 7,2014</td>
                  <td>JUN 7,2015</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>JEDDAH AIRPORT</td>
                  <td>Carlo Gavazzi Arabia Co. Ltd</td>
                  <td>MAY 5,2015</td>
                  <td>JUN 8,2016</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>YANBU</td>
                  <td>ACORTEC</td>
                  <td>JUN 6,2013</td>
                  <td>JULY 9,2014</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>PETRO RABIGH</td>
                  <td>SAUDI INTERNATIONAL PETROCHEMICAL COMPANY ( SIPCHEM )</td>
                  <td>JUN 2,2015</td>
                  <td>JULY 9,2016</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>JEDDAH SOUTH POWER PLANT</td>
                  <td>Hyundai Heavy Industries Co. Ltd.</td>
                  <td>MAY 6,2015</td>
                  <td>JUN 10,2017</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>WAAD AL SHAMAL I S C C POWER PLANT TURIF</td>
                  <td>ABENGOA</td>
                  <td>NOVEMBER 2,2017</td>
                  <td>JANUARY 20,2019</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>WAAD AL SHAMAL I S C C POWER PLANT TURIF</td>
                  <td>Carlo Gavazzi Arabia Co. Ltd.</td>
                  <td>NOVEMBER 2,2017</td>
                  <td>DECEMBER 20,2018</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>WAAD AL SHAMAL I S C C POWER PLANT TURIF</td>
                  <td>General Electric Company</td>
                  <td>NOVEMBER 2,2017</td>
                  <td>JANUARY 20,2019</td>
                  <td>
                    <span className="status-badge completed">COMPLETED</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
