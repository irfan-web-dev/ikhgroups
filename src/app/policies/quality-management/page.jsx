"use client";

import LottiePlayer from "@/components/LottiePlayer";

export default function QualityManagement() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__zoomInDown">
              Quality Management
            </h1>
            <p className="animate__animated animate__fadeInUp">
              At IKH Groups, we are committed to delivering construction
              projects of the highest quality through rigorous quality
              management systems and processes.
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/e213f05b-bdd5-4c48-87f7-65055181c883/xTxDglfvzS.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Quality Commitment</h2>
          </div>
          <div className="content-box-template animate-on-scroll slide-up">
            <h3>Quality Management System</h3>
            <p>
              Our Quality Management System meets the requirements of ISO
              9001:2008. It encompasses all of the aspects involved in the
              provision of services, from initial enquiry through to
              implementation, operation and reporting. The services we provide
              are managed in accordance with quality plans tailored to meet our
              client's specific requirements. In order to ensure compliance with
              our Quality Management System, regular quality audits are carried
              out throughout the organization.
            </p>

            <h3>Quality Policy</h3>
            <p>
              IKHGROUPS is in the field of Electro Mechanical contracting which
              involves the following activities:
            </p>

            <ul className="list-style-template">
              <li>Estimation, design, purchasing, contracting</li>
              <li>
                Installation and commissioning of mechanical, electrical, and
                public health services
              </li>
              <li>
                Operational maintenance of installed mechanical and electrical
                services
              </li>
            </ul>

            <p>
              It is the policy of IKHGROUPS to supply customers with products
              and services which have been quality assured in accordance with
              agreed specifications.
            </p>

            <p>
              It is our policy to achieve customer satisfaction by total
              commitment to Quality management systems. This includes
              establishing quality objectives in line with quality policy and to
              review them on continual basis.
            </p>

            <p>
              It is our policy to demonstrate continual improvement in our
              products and services to satisfy needs and expectations of our
              customers.
            </p>

            <p>
              The policies laid down in this manual cover estimation, design,
              purchasing, contracting, installation and commissioning of
              mechanical, electrical and public health services and are fully
              endorsed by the board of directors and backed up by Quality
              Assurance Procedure manuals.
            </p>

            <p>
              The policies within this document and procedures contained in
              quality assurance procedure manuals are mandatory to all
              employees.
            </p>

            <p>
              Management reviews of quality systems will be held on a regular
              basis in line with the documented procedure with a view to
              improving system and reducing the possibility of non-conformance.
            </p>

            <p>
              IKHGROUPS is working to implement the quality assurance system as
              part of its policies and is working on its ISO9001:2008
              certification to meet the full requirements of ISO9001:2008.
            </p>

            <h3>Quality Assurance Policy</h3>
            <p>
              It is the policy of all companies within the Group to provide
              service and goods, which meet the agreed contractual
              specifications and quality standards defined by the customer (via
              his/her representative). To this end, every operating unit is
              required:
            </p>

            <ul className="list-style-template">
              <li>
                To maintain staff able to interpret, clarify and conform to the
                client's requirements
              </li>
              <li>
                To ensure, by proper selection and examination that goods
                supplied and/or incorporated are suitable and safe to operate
              </li>
              <li>
                To make sure that goods and systems are installed in a
                satisfactory manner
              </li>
              <li>
                To commission completed systems so that their operation and
                maintenance is facilitated
              </li>
              <li>
                If so required by the client, to ensure that the completed and
                commissioned systems are serviced on a regular and systematic
                basis
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
