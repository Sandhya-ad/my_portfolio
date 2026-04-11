import "./contact.css";
import emailImg from "../../assets/email.png";
import linkedinImg from "../../assets/linkedin.png";

const Contact = ({ onClose }) => {
  return (
    <div className="contactOverlay" onClick={onClose}>
      <div className="contactPopup" onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={onClose}>
          ×
        </button>

        <h2 className="contactTitle">Get in Touch</h2>
        <p className="contactSubtitle">
          I’d love to connect. You can reach me by email or find me on LinkedIn.
        </p>

        <div className="contactCards">
          <a
            href="https://mail.google.com/mail/?view=cm&to=asandhya017@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contactCard"
          >
            <img src={emailImg} alt="Email" className="contactImage" />
            <h3>Email</h3>
            <p>asandhya017@gmail.com</p>
            <span>Send me a message</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sandhya-adhikari-6a984b241/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactCard"
          >
            <img src={linkedinImg} alt="LinkedIn" className="contactImage" />
            <h3>LinkedIn</h3>
            <p>Connect with me </p>
            <span>Visit profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;