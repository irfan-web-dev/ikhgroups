"use client";
import Link from "next/link";
import "../joint-ventures.css";

export default function KhanEnterprise() {
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
              KHAN ENTERPRISE
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Poultry Feed Supplier
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
                <p>
                  A poultry feed supplier provides food for domestic chickens,
                  ducks, and Fish. Modern poultry feed consists of a mix of
                  grains, protein supplements, mineral supplements, and vitamin
                  supplements, tailored to the specific needs of the birds based
                  on factors like age, weight, and production goals. These
                  suppliers play a crucial role in the poultry industry by
                  ensuring chickens, ducks, and Fish receive the necessary
                  nutrition for growth, egg production, and overall health.
                </p>

                <ul className="services-list">
                  <li>
                    Poultry feed is used by farmers as the main source of
                    nutrition for poultry birds, including broilers, layers and
                    day-old chicks (DOCs).
                  </li>
                  <li>
                    Modern poultry feed is developed by specifically choosing
                    and combining ingredients to provide a high quality diet
                    that preserves both the health of poultry birds and
                    increases the production of end products such as eggs and
                    meat.
                  </li>
                  <li>
                    The basic nutrients needed by poultry birds for development,
                    reproduction, maintenance and health includes minerals,
                    vitamin, carbohydrates, proteins and water.
                  </li>
                  <li>
                    Poultry feed is made with a combination of various inputs
                    such as soybean seeds, soybean meal, maize, fish meal,
                    sunflower meal and rice polish.
                  </li>
                  <li>
                    There are primarily four distinct types of poultry feed
                    provided to chicken at various life stages and in three
                    distinct forms. These are starter, grower, layer and broiler
                    poultry feed.
                  </li>
                  <li>
                    The poultry feed conversion rate is recorded around ~1.5x in
                    Pakistan – the lower the rate, the better it is.
                  </li>
                </ul>

                <h3>Pattern as per Poultry Bird's Age</h3>

                <div
                  className="poultry-images"
                  style={{
                    display: "flex",
                    gap: "24px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: "32px 0",
                  }}
                >
                  <img
                    src="/images/khan-enterprises-poultry2.jpg"
                    alt="Poultry Farm"
                    style={{
                      maxWidth: "700px",
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
