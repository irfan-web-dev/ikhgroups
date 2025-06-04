"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function GeneralManager() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__fadeInLeft">
              General Manager's Message
            </h1>
            <p className="animate__animated animate__fadeInRight">
              Operational excellence and commitment to quality
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/b5819b3a-1ed5-4d7d-a48f-81d568dcdb57/0lpYS16h8I.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>From the General Manager</h2>
          </div>
          <div className="about-content animate-on-scroll visible">
            <div className="about-message">
              <p>
                I am delighted to present a Company to you that is 'built to
                last' and is proud to have continually delivered the right
                engineering and construction solutions for our public and
                private sector clients since its inception.
              </p>

              <p>
                There is a story in every project we build. A personality
                ingrained by those who design and build it. No matter what our
                client's project challenge, we will offer the smart people with
                the desire and dedication to get the job done right. We don't
                just build public and private infrastructure, we make a
                commitment to understand our client's needs and offer an
                end-to-end solution to every project, big or small, no matter
                what it is or where it's located.
              </p>

              <p>
                Our creative approach is what makes us stand out from the crowd,
                and that's why our projects consistently win and why we generate
                repeat business. Anyone can build it, but we believe that we
                build it better. We have some of the best and brightest in their
                fields working for us. It's something we're proud of, we strive
                to be the industry leaders, and it shows in our work.
              </p>

              <p>
                In IKHGROUPS we believe in reliability, integrity,
                professionalism, innovation, total quality, teamwork and respect
                to the clients and associates. These real values of life grant
                IKHGROUPS recognition, not only in the construction industry but
                also in the society.
              </p>

              <p>
                As a result of this attitude and in a spirit of consent and
                mutual respect, IKHGROUPS is proud to be one of the few
                companies that seek, achieve and maintain strategic and
                individual collaborations with repetitive and reputable clients,
                as well as other reliable contractors. We always seek to employ
                and develop enthusiastic individuals related to our line of
                business that share and appreciate our values.
              </p>

              <p>
                At ASIAN STAR FOR IKHGROUPS, we have a strong belief in our
                people and the passion they generate to deliver on our clients'
                infrastructure challenges. Please do not hesitate to e-mail us
                or get in touch with one of our business or service units
                through the contact page.
              </p>

              <div>
                <p>AL HUSSAIN SAEID AL MOHTHEL</p>
                <p>GENERAL MANAGER</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
