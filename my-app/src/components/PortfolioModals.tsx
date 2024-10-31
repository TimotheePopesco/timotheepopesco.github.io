import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faLaptop, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons/faXmarkSquare';

interface PortfolioModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  imgSrc: string;
  icon: any;
  description: any;
  link?: string;
}

export function PortfolioModal({
  show,
  onHide,
  title,
  imgSrc,
  icon,
  description,
  link,
}: PortfolioModalProps) {
  // Vérifie si le fichier est une vidéo
  const isVideo = imgSrc.endsWith('.mp4');

  return (
    <Modal show={show} onHide={onHide} size="xl" centered>
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Modal.Body className="text-center px-5">
        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{title}</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">{icon}</div>
          <div className="divider-custom-line"></div>
        </div>

        {/* Affiche une vidéo ou une image en fonction du type de média */}
        {isVideo ? (
          <video className="img-fluid rounded mb-2" controls>
            <source src={imgSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image className="img-fluid rounded mb-2" src={imgSrc} alt={title} width={500} height={300} />
        )}

        <p className="mb-2 text-justify px-5">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-3">
            Learn More
          </a>
        )}
        <Button variant="primary" onClick={onHide}>
          <FontAwesomeIcon icon={faXmark} /> Close Window
        </Button>
      </Modal.Body>
    </Modal>
  );
}
