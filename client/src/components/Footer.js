import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { homeStyles as s } from '../constants/homeStyles';

const Footer = () => {
  return (
    <footer style={s.footer}>
      <div style={s.footerContainer}>

        {/* Column 1 */}
        <div style={s.footerColumn}>
          <h3 style={s.footerTitle}>POPULAR TOPICS</h3>
          <ul style={s.footerList}>
            <li style={s.footerListItem}>Medical Website Design Tips & Trends</li>
            <li style={s.footerListItem}>Business Website Cost Guide</li>
            <li style={s.footerListItem}>Small Business Website Design Ideas</li>
            <li style={s.footerListItem}>Create a YouTube Channel for Your Business</li>
            <li style={s.footerListItem}>Website Revamp Best Practices</li>
          </ul>

          <h4 style={{ ...s.footerTitle, marginTop: '1.5rem' }}>FOLLOW US</h4>
          <div style={s.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={s.socialLink}><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={s.socialLink}><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={s.socialLink}><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={s.socialLink}><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div style={s.footerColumn}>
          <h3 style={s.footerTitle}>FEATURED ARTICLES</h3>
          <ul style={s.footerList}>
            <li style={s.footerListItem}>Cost to Build a Website for a Small Business</li>
            <li style={s.footerListItem}>16 Best Medical Website Designs (2025 Update)</li>
            <li style={s.footerListItem}>Simple & Effective Testimonial Collection Tips</li>
            <li style={s.footerListItem}>How to Redesign Your Website Successfully</li>
            <li style={s.footerListItem}>Tips for Taking Professional Headshots</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div style={s.footerColumn}>
          <h3 style={s.footerTitle}>ABOUT CVA</h3>
          <ul style={s.footerList}>
            <li style={s.footerListItem}>About Us – Our Mission & Vision</li>
            <li style={s.footerListItem}>Read Our Blog</li>
            <li style={s.footerListItem}>Contact Our Team</li>
            <li style={s.footerListItem}>Portfolio – Our Work</li>
            <li style={s.footerListItem}>Pricing & Packages</li>
            <li style={s.footerListItem}>Client Testimonials</li>
          </ul>

          <div style={s.searchBox}>
            <input type="text" placeholder="Search our articles..." style={s.searchInput} />
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
