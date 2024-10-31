import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

export default function Competences() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  const slides = [
    {
      src: "/assets/img/competences/front-end.png",
      alt: "Front-end Skills",
      description: "During my bachelor's degree, I learned front-end programming for web and mobile applications, using various languages and frameworks that I applied during internships and course projects. I have a strong proficiency in HTML, CSS, JavaScript, and WordPress, and I have basic knowledge of Flutter, jQuery, Sass, React, and Wix."
    },
    {
      src: "/assets/img/competences/back-end.png",
      alt: "Back-end Skills",
      description: "Throughout my studies, I received training in back-end programming through numerous projects. I improved my skills in PHP, Symfony and Golang during my internships, acquiring solid competencies in the process. Additionally,I have a strong foundation in Python, C#, and SQL."
    },
    {
      src: "/assets/img/competences/design.png",
      alt: "Design Skills",
      description: "From my first year of studies, I was trained on the Adobe suite. I learned to create mockups, prototype, and design products, websites, as well as advertising campaigns. I developed strong skills in Adobe XD, Illustrator, Photoshop, and After Effects, as well as in Figma, a collaborative design tool."
    },
    {
      src: "/assets/img/competences/electronics.png",
      alt: "Electronics Skills",
      description: "Since joining the Creative Technology master's program, I have been trained in electronics through practical work and projects. During these activities, I learned to create electronic schematics and printed circuits using KiCad, solder components, use sensors, and develop code on Arduino."
    },
    {
      src: "/assets/img/competences/modelling.png",
      alt: "3D Modelling Skills",
      description: "During my studies, I learned to model and print various pieces in 3D. I began by training on 3DS Max and Blender, where I acquired the fundamentals of 3D modeling and animation. Subsequently, I progressed to SolidWorks and Rhino 7 to learn how to create parts for assembly, planning, and testing. Rhino 7 also provided me with training in parametric modeling."
    }
  ];

  const showSlides = (n: number) => {
    let newIndex = n;
    if (n >= slides.length) newIndex = 0;
    if (n < 0) newIndex = slides.length - 1;
    setSlideIndex(newIndex);
  };

  const plusSlides = (n: number) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n: number) => {
    showSlides(n);
  };

  useEffect(() => {
    slidesRef.current.forEach((slide, i) => {
      slide.style.display = i === slideIndex ? 'block' : 'none';
    });
  }, [slideIndex]);

  return (
    <section className="competences-section" id="competences">
      <h2 className="page-section-heading text-center text-uppercase text-secondary">Competences</h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><FontAwesomeIcon icon={faListCheck} /></div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="competences">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el!)}
            className="mySlides"
            style={{ display: index === 0 ? 'block' : 'none' }}
          >
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <img className="imag" src={slide.src} alt={slide.alt} />
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            <p className="text">{slide.description}</p>
          </div>
        ))}

        <div className="points">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot${index === slideIndex ? ' active' : ''}`}
              onClick={() => currentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
