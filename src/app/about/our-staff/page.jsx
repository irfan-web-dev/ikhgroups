"use client";
import "./our-staff.css";

import LottiePlayer from "@/components/LottiePlayer";

export default function OurStaff() {
  return (
    <>
      <section className="hero-section-template">
        <div className="container hero-container">
          <div className="hero-text-content floating">
            <h1 className="animate__animated animate__fadeInLeft">Our Staff</h1>
            <p className="animate__animated animate__fadeInRight">
              Meet the team driving our success
            </p>
          </div>

          <LottiePlayer src="https://lottie.host/c343d409-743b-41e0-b848-b050e3d40ddd/doh3Jb3LcL.lottie" />
        </div>
      </section>

      <section className="content-section-template">
        <div className="content-container-template">
          <div className="section-title-template">
            <h2>Our Leadership Team</h2>
          </div>

          <div className="staff-grid animate-on-scroll slide-up visible">
            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/GM-IKH.png?w=415&ssl=1"
                  alt="E.H. Emam Hussain"
                />
              </div>
              <div className="staff-details">
                <h3>E.H. EMAM HUSSAIN</h3>
                <p>GROUPS CHAIRMAN</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/CHAIRMAN-ikh.png?w=415&ssl=1"
                  alt="Abdur Rahaman"
                />
              </div>
              <div className="staff-details">
                <h3>Abdur Rahaman Abdul Aziz Abdullah Al Humam</h3>
                <p>PRESIDENT</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/GM-IKH.png?w=415&ssl=1"
                  alt="AL Hussain Al Mohthel"
                />
              </div>
              <div className="staff-details">
                <h3>AL Hussain Al Mohthel</h3>
                <p>GENERAL MANAGER</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/Opertion-Manager.png?w=415&ssl=1"
                  alt="Imran Khan"
                />
              </div>
              <div className="staff-details">
                <h3>Imran Khan</h3>
                <p>OPERATION MANAGER</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/MARketing-manager.png?w=415&ssl=1"
                  alt="Hassan Khan"
                />
              </div>
              <div className="staff-details">
                <h3>Hassan Khan</h3>
                <p>MARKETTING MANAGER</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/OFFICE-ADMIN.png?w=415&ssl=1"
                  alt="Akram Khan"
                />
              </div>
              <div className="staff-details">
                <h3>Akram Khan</h3>
                <p>OFFICE ADMIN</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/Acc-Manager.png?w=415&ssl=1"
                  alt="Rajib Sheikh"
                />
              </div>
              <div className="staff-details">
                <h3>Rajib Sheikh</h3>
                <p>PROJECT COORDINATOR & OFFICE ADMIN</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/04/Project-Cordinator.png?w=415&ssl=1"
                  alt="Rashik Ahmed"
                />
              </div>
              <div className="staff-details">
                <h3>Rashik Ahmed</h3>
                <p>PROJECT COORDINATOR</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img
                  src="https://i0.wp.com/ikhgroups.com/wp-content/uploads/2020/11/rsz_final.png?w=433&ssl=1"
                  alt="Ashik Ahmed"
                />
              </div>
              <div className="staff-details">
                <h3>ASHIK AHMAED</h3>
                <p>ACCOUNT & OFFICE ADMIN</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
