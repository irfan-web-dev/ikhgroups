"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function HVACServices() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              HVAC Services
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Market-leading HVAC solutions through our Smart Cool brand -
              delivering quality and innovation in temperature control systems.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/c3008a57-ce3f-4406-aaec-cfabca92452d/sMQHva1PNT.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our HVAC Solutions</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up">
            <h3>Smart Cool</h3>
            <p>
              Construction Agencies Co. under the brand name Smart Cool is an
              acknowledged market leader in Saudi Arabia for supply &
              installation of HVAC products as well as a leading stockiest of
              commodities, to serve customers in the oil and gas, petrochemical,
              construction, and other major industries in Saudi Arabia. Our
              customer base includes Saudi Aramco, SABIC, SCECO, SWCC, as well
              as international and local engineering and construction
              contractors undertaking projects in the kingdom. Our customer
              support services include the engineering, supply, installation,
              commissioning and maintenance of all the products and systems we
              supply. Our services also include full after sales technical
              support, training of personnel, and maintaining an adequate level
              of spare parts in our warehouse facilities in Saudi Arabia. We
              provide our clients all the services during the planning, design,
              and implementation phases of their projects with the active
              participation of our principals. Smart Cool is supervised and
              staffed by sales and service engineers with a unique blend of
              engineering training and marketing experience. Through constant
              study and training, our knowledgeable and experienced staff is
              able to provide our customers with one of the highest degree of
              service and professionalism in the industry. We are proud to have
              worked closely with the majority of our customers and principals
              for many years. Due to our tireless endeavors on behalf of both
              our customers and principals we have been able to create
              opportunities, business solutions, and steady growth over the
              years for all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
