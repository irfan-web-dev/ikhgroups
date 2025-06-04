"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function SheManagement() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              She Management
            </h1>
            <p className="animate__animated animate__fadeInUp">
              At IKH Groups, we prioritize Safety, Health, and Environmental
              standards to ensure sustainable and responsible construction
              practices.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/e1df25b0-6dd4-4972-84d7-b5641a90cccc/0dpp7iKq7i.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our SHE Commitment</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up visible">
            <p>
              The company recognizes that high standards of health, safety and
              welfare are an integral element of efficient business management
              objectives and contributes to the operational efficiency and
              profitability of the company. Health & Safety is a management
              responsibility of equal importance to production and quality. It
              is IKHGROUPS Policy to comply with the requirements of the Health
              & Safety at work. Equally, it is recognized that employees have a
              duty of care to themselves and others by avoiding hazards,
              preventing accidents and co-operating with the Company by
              complying with all instructions and recommendations on health and
              safety if the aims and objectives of this policy are to be
              achieved.
            </p>

            <h3>Health & Safety Policy</h3>
            <p>
              IKHGROUPS pays every importance to good health, safety performance
              at all areas of operations to achieve business objectives.
              Management is committed to take an integrated approach where
              managing health and safety forms as a part of the overall business
              strategy, protection of human resources, properties, environment
              and the same commitment will be demonstrated by all levels of
              supervision in the organization. Vigorous efforts will extend
              prevention of accident in all possible ways and implications. We
              consider the same as an important element in our construction
              process and are the direct responsibility of our Projects
              Management Team. IKHGROUPS assures that projects will be carried
              out with high degree of safety to attain this objective. Our
              projects management will strive to provide a safe and healthy
              environment that is free from recognized potential hazards and
              will maintain its facilities and equipment at maximum safe
              operating standards.
            </p>

            <h3>Occupational Health and Safety Objectives</h3>
            <ul className="list-style-template">
              <li>To comply with relevant national and international laws.</li>
              <li>To reduce occupational health and safety hazards.</li>
              <li>
                To control the negative effects of the Occupational health and
                safety issues or risks.
              </li>
              <li>
                To assess / improve the Occupational health and safety
                performance.
              </li>
              <li>
                To be prepared for emergency situations and to intervene
                immediately.
              </li>
              <li>
                To train and inform all employees about occupational health and
                safety issues.
              </li>
            </ul>

            <h3>Environment Policy</h3>
            <p>
              It is the policy of IKHGROUPS to operate its business and carry
              out its activities in a way that recognizes its responsibilities
              to and for the environment. The company is committed to pursuing
              the best environmental practices however and whenever practicable.
              Each operating business unit is committed to meet the objective of
              this policy.
            </p>

            <p>In particular we will:</p>
            <ul className="list-style-template">
              <li>
                Include environment issues as a matter of report of board of
                directors.
              </li>
              <li>
                Ensure that adequate human and financial resources are made
                available within operating units to implement and maintain the
                policy
              </li>
              <li>
                Include environmental considerations in our business planning
                and decision making.
              </li>
              <li>
                Comply with all applicable regulations and statutory
                requirements as appropriate where no regulations exist set our
                own standards.
              </li>
              <li>
                Train all employees in environmental matters appropriate to
                their role.
              </li>
            </ul>

            <h3>Environment Objectives:</h3>
            <ul className="list-style-template">
              <li>To make environmentally sensitive buildings.</li>
              <li>To prevent environmental pollution.</li>
              <li>
                To ensure effective use of nonrenewable natural resources and to
                help recovery and re-use.
              </li>
              <li>To comply with national and international laws.</li>
              <li>
                To be prepared for emergency situations and to intervene
                immediately.
              </li>
              <li>
                To train and inform all employees about environmental issues.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
