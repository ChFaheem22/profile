import { Mail, FileText, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from '../components/reveal';

export const metadata = {
  title: 'Contact',
  description: "Freelance work or an internship? Send a message.",
};

const Contacts = () => {
  return (
    <section className="contactSection">
      <Reveal className="contactHead">
        <span className="eyebrow">Get in touch</span>
        <h1 className="contactTitle">Have a project in mind?</h1>
        <p>
          Freelance work, an internship, or a project you want a second
          opinion on. Send it over.
        </p>
      </Reveal>

      <div className="contactGridTwo">
        <Reveal delay={0.05}>
          <div className="infoPanel">
            <div className="infoItem">
              <div className="infoIcon">
                <MapPin size={16} />
              </div>
              <div className="infoText">
                <div className="k">Location</div>
                <div className="v">Lahore, Pakistan</div>
              </div>
            </div>

            <a href="mailto:faheemchh779@gmail.com" className="infoItem">
              <div className="infoIcon">
                <Mail size={16} />
              </div>
              <div className="infoText">
                <div className="k">Email</div>
                <div className="v">faheemchh779@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/faheemch22"
              target="_blank"
              rel="noopener noreferrer"
              className="infoItem"
            >
              <div className="infoIcon">
                <FaLinkedin size={16} />
              </div>
              <div className="infoText">
                <div className="k">LinkedIn</div>
                <div className="v">Message me</div>
              </div>
            </a>

            <a
              href="https://github.com/ChFaheem22"
              target="_blank"
              rel="noopener noreferrer"
              className="infoItem"
            >
              <div className="infoIcon">
                <FaGithub size={16} />
              </div>
              <div className="infoText">
                <div className="k">GitHub</div>
                <div className="v">Code &amp; projects</div>
              </div>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="infoItem"
            >
              <div className="infoIcon">
                <FileText size={16} />
              </div>
              <div className="infoText">
                <div className="k">Resume</div>
                <div className="v">Download PDF</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="formPanel"
            action="https://formsubmit.co/faheemchh779@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from your portfolio"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />

            <div className="formRow">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Faheem Ch"
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="faheem@company.com"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Frontend internship opportunity"
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="What are you working on?"
              />
            </div>

            <button type="submit" className="btn primary submitBtn">
              <Send size={15} style={{ marginRight: '6px' }} />
              Send Message
            </button>

            <p className="formNote">
              Goes straight to my inbox. No sign-up needed.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contacts;
