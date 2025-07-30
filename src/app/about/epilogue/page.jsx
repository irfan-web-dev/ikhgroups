"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function Epilogue() {
  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/epilogue.avif"
          alt=""
        />
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">Epilogue</h1>
            <p className="animate__animated animate__fadeInUp">
              A reflection on our foundation and future promise
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Epilogue</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/b3737b52-a65a-4e92-b20c-f639e9433125/ylH7tAhKdn.lottie" />
          </div>

          <div className="content-box-template animate-on-scroll slide-up visible">
            <blockquote className="about-message">
              <p>
                ASIAN STAR FOR IKHGROUPS (IKHGROUPS) operating from Dammam is a
                rapidly expanding organization involved in Industrial
                construction, project support services, trading & industrial
                supply. As a result of our continuous pursuit for recognition
                and devoted customer service during the past several years we
                have secured the confidence and appreciation from our clients.
                We have highly qualified & technically skilled categories for
                Civil, Mechanical & Electrical construction industry along with
                construction heavy equipment's.
              </p>

              <p>
                In case of any specialized requirements required apart from the
                categories mentioned above, CAC with the help of readily
                available professional consultants, in the respective fields
                could explore viable solution to meet such requirements for the
                ultimate satisfaction of valued customers. Your satisfaction and
                Trust on us will be the spring board of our continued success.
              </p>

              <p>
                If you require any additional information, please feel free to
                contact{" "}
                <a href="mailto:info@ikhgroups.com">info@ikhgroups.com</a> or
                IKHGROUPS team for further assistance.
              </p>

              <div className="signature-block">
                <p className="closing-line">With sincere regards,</p>
                <div className="signature-details">
                  <p className="person-name">Imran Khan Tazal Khan</p>
                  {/* <p className="company-name">IKH GROUPS</p> */}
                  <p className="signature-title">
                    Operations Manager
                    <br />
                    <br />
                    ASIAN STAR FOR IKHGROUPS
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
