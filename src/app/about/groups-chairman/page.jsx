"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function GroupsChairman() {
  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/group-chairman.jpg"
          alt=""
        />
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Groups Chairman Message
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Leadership vision and commitment to excellence
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Chairman's Message</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/3026bb24-fafd-4d51-b834-5a0807427982/z82OBhrrPL.lottie" />
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
            <blockquote
              className="about-message"
              style={{ position: "relative", zIndex: 1 }}
            >
              <p>
                Today IKHGROUPS has come a long way since its birth, achieving
                gradual growth and success along the way. As Group Chairman I'm
                focused on continuing the legacy and to build on our heritage
                with the underlying ethos of Commitment, Care and Vision.
              </p>

              <p>
                The Commitment to our clients who continue to believe in and
                support us in our long and adventurous journey towards achieving
                success and excellence. The Care towards the pillars of our
                organization, the diligent colleagues who carry out their
                responsibilities with utmost pride and dedication. Finally the
                vision in adopting long-term corporate goals in the desire to
                achieve sustainable exponential and dynamic growth for the
                entire group.
              </p>

              <p>
                With these 3 core principles imbued in our corporate culture,
                IKHGROUPS is confident in delivering on its promise for the next
                50 years.
              </p>

              <div className="signature-block">
                <p className="closing-line">Onwards and upwards,</p>
                <div className="signature-details">
                  <p className="company-name">OVE Laskar</p>
                  <p className="signature-title">Groups Chairman</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
