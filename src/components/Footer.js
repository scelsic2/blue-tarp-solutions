import "boxicons";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-nav-wrapper">
        <nav className="footer-nav-1">
          <a href="/about">
            <p>About Us</p>
          </a>

          <a href="/whatwedo">
            <p>What We Do</p>
          </a>

          <a href="/howwedoit">
            <p>How We Do It</p>
          </a>
        </nav>

        <nav className="footer-nav-2">
          <a href="#" target="_blank">
            <box-icon
              type="logo"
              name="linkedin-square"
              color="var(--logo-gold)"
            ></box-icon>
          </a>

          <div className="email-div">
            <a href="mailto:info@bluetarpsolutions.com">
              info@bluetarpsolutions.com
            </a>

            <box-icon
              type="solid"
              name="envelope"
              color="var(--logo-gold)"
            ></box-icon>
          </div>
        </nav>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Blue Tarp Solutions, LLC</p>
      </div>
    </footer>
  );
}

export default Footer;
