"use client";
import Link from "next/link";
import "../joint-ventures.css";

export default function IKHTrading() {
  return (
    <>
      <section className="hero-section-template">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-background"
        >
          <source src="/videos/joint-ventures.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              IKH TRADING COMPANY LTD.
            </h1>
            <p className="animate__animated animate__fadeInUp">
              A Subsidiary of IKH Groups of Companies
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Company Introduction</h2>
          </div>

          <div
            className="content-box-template animate-on-scroll slide-up visible"
            style={{ position: "relative" }}
          >
            {/* Centered background logo */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50%",
                height: "50%",
                zIndex: 0,
                opacity: 0.1,
                backgroundImage: "url(/images/bg-logo.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
            <div
              className="jv-content-wrapper"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="jv-text-content">
                <h3>An Ultimate Trade Destination</h3>
                <p>
                  The import demand in the Gulf's largest economy, Saudi Arabia,
                  Bangladesh is high due to its large population. The Kingdom is
                  one of the world's largest oil and gas producing and exporting
                  countries. The business-friendly environment of the Kingdom is
                  an excellent attraction for businesses looking to invest and
                  find new export markets. Foreign companies can get 100%
                  ownership in the trading sector.
                </p>

                <h3>Strategic Location Conducive for Global Trade</h3>
                <p>
                  Strategically located at the crossroads of Europe, Africa and
                  Asia, Saudi Arabia is the epicentre of global trade routes and
                  at the heart of a fast-growing region of over 424 million
                  consumers. Saudi Arabia shares its borders with – Jordan,
                  Iraq, Kuwait, Qatar, Bahrain, United Arab Emirates, Oman and
                  Yemen by land and Bahrain, Egypt, Eritrea, Iran, and Sudan by
                  sea.
                </p>
                <p>
                  With 13 ports on the Arabian Gulf and the Red Sea, the Kingdom
                  facilitates 13 per cent of the global trade. The Saudi ports
                  contribute to the access of 70% of imports and 95% of its
                  exports through 291 docks.
                </p>

                <h3>Latest Trends in Saudi Import-Export</h3>
                <p>
                  In May 2022, Saudi Arabia exported SAR144B and imported
                  SARS1.8B, resulting in a positive trade balance of SARS2B.
                  Between May 2021 and May 2022, the exports of Saudi Arabia
                  increased by SARS1.6B (74.9%) from SARS2.2B to SAR144B, while
                  imports increased by SAR7.35B (16.6%) from SAR44.4B to
                  SARS1.8B.
                </p>

                <div className="service-section">
                  <h4>Top Exports and Export Partners</h4>
                  <p>
                    Bangladesh mainly exported to Saudi Arabia, India, Japan,
                    Korea, the United States, and Egypt. The top exports were:
                  </p>
                  <ul className="services-list">
                    <li>Mineral Products</li>
                    <li>Chemical Products</li>
                    <li>Plastics and Rubbers</li>
                    <li>Metals</li>
                    <li>Transportation</li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>Top Imports and Import Partners</h4>
                  <p>
                    Bangladesh imported mainly from the United States, Saudi
                    Arabia, United Arab Emirates, India, Germany, and
                    Switzerland. The top imports were:
                  </p>
                  <ul className="services-list">
                    <li>Machines</li>
                    <li>Transportation</li>
                    <li>Chemical Products</li>
                    <li>Metals</li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>Commercial License with Shareholder</h4>
                  <p>You will provide:</p>
                  <ul>
                    <li>
                      A copy of the commercial registration of the shareholding
                      partner certified by the Saudi Embassy and a copy of the
                      national identity, if one of the partners is a natural
                      person holding the nationality of one of the GCC countries
                      (in case his data is not registered in the ABSHAR system).
                    </li>
                    <li>
                      Financial statements of the last financial year of your
                      company certified by the Saudi Embassy.
                    </li>
                  </ul>
                </div>

                <div className="service-section">
                  <h4>Required Documents to Import</h4>
                  <p>
                    Importers are required to present the following documents
                    before starting import:
                  </p>
                  <ul>
                    <li>A commercial invoice</li>
                    <li>A bill of lading</li>
                    <li>A certificate of origin</li>
                  </ul>
                  <p>
                    As an importer, you are also required to provide all the
                    necessary documents depending on the nature of the imported
                    goods, for example:
                  </p>
                  <ul>
                    <li>
                      Obtaining an IECEE certificate for goods that require this
                      certificate.
                    </li>
                    <li>
                      Registration of products with the concerned parties if
                      necessary.
                    </li>
                  </ul>
                  <p>
                    There are specific conditions that apply to each product you
                    want to import. As an Importer, you are also required to
                    complete (FASAH) clearing procedures by providing the
                    necessary documents and completing the customs declaration
                    form at least 48 hours prior to the arrival of the shipment
                    at the port of entry. This clearance procedure allows you to
                    track the shipment in Customs or before its arrival and get
                    instant notifications.
                  </p>
                </div>

                <div className="service-section">
                  <h4>
                    Start Your Import-Export Business Compliantly with IKH!
                  </h4>
                  <p>
                    As an international business, you might cope with extra
                    logistical problems, contractual issues, and paperwork. You
                    might need guidance regarding standard commercial practices
                    to clarify your responsibilities.
                  </p>
                  <p>
                    IKH supports you at every step. We help you comply with
                    Bangladesh's regulations and satisfy standards. Incorporate
                    your trading company with our fast and tailored services.
                  </p>
                </div>

                <div className="contact-info">
                  <h3>Contact Us</h3>
                  <p>
                    <strong>IKH Trading Company Ltd.</strong>
                    <br />
                    A Subsidiary of IKH Groups of Companies
                    <br />
                    <strong>C.R No.:</strong> C-196043
                    <br />
                    <strong>Phone:</strong> +88017110265
                    <br />
                    <strong>Email:</strong> info@ikhgroups.com,
                    ikhgroups@gmail.com
                    <br />
                    <strong>Website:</strong> www.ikhgroups.com
                    <br />
                    <strong>Location:</strong> Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
