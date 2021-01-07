import React from "react";
import FooterAbout from '../components/FooterAbout'
import FooterNewsletter from '../components/FooterNewsletter'
import FooterLinks from '../components/FooterLinks'
import FooterJoin from '../components/FooterJoin'

export default function FooterContainer() {
 return (
    <footer id="main-footer" className='py-2'>
      <div className="container footer-container">
        <FooterAbout />
        <FooterNewsletter />
        <FooterLinks />
        <FooterJoin />
        <div>
          <p>Copyright &copy; 2021, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
