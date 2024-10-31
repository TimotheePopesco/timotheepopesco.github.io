import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function Navbar() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = '/js/scripts.js'; // Chemin vers le script dans le dossier public
      script.async = true; // Optionnel : charge le script de manière asynchrone
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script); // Nettoyage lors du démontage
      };
    }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <Link href="#page-top" passHref legacyBehavior>
          <a className="navbar-brand">Timothee Popesco</a>
        </Link>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="divider-custom-icon"><FontAwesomeIcon icon={faBars} /></div>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link href="#portfolio" passHref legacyBehavior>
                <a className="nav-link py-3 px-0 px-lg-3 rounded">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link href="#competences" passHref legacyBehavior>
                <a className="nav-link py-3 px-0 px-lg-3 rounded">Competences</a>
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link href="#about" passHref legacyBehavior>
                <a className="nav-link py-3 px-0 px-lg-3 rounded">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


