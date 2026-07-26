import { Mail, FileText, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from '../components/reveal';

export const metadata = {
  title: 'Contact',
  description: "Get in touch — I'm open to freelance work and internship opportunities.",
};

const Contacts = () => {
  return (
    <section className="contactSection">
      <Reveal className="contactHead">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1 className="contactTitle">Have a project in mind?</h1>
        <p>
          I&rsquo;m always open to discussing new opportunities, freelance work,
          or ideas. Send a message and I&rsquo;ll get back to you.
        </p>
      </Reveal>

      <div className="contactGridTwo">
        <Reveal delay={0.05}>
          <div className="infoPanel">
            <div className="infoItem">
              <div className="infoIcon">
                <MapPin size={17} />
              </div>
              <div className="infoText">
                <div className="k">Location</div>
                <div className="v">Lahore, Pakistan</div>
              </div>
            </div>

            <a href="mailto:faheemchh779@gmail.com" className="infoItem">
              <div className="infoIcon">
                <Mail size={17} />
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
                <FaLinkedin size={17} />
              </div>
              <div className="infoText">
                <div className="k">LinkedIn</div>
                <div className="v">Connect professionally</div>
              </div>
            </a>

            <a
              href="https://github.com/ChFaheem22"
              target="_blank"
              rel="noopener noreferrer"
              className="infoItem"
            >
              <div className="infoIcon">
                <FaGithub size={17} />
              </div>
              <div className="infoText">
                <div className="k">GitHub</div>
                <div className="v">Explore my repositories</div>
              </div>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="infoItem"
            >
              <div className="infoIcon">
                <FileText size={17} />
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
                  placeholder="Jane Doe"
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@company.com"
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
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="btn primary submitBtn">
              <Send size={16} style={{ marginRight: '8px' }} />
              Send Message
            </button>

            <p className="formNote">
              Sent directly to my inbox — no account or sign-up needed on your
              end.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contacts;