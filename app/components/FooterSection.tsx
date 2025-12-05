import React from "react";
import { footerLinks } from "../constants";
const FooterSection = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: <span>Find an Apple Store</span> or{" "}
          <span>other retailer</span> near you. Or call 000080 040 1966
        </p>
        <img src="/logo.svg" alt="apple logo" />
      </div>
      <hr />
      <div className="info">
        <p>Copyright 2024 Apple Inc. All rights reserved.</p>
        <div className="links">
          <ul>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.link} target="_blank">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
