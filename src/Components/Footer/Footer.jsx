import "./footer.css";
import footerLogo from "../zaraAssets/logo.png";
import instaIcon from "../Assets/instagram_icon.png";
import pinteresIcon from "../Assets/pintester_icon.png";
import WhatsAppIcon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={footerLogo} alt="Footer logo" />
      </div>
      <ul className="footerLinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocialIcons">
        <div className="footerIconContainer">
          <img src={instaIcon} alt="Instagram logo" />
        </div>
        <div className="footerIconContainer">
          <img src={pinteresIcon} alt="pinterest logo" />
        </div>
        <div className="footerIconContainer">
          <img src={WhatsAppIcon} alt="whatpsapp logo" />
        </div>
      </div>
      <div className="footerCopyright">
        <hr className="underline" />
        <p>Copyright @ 2024 - All rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
