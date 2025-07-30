"use client";
import "./our-staff.css";
import LottiePlayer from "@/components/LottiePlayer";

export default function OurStaff() {
  return (
    <>
      <section className="hero-section-template">
        <img
          className="hero-video-background"
          src="/images/our-staff.avif"
          alt="Our Team"
        />
        <div className="container hero-container">
          <div className="hero-text-content">
            <h1 className="animate__animated animate__zoomInDown">Our Staff</h1>
            <p className="animate__animated animate__fadeInUp">
              Meet the team driving our success
            </p>
          </div>
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Leadership Team</h2>
          </div>

          <div className="content-animation">
            <LottiePlayer src="https://lottie.host/c343d409-743b-41e0-b848-b050e3d40ddd/doh3Jb3LcL.lottie" />
          </div>

          <div className="staff-grid animate-on-scroll slide-up visible">
            {/* Chairman */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/GM-IKH.png?w=415&ssl=1"
                    alt="OVE Laskar"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>OVE Laskar</h3>
                <p>GROUPS CHAIRMAN</p>
              </div>
            </div>

            {/* MD */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img src="/images/staff-md.jpeg" alt="MD" />
                </div>
              </div>
              <div className="staff-details">
                <h3>Engr. Kamrul Islam</h3>
                <p>Managing Director</p>
              </div>
            </div>

            {/* CEO */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img src="/images/staff-ceo.jpeg" alt="E.H. EMAM HUSSAIN" />
                </div>
              </div>
              <div className="staff-details">
                <h3>E.H. EMAM HUSSAIN</h3>
                <p>CEO</p>
              </div>
            </div>

            {/* General Manager */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/GM-IKH.png?w=415&ssl=1"
                    alt="AL Hussain Al Mohthel"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>AL Hussain Al Mohthel</h3>
                <p>GENERAL MANAGER</p>
              </div>
            </div>

            {/* Operation Manager */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/Opertion-Manager.png?w=415&ssl=1"
                    alt="Imran Khan"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Imran Khan</h3>
                <p>OPERATION MANAGER</p>
              </div>
            </div>

            {/* Marketing Manager */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/MARketing-manager.png?w=415&ssl=1"
                    alt="Hassan Khan"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Hassan Khan</h3>
                <p>MARKETING MANAGER</p>
              </div>
            </div>

            {/* Office Admin */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/OFFICE-ADMIN.png?w=415&ssl=1"
                    alt="Akram Khan"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Akram Khan</h3>
                <p>OFFICE ADMIN</p>
              </div>
            </div>

            {/* Project Coordinator */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/Acc-Manager.png?w=415&ssl=1"
                    alt="Rajib Sheikh"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Rajib Sheikh</h3>
                <p>PROJECT COORDINATOR & OFFICE ADMIN</p>
              </div>
            </div>

            {/* Project Coordinator 2 */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/Project-Cordinator.png?w=415&ssl=1"
                    alt="Rashik Ahmed"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Rashik Ahmed</h3>
                <p>PROJECT COORDINATOR</p>
              </div>
            </div>

            {/* Account & Office Admin */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/11/rsz_final.png?w=433&ssl=1"
                    alt="Ashik Ahmed"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>ASHIK AHMED</h3>
                <p>ACCOUNT & OFFICE ADMIN</p>
              </div>
            </div>

            {/* Construction Manager - Electrical */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="/images/staff-cm-electrical.jpeg"
                    alt="Mirza Pavel"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Mirza Pavel</h3>
                <p>⁠Construction Manager - Electrical</p>
              </div>
            </div>

            {/* Construction Manager - Civil */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="/images/staff-cm-civil.jpg"
                    alt="A.T.M. Zillur Rahman"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>A. T. M. Zillur Rahman</h3>
                <p>⁠Construction Manager - Civil</p>
              </div>
            </div>

            {/* Construction Manager - Mechanical */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="/images/staff-cm-mechanical.jpg"
                    alt="Engr. Shapon Malakar"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Engr. Shapon Malakar</h3>
                <p>⁠Construction Manager - Mechanical</p>
              </div>
            </div>

            {/* Logistic Incharge  */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="/images/staff-logistic-incharge.jpg"
                    alt="Jamil Hussain"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Jamil Hussain</h3>
                <p>⁠Logistic Incharge </p>
              </div>
            </div>

            {/* Civil Engr.  */}
            <div className="staff-card">
              <div className="staff-image-wrapper">
                <div className="staff-image">
                  <img
                    src="/images/staff-civil-engr.jpeg"
                    alt="Jamil Hussain"
                  />
                </div>
              </div>
              <div className="staff-details">
                <h3>Md. Monir Hossain </h3>
                <p>Civil Engr.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
