"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function GroupsChairman() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomIn">
              Groups Chairman Message
            </h1>
            <p className="animate__animated animate__fadeIn">
              Leadership vision and commitment to excellence
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/3026bb24-fafd-4d51-b834-5a0807427982/z82OBhrrPL.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Chairman's Message</h2>
          </div>
          <div className="about-content animate-on-scroll slide-up">
            <blockquote className="about-message">
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
                  <p className="company-name">IKH GROUPS</p>
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
