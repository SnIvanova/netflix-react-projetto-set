import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from 'mdb-react-ui-kit';


const SocialIcons = () => (
  <div className="col-12 text-center mb-4">
    <MDBIcon fab icon="facebook" className="me-3 social-icon" />
    <MDBIcon fab icon="instagram" className="me-3 social-icon" />
    <MDBIcon fab icon="twitter" className="me-3 social-icon" />
    <MDBIcon fab icon="youtube" className="social-icon" />
  </div>
);


const FooterLink = ({ title, link }) => (
  <div className="col-md-3 col-sm-6 mb-3">
    <a href={link} alt={`footer link ${title}`} className="text-light text-decoration-none d-block footer-link">
      {title}
    </a>
  </div>
);


const footerLinks = [
  { id: 1, title: "Audio and Subtitles", link: "#!" },
  { id: 2, title: "Media Center", link: "#!" },
  { id: 3, title: "Privacy", link: "#!" },
  { id: 4, title: "Contact us", link: "#!" },

];


const FooterLinksList = () => (
  <div className="row justify-content-center">
    {footerLinks.map((item) => (
      <FooterLink key={item.id} title={item.title} link={item.link} />
    ))}
  </div>
);


const Footer = () => (
  <footer className="bg-dark text-light py-5">
    <div className="container">
      <SocialIcons />
      <FooterLinksList />

      <div className="row justify-content-center">
        <div className="col-12 text-center mb-3">
          <button type="button" className="btn btn-outline-light btn-sm rounded-pill">
            Service Code
          </button>
        </div>
      </div>


      <div className="row">
        <div className="col-12 text-center small">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
