import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    return (
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptop} /></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row text-infos">
            <div className="col-lg-4 ms-auto pr">
              <p className="lead">I'm currently studying for a Master 1 double degree at ESILV and IIM, in the Creative Technologies programme, and have developed skills in programming, electronics, design, 3D modelling and teamwork. I'm attentive, adaptable and motivated. My positions as president of the rugby association and an active member of a BDE have enriched my career.</p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">My course familiarises me with multi-technology integration, enabling me to design, prototype and test concrete creations. I'm looking for a final year internship - 5 to 6 months (1 February - 31 August), in applied R&D or Engineering, ideally as part of a multidisciplinary team.</p>
            </div>
          </div>
          <div className="text-center mt-4 p-4">
            <a className="btn btn-xl btn-outline-light" href="/assets/img/timotheePopescoCV.pdf">
              <i className="fas fa-download me-2"></i> Download my Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
  