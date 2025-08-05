import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Designed with love ❤️</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              href={socialImg.url} // Use the URL from your array
              key={index}
              className="icon"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Rahaf Moualla.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;