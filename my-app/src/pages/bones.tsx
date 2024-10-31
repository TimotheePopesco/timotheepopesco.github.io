import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Bones() {
  return (
    <div id="page-top">
      <Navbar />
      <header className="masthead bg-primary text-white text-center">
        <div className="align-items-center">
          <p className="masthead-subheading">
            Looking for a final year internship - 5 to 6 months (1 February - 31 August), in applied R&D or Engineering, ideally as part of a multidisciplinary team.
          </p>
        </div>
      </header>

      <div className="mx-5 px-5 py-4">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">3D bone scaffold</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fa-solid fa-bone"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <br /><br />
        <div className="row justify-content-center">
          {/* Item 0 */}
          <div className="col-md-12 col-lg-6 mb-5">
            <div className="portfolio-item m-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal0">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/assets/img/bones/tibiaGrasshopperIntrallatice.png" alt="..." />
            </div>
          </div>

          {/* Description */}
          <div className="col-md-12 col-lg-6 mb-5">
            <h5 className="px-4 text-justify fw-lighter p-5">
              To create a 3D printable bone scaffold, I started by researching the various 3D modelling tools available. Why did I choose Rhino 7? 
              Rhino7 has a parametric modelling plugin (Grasshopper) that lets you create 3D models by defining variable parameters such as pore size, wall thickness and so on. This makes it easier to experiment. Files are compatible with bioprinting. Compatible with a wide range of software and plug-ins. It can read and scan data from DICOM (Digital Imaging and Communication in Medicine) files. 
              So I started by making scaffolds in simple boxes, in order to test conventional 3D printing and calibrate my parameters. Then, with the help of several YouTube tutorials and tibia analysis, I modelled a tibia into which I inserted my scaffold. 
              The first criticism of my project would be that without a support, it's very complicated to print complex cells to make a scaffold. What's more, despite having a powerful PC and some knowledge of Rhino7, I was only able to create a very approximate tibia (only 400 polygons instead of the 25,000 or so found on this type of mesh). I also couldn't make a very accurate scaffold of my bone because Rhino7 crashed every time I connected the tibia mesh to the scaffold made on GrassHopper. So, I think that modelling a bone scaffold is too complex for a simple machine, but with the right tools and the right method, I think it's achievable, especially as it's possible to carry out mechanical tests and simulations on the model in Rhino7. 
              To continue this project, it would be possible to run mechanical tests and simulations on the software, before running them on 3D parts.
            </h5>
          </div>

          {/* Item 1 */}
          <div className="col-md-12 col-lg-6 mb-5">
            <div className="portfolio-item mx-auto text-center" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/assets/img/bones/tibiaRhinoRendered.png" alt="..." />
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-md-12 col-lg-6 mb-5">
            <div className="portfolio-item mx-auto text-center" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="/assets/img/bones/tibiaScaffoldTransparent.png" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
