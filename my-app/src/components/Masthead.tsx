import Image from 'next/image';

export default function Masthead() {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Masthead Avatar Image */}
        <Image 
          className="rounded-circle masthead-avatar mb-4" 
          src="/assets/img/ppCV.jpg" 
          alt="Timothee Popesco"
          width={100} 
          height={220} 
        />
        
        {/* Masthead Heading */}
        <h1 className="masthead-heading text-uppercase mb-0">Timothee Popesco</h1>
        
        {/* Icon Divider */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
        </div>
        
        {/* Masthead Subheading */}
        <p className="masthead-subheading font-weight-light mb-4">STUDENT - Engineer - Designer - Developer</p>
        <p className="masthead-subheading">Looking for a final year internship - 5 to 6 months (1 February - 31 August), in applied R&D or Engineering, ideally as part of a multidisciplinary team.</p>
      </div>
    </header>
  );
}
