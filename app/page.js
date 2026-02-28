import Link from 'next/link'
import Image from 'next/image';

const Home = () => {
  return (
    <main className="home-container">
      
      {/* Background Decor Elements */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <section className="hero">
        <div className="hero-content">
          <span className="badge">👋 Welcome to my portfolio</span>
          <h1>Hi, I’m <span className="name">Faheem</span></h1>
          <h2>Frontend Developer & <br /> MERN Stack Enthusiast</h2>
          <p className="intro">
            I’m a Software Engineering student focused on building fast,
            scalable, and user-centered web applications. I specialize in
            <strong> React</strong> and <strong>Next.js</strong>, crafting clean UI designs with smooth user experiences.
          </p>
          
          <div className="buttons">
            <Link className="btn primary" href="/projects">View My Work</Link>
            <Link className="btn outline" href="/about">About Me</Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-container">
            <Image 
              src="/pic-3.jpeg" 
              alt="Faheem - Frontend Developer" 
              className="profile-img" 
              width={400} 
              height={500}
              priority
            />
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="cta-content">
          <h3>Let's build something amazing together.</h3>
          <p>Interested in collaborating or discussing a project opportunity?</p>
          <Link className="btn white-btn" href="/contact">Let’s Connect</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;