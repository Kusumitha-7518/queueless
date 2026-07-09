import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          <div>

            <h2>QueueLess</h2>

            <p>
              Smart Queue Management System
              helping hospitals, banks,
              colleges and government offices
              reduce waiting time.
            </p>

          </div>

          <div>

            <h2>Quick Links</h2>

            <ul>

              <li><a href="#features">Features</a></li>

              <li><a href="#how">How It Works</a></li>

              <li><a href="#about">About</a></li>

            </ul>

          </div>

          <div>

            <h2>Contact</h2>

            <p>queueless@gmail.com</p>

            <p>Bangalore, India</p>

          </div>

        </div>

        <div className="footer-bottom">

          © 2026 QueueLess. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;