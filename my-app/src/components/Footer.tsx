import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                8 rue la Rochejaquelein,
                <br />
                Saint-Germain en Laye
                <br />
                78100, France
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/TimotheePopescoDev">
              <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/tp-engineer-designer/">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/timothee.popesco.3">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Me</h4>
              <p className="lead mb-0">
                +33652889733
                <br />
                timothee@popesco.com
                <br />
                President of the Leorugby association
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  