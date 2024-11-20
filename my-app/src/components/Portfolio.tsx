import Image from 'next/image';
import { useState } from 'react';
import { PortfolioModal } from './PortfolioModals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattery, faBone, faCarBattery, faFootball, faLaptop, faPizzaSlice, faPlus, faRecycle, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Portfolio() {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  const handleShowModal = (index: number) => setSelectedModal(index);
  const handleCloseModal = () => setSelectedModal(null);

  const portfolioItems = [
    {
        imgSrc: "/assets/img/portfolio/scaffold.png",
        alt: "Bone Scaffold",
        title: "Bone Scaffolds",
        icon : <div className="divider-custom-icon"><FontAwesomeIcon icon={faBone} /></div>,
        description: <p className="mb-4">
        During my first semester of my Master's degree, I had to choose an innovation project for my research. 
        I decided to focus on 3D bioprinting of bone scaffolds. 
        I researched the best tools for modelling scaffolds, as well as the biomaterials and printers to use. 
        I then modelled the parts in 3D using Rhino 7. To find out more, <Link href="/bones"> Click here</Link>.
    </p>},
    {
        imgSrc: "/assets/img/portfolio/popShochs.png",
        alt: "POP-SHOCKS",
        title: "POP-SHOCKS",
        icon : <div className="divider-custom-icon"><FontAwesomeIcon icon={faFootball} /></div>,
        description: 
        <p className="mb-4">
          In my second semester, I had to choose an innovation project for my research. 
          I decided to focus on a rugby helmet that detects impacts to prevent concussions. 
          My project is intended to be implemented using low-tech solutions. 
          I plan to incorporate piezoelectric sensors with an ESP32 Beetle and utilize conductive foam for the helmet. 
          I've only recently begun my research, and I'll keep you updated on my progress at the conclusion of writing my report.
          To find out more, <Link href="/helmet"> Click here</Link>.
        </p>
    },
    {
        imgSrc: "/assets/img/portfolio/kickStarter.png",
        alt: "Key Starter",
        title: "Key Starter",
        icon : <div className="divider-custom-icon"><FontAwesomeIcon icon={faScrewdriverWrench} /></div>,
        description: <p className="mb-4">In my first year of master's, with a colleague, we built a project integrates an algae incubator into an emergency exit sign, 
        transforming an often overlooked object into a sustainable and multifunctional element. 
        By combining an emergency exit sign with an algae incubator, 
        we demonstrate a novel approach to enhancing the functionality and sustainability of everyday objects.
    Link to the <a href="https://dvic.devinci.fr/algae-incubator-exit-panel">project</a>.</p>
    },
    {
        imgSrc: "/assets/img/portfolio/incubator.png",
        alt: "Exit Panel Algae Incubator",
        title: "Exit Panel Algae Incubator",
        icon : <div className="divider-custom-icon"><FontAwesomeIcon icon={faRecycle} /></div>,
        description:  <p className="mb-4">In my first year of master's, with a colleague, we built a project integrates an algae incubator into an emergency exit sign, 
        transforming an often overlooked object into a sustainable and multifunctional element. 
        By combining an emergency exit sign with an algae incubator, 
        we demonstrate a novel approach to enhancing the functionality and sustainability of everyday objects.
        Link to the <a href="https://dvic.devinci.fr/algae-incubator-exit-panel">project</a>.</p>
    },
    {
        imgSrc: "/assets/img/portfolio/divali.mp4",
        posterSrc: "/assets/img/portfolio/automobiles.png",
        alt: "Stellantis - Electric Day",
        title: "Stellantis - Electric Day",
        icon : <div className="divider-custom-icon"><FontAwesomeIcon icon={faCarBattery} /></div>,
        description: <p className="mb-4">to validate my last year of bachelor's degree, I had to complete a 5-month internship at Divali, an events agency. 
        My tasks within the company included managing databases, creating one-pagers for our clients, performing website maintenance, 
        and primarily, developing a web platform to manage clients, cars, and test drives for an event organized by the Stellantis electric group. 
        Consequently, I created a responsive platform using Symfony, a PHP framework.
    </p>
    },
    {
        imgSrc: "/assets/img/portfolio/django.png",
        alt: "Django Project",
        title: "Django Project",
        icon : <div className="divider-custom-icon"><FontAwesomeIcon icon={faPizzaSlice} /></div>,
        description: <p className='mb-4'>During my third year of study abroad, I had to submit a project in backend : An online interactive website made with Django. I decided to make the menu of a restaurant (here pizza mama). 
        Link to the <a href="https://github.com/TimotheePopesco/djangopizza"> GitHub</a>.
        Link to the <a href="https://timotheepopesco.pythonanywhere.com/"> Website</a>.
        </p>
    },
    {
        imgSrc: "/assets/img/portfolio/crypto.png", // Replace with the actual image path
        alt: "Html/Css Framework",
        title: "Html/Css Framework",
        icon : <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptop} /></div>,
        description: <p className="mb-4">During my 3rd year, I had to create 4 one pages in Html/Css using different Frameworks to improve my efficiency in web design. 
        The links to my different pages : <a href="assets/img/portfolio/crypto-wallet/crypto-wallet/index.html"> CryptoWallet</a>
        , <a href="assets/img/portfolio/hero-gallery/index.html"> HeroGallery</a>, <a href="assets/img/portfolio/snazzy-fashion/index.html"> SnazzyFashion</a> and <a href="assets/img/portfolio/smooth-smoothies/index.html"> SmoothSmoothies</a>.
          Find the source code on my <a href="https://github.com/TimotheePopesco?tab=repositories">Github</a>.
        </p>},
    {
      imgSrc: "/assets/img/portfolio/rendufinal.mp4", // Replace with the actual image path
      posterSrc: "/assets/img/portfolio/portfolioa1.png",
      alt: "Portfolio 2020",
      title: "Html/Css Framework",
      icon : <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptop} /></div>,
      description: <p className="mb-4">As part of my first year in digital. 
      I was introduced to the main axes (3D, video games, creation and design, e-communication and web development). 
      At the end of the year I had to present a "video portfolio" listing my projects done during the year.
      </p>}
];


return (
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
    <h2 className="page-section-heading text-center text-uppercase text-secondary">Portfolio</h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptop} /></div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="row justify-content-center">
        {portfolioItems.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-5">
            <div className="portfolio-item mx-auto" onClick={() => handleShowModal(index)}>
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
              </div>
              {/* Affiche l’image de poster si c’est une vidéo, sinon l’image normale */}
              {item.imgSrc.endsWith('.mp4') ? (
                <Image className="img-fluid" src={item.posterSrc} alt={item.alt} width={300} height={300} layout="responsive" />
              ) : (
                <Image className="img-fluid" src={item.imgSrc} alt={item.alt} width={300} height={300} layout="responsive" />
              )}
            </div>
          </div>
        ))}
      </div>

      {portfolioItems.map((item, index) => (
        <PortfolioModal
          key={index}
          show={selectedModal === index}
          onHide={handleCloseModal}
          title={item.title}
          imgSrc={item.imgSrc}
          icon={item.icon}
          description={item.description}
        />
      ))}
    </div>
  </section>
);
}