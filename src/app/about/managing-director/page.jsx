"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function ManagingDirector() {
  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/president.png"
          alt="President Background"
        />
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">
              Managing Director(MD) Message
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Vision and leadership for continued excellence
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>From the Managing Director (MD) Desk</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/fe02ad22-c0cd-417f-9531-d6dc4c661361/aXKgZCLrOA.lottie" />
          </div>

          <div className="content-box-template animate-on-scroll slide-up visible">
            <blockquote className="about-message">
              <p>
                At the outset, we feel privileged and proud to serve the entire
                Middle East as a premier General Construction Contractor &
                Manpower Supplier. We are very glad and welcome you to view our
                company's website which gives you an overview about our
                organization and handled & completed, and profile of our
                clientele.
              </p>

              <p>
                Again, surfing our website would also give you vivid picture
                about our prominent role in the construction industry in the
                Middle East and saga of our success in achieving our objectives
                by, "providing high quality service within a reasonable budget,
                delivery within the stipulated time frame" maintaining highest
                degree of quality and safety in all out endeavors.
              </p>

              <p>
                IKHGROUPS has rapid, balanced growth and has always maintained a
                sound financial backup and the company enjoys impeccable
                corporate reputation. One of the two pillars of IKHGROUPS
                corporate Philosophy in to follow up and implement the latest
                state-of-the-art construction technology and the other is our
                determination to uphold quality and safety throughout execution
                of the works undertaken.
              </p>

              <p>
                I would like to extend my congratulations and thanks to all
                loyal IKHGROUPS employees, our clients and our faithful
                subcontractors, for making IKHGROUPS what it is today. I would
                like to thank you for visiting our website and solicit your
                attention to watch out for future updated data and information
                about IKHGROUPS.
              </p>

              <div className="signature-block">
                <p className="thank-you">Thank You!</p>
                <div className="signature-details">
                  <p className="president-name">Engr. Kamrul Islam</p>
                  <p className="signature-title">Managing Director (MD)</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
