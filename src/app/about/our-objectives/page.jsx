"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function OurVision() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__fadeInLeft">
              Our Objectives
            </h1>
            <p className="animate__animated animate__fadeInRight">
              Excellence through safety, quality, and responsibility
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/cf349f96-62ab-4051-9478-8cc6ab641002/wZ6qnjV0BO.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Objectives</h2>
          </div>
          <div className="about-content animate-on-scroll  visible">
            <blockquote className="about-message">
              <p>
                Our first, and most important, objective is to provide a safe
                workplace. It is our policy to maintain our job sites in a way
                that optimizes workplace safety for employees as well as for the
                general public. The objective is to completely eliminate all
                accidents involving injury or death. We remain in full
                compliance with all OSHA standards applicable to our work. We
                strictly adhere to the specifications provided by the owner of
                the project as they relate to maintaining a project which
                protects members of the public from injury or death. In
                addition, every effort is made by every member of the workforce,
                at every tier, to prevent unsafe situations on our job sites. It
                is our policy to completely eliminate unnecessary damage to the
                property and facilities belonging to the owner of the project as
                well as to third parties.
              </p>

              <p>
                High quality construction is our second objective. It is our
                policy to meet the specifications of the contract with the owner
                of each project we undertake. Where no specifications are
                provided by the owner, it is our policy to use the best
                practices and procedures to complete our work in accordance with
                industry standards. We meet the specifications of the owner
                without the need for the owner’s representative to generate
                lengthy punch lists. The goal is to have no punch list at the
                end of a project.
              </p>

              <p>
                It is our policy to complete all projects on time. Additionally,
                where the contract identifies milestone completion dates,
                IKHGROUPS meets or exceeds all requirements with no milestone
                deadlines being missed.
              </p>

              <p>
                IKHGROUPS’s fourth objective is to give the utmost consideration
                to the owner’s budget. IKHGROUPS managers work to help the owner
                meet its budget requirements by finding reasonable solutions to
                budget challenges through value engineering. It is our policy to
                complete all of our projects at or below IKHGROUPS’s cost
                budget. By setting the budget, diligently monitoring the actual
                costs, and identifying budget variances early in the
                construction process, IKHGROUPS’s management team finds
                solutions to potential cost overruns before they become reality
                and affect the entire budget. Doing so helps enable IKHGROUPS to
                manage its projects efficiently so that owners can be assured
                they will never be assigned unwarranted change orders.
              </p>

              <div className="signature-block">
                <p className="closing-line">With commitment and precision,</p>
                <div className="signature-details">
                  <p className="company-name">IKH GROUPS</p>
                  <p className="signature-title">Objective Statement</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
