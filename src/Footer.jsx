import FooterLogo from "./assets/FooterLogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="footer-column logo-small">
        <img
          src={FooterLogo}
          alt="Little Lemon Logo Small"
          class="logo-small"
        />
      </div>
      <div class="footer-column copywriting">
        <p>&copy; 2025 Copyright Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}
